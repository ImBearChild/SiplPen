"use strict"
// Utility functions
//SiplPen = window.SiplPen || {};
SiplPen.util = (function () {

	function supportsHtmlStorage() {
		try {
			return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
			return false;
		}
	};

	function getText(el) {
		var ret = " ";
		var length = el.childNodes.length;
		for (var i = 0; i < length; i++) {
			var node = el.childNodes[i];
			if (node.nodeType != 8) {

				if (node.nodeType != 1) {
					// Strip white space.
					ret += node.nodeValue;
				} else {
					ret += getText(node);
				}
			}
		}
		return SiplPen.util.trim(ret);
	};

	function trim(string) {
		return string.replace(/^\s+|\s+$/g, '');
	};

	function fadeIn(element) {
		element.style.opacity = 0;
		element.style.transition = "opacity 0.5s";
		element.style.display = "block";
		setTimeout(function () {
			element.style.opacity = 1;
		}, 50);
		setTimeout(function () {
			element.style.transition = "";
		}, 500);
		//element.style.opacity = 1;
	}

	function fadeOut(element) {
		element.style.opacity = 1;
		element.style.transition = "opacity 0.5s";
		setTimeout(function () {
			element.style.display = "none";
			element.style.transition = "";
		}, 500);
		element.style.opacity = 0;
	}

	function ajax(method, url, data, callback, flag) {
		var xhr;
		if (typeof (flag) === undefined) {
			flag = true
		};
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else {
			xhr = new ActiveXObject('Microsoft.XMLHtml');
		}
		method = method.toUpperCase();
		if (method == "GET") {
			if (data) {
				xhr.open(method, url + '?' + data, flag);
			}
			xhr.open(method, url, flag);
			xhr.send();
		} else if (method == "POST") {
			xhr.open(method, url, flag);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhr.send(data);
		}

		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				callback(xhr.responseText);
			}
		}
	}

	//实际上演示功能，测试css排版设置用的
	//内置一段西塞罗的节选
	function loadDebugJS() {
		var fn = function (x) {
			eval(x)
		};
		ajax('GET', 'js/debugger.js', null, fn, true);
	}

	return {
		trim: trim,
		getText: getText,
		supportsHtmlStorage: supportsHtmlStorage,
		ajax: ajax,
		fadeIn: fadeIn,
		fadeOut: fadeOut,
		loadDebugJS: loadDebugJS,
	}

})()