'use strict'

var defaultTitle, defaultContent, alertContent1, confirmContent1;

var defaultTitle_DEF = 'This is ZenPenPlus';
var defaultTitle_CN = '简笔'

var defaultContent_DEF =
	'<p>\
A minimalist writing zone, where you can block out all distractions and get to what\'s important. The writing!  \
</p>\
<p> \
To get started, all you need to do is delete this text (seriously, just highlight it and hit delete), and fill the page with your own fantastic words. You can even change the title! \
</p> \
<p> \
	You can use <b>bold</b>, <i>italics</i>, <b><i>both</i></b> and <a href="https://imbearchild.github.io/ZenPenPlus/index.html?lang=cn"> urls </a> just by highlighting the text and selecting them from the tiny options box that appears above it.\
</p>\
<blockquote>\
	Quotes are easy to add too!\
</blockquote>\
<p>\
	And with the addition of flowstate mode, you can focus on writing more deeply.</p>\
	<p>This is the most dangerous function of this application. You have to keep writing, or everything will be erased if you stop beyond the expiring time.\
</p>\
';
var defaultContent_CN =
	'<p>\
一个极简的写作区域。这里可以阻挡所有的干扰，并让您专注于重要的事情——写作！  \
</p><p>\
首先，你只需要删除这段文字（只需Ctrl+A选中并按下Del键），然后用你自己的精彩词汇填充页面。标题也可以自由修改。 \
</p> \
<p> \
	只需选中文本点击上方出现的小选项框，就可以使用<b>粗体</b>, <i>斜体</i>, <b><i>粗斜体</i></b> 还有 <a href="https://imbearchild.github.io/ZenPenPlus/index.html?lang=cn">链接</a> \
</p>\
<blockquote>\
	引用也很容易添加！\
</blockquote>\
<p>页面的左侧是本软件的菜单栏，您可以使用该处的按钮设置全屏、切换主题、设置目标字数、保存文字以及启动心流模式。</p>\
<p>如果您觉得默认字体显示效果不尽人意，您可以使用左下角的齿轮按钮打开设置界面进行调整。</p>\
<p>\
	随着心流模式的加入，你可以更加专注于写作。</p>\
	<p>现在就点击右侧的双箭头试一试吧。\
</p>\
'

var alertContent1_DEF = "An internal error has occurred. Please save your document and use \"Clean ALL user data.\" item to reset data."
var alertContent1_CN = "发生内部错误。\n因储存的数据与程序逻辑不一致，此设置项暂不可用。\n要修复此问题请保存您的文档，并使用设置项“清除所有用户数据”来重设数据。"

var confirmContent1_DEF = "All user date will be deleted. Are you sure to continue?"
var confirmContent1_CN = "所有用户数据都将被清除。您确定要继续吗？"

var tran = new Translater();

function tranString() {
	if (tran.getLang() === "cn") {
		defaultTitle = defaultTitle_CN;
		defaultContent = defaultContent_CN;
		alertContent1 = alertContent1_CN;
		confirmContent1 = confirmContent1_CN;
	} else {
		defaultTitle = defaultTitle_DEF;
		defaultContent = defaultContent_DEF;
		alertContent1 = alertContent1_DEF;
		confirmContent1 = confirmContent1_DEF;
	}
}

tranString();