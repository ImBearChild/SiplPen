// editor
//SiplPen = window.SiplPen || {};
SiplPen.editor = (function () {

    //MARK:Var pool

    // Editor elements
    var headerField, contentField, lastType, currentNodeList, lastSelection;

    // Editor Bubble elements
    var textOptions, optionsBox, boldButton, italicButton, quoteButton, urlButton, urlInput;

    // Save
    var saveState_P = saveState;

    var composing;

    function init() {

        composing = false;
        bindElements();

        createEventBindings();

        // Load state if storage is supported
        if (SiplPen.util.supportsHtmlStorage()) {
            loadState();
        } else {
            loadDefault();
        }
        // Set cursor position
        var range = document.createRange();
        var selection = window.getSelection();
        range.setStart(headerField, 1);
        selection.removeAllRanges();
        selection.addRange(range);
        //Touchscreen
        if ("ontouchstart" in window) {
            optionsBox.classList.add("options-mobile");
        }
        //Make new content is <p>
        document.execCommand("defaultParagraphSeparator", false, "p");
        //
        contentField.addEventListener("paste", doPaste);
    }

    function doPaste(e) {
        e.stopPropagation();
        e.preventDefault();
        var text = '',
            event = (e.originalEvent || e);
        if (event.clipboardData && event.clipboardData.getData) {
            text = event.clipboardData.getData('text/plain');
        } else if (window.clipboardData && window.clipboardData.getData) {
            text = window.clipboardData.getData('Text');
        }
        //在此处处理text！
        var textArr = text.split("\n");
        for (j = 0, len = textArr.length; j < len; j++) {
            if (textArr[j] !== "") {
                textArr[j] = "<p>" + textArr[j] + "</p>"
            }
        }
        if (document.execCommand('insertHTML', false, textArr.join("")) === false) {
            alert(alertContent2);
        };
    }

    function createEventBindings() {

        // Key up bindings
        if (SiplPen.util.supportsHtmlStorage()) {

            document.onkeyup = function (event) {
                saveState_P();
                checkTextHighlighting(event);
            }

        } else {
            document.onkeyup = checkTextHighlighting;
        }

        // Mouse bindings
        document.onmousedown = checkTextHighlighting;
        document.onmouseup = function (event) {

            setTimeout(function () {
                checkTextHighlighting(event);
            }, 1);
        };

        // Touchscreen bindings
        //document.ontouchstart = checkTextHighlighting;
        document.oncontextmenu = function (event) {

            setTimeout(function () {
                checkTextHighlighting(event);
            }, 1);
        };

        // Window bindings
        window.addEventListener('resize', function (event) {
            updateBubblePosition();
        });


        document.body.addEventListener('scroll', function () {

            // TODO: Debounce update bubble position to stop excessive redraws
            updateBubblePosition();
        });

        // Composition bindings. We need them to distinguish
        // IME composition from text selection
        document.addEventListener('compositionstart', onCompositionStart);
        document.addEventListener('compositionend', onCompositionEnd);

        // Auto save
        // setInterval(saveState,5000);

    }


    function bindElements() {

        headerField = document.querySelector('.header');
        contentField = document.querySelector('.content');
        textOptions = document.querySelector('.text-options');

        optionsBox = textOptions.querySelector('.options');

        boldButton = textOptions.querySelector('.bold');
        boldButton.onclick = onBoldClick;

        italicButton = textOptions.querySelector('.italic');
        italicButton.onclick = onItalicClick;

        quoteButton = textOptions.querySelector('.quote');
        quoteButton.onclick = onQuoteClick;

        urlButton = textOptions.querySelector('.url');
        urlButton.onmousedown = onUrlClick;

        urlInput = textOptions.querySelector('.url-input');
        urlInput.onblur = onUrlInputBlur;
        urlInput.onkeydown = onUrlInputKeyDown;
    }

    function checkTextHighlighting(event) {

        var selection = window.getSelection();


        if ((event.target.className === "url-input" ||
                event.target.classList.contains("url") ||
                event.target.parentNode.classList.contains("ui-inputs"))) {

            currentNodeList = findNodes(selection.focusNode);
            updateBubbleStates();
            return;
        }

        // Check selections exist
        if (selection.isCollapsed === true && lastType === false) {

            onSelectorBlur();
        }

        // Text is selected
        if (selection.isCollapsed === false && composing === false) {

            currentNodeList = findNodes(selection.focusNode);

            // Find if highlighting is in the editable area
            if (hasNode(currentNodeList, "ARTICLE")) {
                updateBubbleStates();
                updateBubblePosition();

                // Show the ui bubble
                textOptions.className = "text-options active";
            }
        }

        lastType = selection.isCollapsed;
    }

    function updateBubblePosition() {

        var selection = window.getSelection();
        try {
            //如果页面突然调整大小，可能会出错
            var range = selection.getRangeAt(0);
            var boundary = range.getBoundingClientRect();
        } catch (error) {
            console.error(error);
        }
        //Touchscreen suppprt
        if ("ontouchstart" in window) {
            textOptions.style.top = boundary.bottom + 64 + window.pageYOffset + "px";
            textOptions.style.left = (boundary.left + boundary.right) / 2 + "px";
        } else {
            textOptions.style.top = boundary.top - 5 + window.pageYOffset + "px";
            textOptions.style.left = (boundary.left + boundary.right) / 2 + "px";

        }
    }

    function updateBubbleStates() {

        // It would be possible to use classList here, but I feel that the
        // browser support isn't quite there, and this functionality doesn't
        // warrent a shim.

        if (hasNode(currentNodeList, 'B')) {
            boldButton.className = "bold active"
        } else {
            boldButton.className = "bold"
        }

        if (hasNode(currentNodeList, 'I')) {
            italicButton.className = "italic active"
        } else {
            italicButton.className = "italic"
        }

        if (hasNode(currentNodeList, 'BLOCKQUOTE')) {
            quoteButton.className = "quote active"
        } else {
            quoteButton.className = "quote"
        }

        if (hasNode(currentNodeList, 'A')) {
            urlButton.className = "url active"
        } else {
            urlButton.className = "url"
        }


    }

    function onSelectorBlur() {

        textOptions.className = "text-options fade";
        setTimeout(function () {

            if (textOptions.className == "text-options fade") {

                textOptions.className = "text-options";
                textOptions.style.top = '-999px';
                textOptions.style.left = '-999px';
            }
        }, 260)
    }

    function findNodes(element) {

        var nodeNames = {};

        // Internal node?
        var selection = window.getSelection();

        // if( selection.containsNode( document.querySelector('b'), false ) ) {
        // 	nodeNames[ 'B' ] = true;
        // }

        while (element.parentNode) {

            nodeNames[element.nodeName] = true;
            element = element.parentNode;

            if (element.nodeName === 'A') {
                nodeNames.url = element.href;
            }
        }

        return nodeNames;
    }

    function hasNode(nodeList, name) {

        return !!nodeList[name];
    }

    function saveState(event) {

        localStorage['header'] = headerField.innerHTML;
        localStorage['content'] = contentField.innerHTML;
    }

    function loadState() {

        if (localStorage['header']) {
            headerField.innerHTML = localStorage['header'];
        } else {
            headerField.innerHTML = SiplPen.translater.getTran("defaultTitle"); // in default.js
        }

        if (localStorage['content']) {
            contentField.innerHTML = localStorage['content'];
        } else {
            loadDefaultContent()
        }
    }

    function loadDefault() {
        headerField.innerHTML = defaultTitle; // in default.js
        loadDefaultContent();
    }

    function loadDefaultContent() {
        contentField.innerHTML = SiplPen.translater.getTran("defaultContent");
        // in string.js
    }

    function onBoldClick() {
        document.execCommand('bold', false);
    }

    function onItalicClick() {
        document.execCommand('italic', false);
    }

    function onQuoteClick() {

        var nodeNames = findNodes(window.getSelection().focusNode);

        if (hasNode(nodeNames, 'BLOCKQUOTE')) {
            document.execCommand('formatBlock', false, 'p');
            document.execCommand('outdent');
        } else {
            document.execCommand('formatBlock', false, 'blockquote');
        }
    }

    function onUrlClick() {

        if (optionsBox.className == 'options') {
            optionsBox.className = 'options url-mode'

            // Set timeout here to debounce the focus action
            setTimeout(function () {

                var nodeNames = findNodes(window.getSelection().focusNode);

                if (hasNode(nodeNames, "A")) {
                    urlInput.value = nodeNames.url;
                } else {
                    // Symbolize text turning into a link, which is temporary, and will never be seen.
                    document.execCommand('createLink', false, '/');
                }

                // Since typing in the input box kills the highlighted text we need
                // to save this selection, to add the url link if it is provided.
                lastSelection = window.getSelection().getRangeAt(0);
                lastType = false;

                urlInput.focus();

            }, 100);

        } else if (optionsBox.className == 'options options-mobile') {
            lastSelection = window.getSelection().getRangeAt(0);
            word = prompt("URL:", "");
            window.getSelection();
            applyURL(word);
        } else {

            if ("ontouchstart" in window) {
                optionsBox.className = 'options options-mobile';
            } else {
                optionsBox.className = 'options '
            }
        }
    }

    function onUrlInputKeyDown(event) {

        if (event.keyCode === 13) {
            event.preventDefault();
            applyURL(urlInput.value);
            urlInput.blur();
        }
    }

    function onUrlInputBlur(event) {

        optionsBox.className = 'options';
        applyURL(urlInput.value);
        urlInput.value = '';

        currentNodeList = findNodes(window.getSelection().focusNode);
        updateBubbleStates();
    }

    function applyURL(url) {

        rehighlightLastSelection();

        // Unlink any current links
        document.execCommand('unlink', false);

        if (url !== "") {

            // Insert HTTP if it doesn't exist.
            if (!url.match("^(http|https)://")) {

                url = "http://" + url;
            }

            document.execCommand('createLink', false, url);
        }
    }

    function rehighlightLastSelection() {
        var selection = window.getSelection();
        if (selection.rangeCount > 0) {
            selection.removeAllRanges();
        }
        selection.addRange(lastSelection);
    }

    function getWordCount() {
        var text = SiplPen.util.getText(contentField);
        var sLen;
        if (text === "") {
            return 0
        } else {
            try {
                //console.log(text);
                //先将回车换行符做特殊处理
                str = text.replace(/(\r\n+|\s+|　+)/g, "\uffff");
                //处理英文字符数字，连续字母、数字、英文符号视为一个单词
                str = str.replace(/[\x00-\xff]/g, "m");
                //合并字符m，连续字母、数字、英文符号视为一个单词
                str = str.replace(/m+/g, "*");
                //去掉回车换行符
                str = str.replace(/\uffff+/g, "");
                //返回字数
                //计算的时候用了一个特殊的汉字"龘"拆分
                //Copyright:CSDN Blog:gavid0124
                //console.log(str);
                sLen = str.length;
            } catch (e) {}
            return sLen;
        }
    }

    function onCompositionStart(event) {
        composing = true;
    }

    function onCompositionEnd(event) {
        composing = false;
    }

    function cls() {
        paras = document.getElementsByClassName("content")[0];
        childs = paras.childNodes;
        for (var i = childs.length - 1; i >= 0; i--) {
            paras.removeChild(childs[i]);
        }
        document.getElementsByClassName("content")[0].style.opacity = 1;
        saveState();
    }

    function startStrictFlow() {
        localStorage['header'] = headerField.innerHTML;
        localStorage['content'] = "";
        saveState_P = function () {};
    }

    function finishStrictFlow() {
        saveState()
        saveState_P = saveState;
    }
    return {
        init: init,
        saveState: saveState,
        getWordCount: getWordCount,
        cls: cls,
        loadDefaultContent: loadDefaultContent,
        startStrictFlow: startStrictFlow,
        finishStrictFlow: finishStrictFlow
    }

})();