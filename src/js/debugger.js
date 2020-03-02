'use strict'
console.info("Debugger.js is loaded");
SiplPen.debugger = (function () {
    var lorem_CN = `<p><i>作者：马库斯·图留斯·西塞罗（古罗马）；</ br>译者：BearChild</i></p>
    <p>我必须向你们解释，谴责快乐和赞美痛苦的这一错误观念是如何诞生的，我将给你们一个完整的系统说明，并阐述真理的伟大探索者，人类幸福的主要建造者的实际教导。</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a arcu a tellus consectetur dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nunc id tortor tincidunt vestibulum sit amet vitae mi. Maecenas nec lacus libero, et blandit mi. Curabitur dignissim magna vitae elit dignissim mollis. Quisque porttitor sollicitudin metus placerat convallis. Duis nulla leo, tristique ultrices ornare nec, consequat et tellus. Vivamus in ligula vehicula quam venenatis fermentum. Donec fermentum, dolor sit amet semper dapibus, ipsum enim iaculis lorem, ac ullamcorper mi nunc id tortor. Aliquam suscipit fermentum molestie. Nullam at sapien ultrices massa tempus sodales. Fusce mattis dolor eget nulla euismod sit amet porttitor libero sollicitudin. Proin vitae sem sit amet nibh pulvinar dignissim at nec magna. Ut a arcu arcu. Praesent vitae euismod elit.</p>
    <p>没有人拒绝、不喜欢或回避快乐本身，因为这是快乐，回避快乐而是因为那些不知道如何理性地追求快乐的人会遇到极其痛苦的后果。也没有人爱、追求或渴望获得痛苦，因为这是痛苦，接受痛苦是因为偶尔发生于辛劳和痛苦中的境遇可以给他带来一些极大的快乐。</p>
    <p>Curabitur sagittis euismod sem vitae feugiat. Nullam dictum porta odio, eu consectetur nunc bibendum nec. Ut dignissim luctus pulvinar. Phasellus auctor mauris quis risus lacinia consectetur vitae a purus. Nullam non ultricies odio. Nulla dignissim tortor pulvinar diam blandit iaculis. Donec elit odio, gravida in semper ullamcorper, pellentesque sed tellus. Sed pellentesque sodales nibh, sit amet posuere sem facilisis et. Donec rutrum, mauris interdum ullamcorper molestie, ipsum mi consequat sapien, rhoncus laoreet ante velit convallis metus. Phasellus non ligula in libero gravida gravida ut quis lacus. Donec non sem mauris, in porttitor lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non metus erat. Nam vitae tortor in augue elementum hendrerit.</p>
    <p>举一个微不足道的例子，除非从中获得一些好处，我们中谁曾经进行过艰苦的体育锻炼？但是，谁有权找一个选择享受快乐并不打扰他人的人，或者一个避免不能带来快乐的痛苦的人的过错呢？</p>
    <p>Sed ultricies turpis ut mauris rutrum iaculis. Nulla facilisi. Proin ac enim quis enim bibendum malesuada non sit amet metus. Maecenas ac dui metus, porta tincidunt velit. Morbi urna augue, adipiscing in feugiat eu, commodo eget elit. Fusce venenatis bibendum ante, id lobortis nisi porttitor vitae. Ut vel tellus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut a mauris ac massa commodo commodo et et neque.</p>
    <p>另一方面，我们以义愤和厌恶谴责那些被当下的快乐的魅力变得思维混乱和意志消沉，被欲望深深蒙蔽，以至于他们无法预见随之而来的痛苦和麻烦的人；同样责备那些因意志软弱而未能履行职责的人，这与从辛劳和痛苦中退缩等同。</p>
    <p>Curabitur in libero augue. Nam scelerisque, ipsum at tristique sagittis, lectus metus dictum lorem, et congue eros leo sit amet mauris. Cras eget ultrices libero. Integer dui elit, accumsan at luctus ut, consectetur non lacus. Integer dapibus nibh eu odio tincidunt eget pharetra nisl ultrices. Aenean varius placerat sem, ac feugiat nisl aliquet id. Quisque leo dolor, faucibus eu tempus adipiscing, elementum suscipit odio. Mauris viverra fermentum eleifend. Nulla vulputate dictum nisi id feugiat. Sed at mollis urna. Proin orci nisi, lobortis sed dignissim eu, commodo sit amet sem. Nunc feugiat faucibus luctus. Mauris eget justo quis magna accumsan molestie. Maecenas accumsan viverra velit eget euismod. Nam gravida lorem quis diam blandit nec dapibus sem condimentum. Aenean in velit sit amet neque condimentum interdum.</p>
    <p>这些案例非常简单且易于区分。在自由的时刻，当我们的选择力量不受限制，当没有什么能阻止我们做我们最喜欢做的事时，每一种快乐都是值得欢迎的，每一个痛苦都是可以避免的。但在某些情况下，由于责任上的要求或事业上的职责，经常会出现快乐必须被否定和烦恼必须被接受的情况。</p>
    <p>Pellentesque eu libero ipsum, id pulvinar lorem. In quis augue ultricies nisi hendrerit fringilla eget vel eros. Sed at velit tristique nisl blandit ullamcorper. Aenean vel odio in ante cursus tincidunt. Suspendisse potenti. Nam viverra cursus justo non consequat. Donec vel euismod nunc. Nam ullamcorper nisl eget ipsum fermentum mollis volutpat mi pretium. Nullam et sollicitudin nulla. Vestibulum elit libero, dictum non adipiscing quis, rutrum ac mi. Nulla in ligula sed felis placerat fermentum. Cras lectus ante, mattis nec pretium ac, imperdiet vel ipsum. Proin posuere interdum sem sit amet varius. Nulla venenatis orci sed neque sagittis eu convallis ante suscipit.</p>
    <p>因此，智者总是坚持这种选择原则：他拒绝快乐来获得其他更大的快乐，或者他忍受痛苦以避免更坏的痛苦。</p>
    `
    var lorem_EN = `<p><i>Author: Marcus Tullius Cicero;</ br>Translater: Anonym</i></p>
    <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
    <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
    <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
    <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>
    <p>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>`

    function loadLorem_CN() {
        localStorage["content"] = lorem_CN;
        localStorage["header"] = "善与恶的极端（节选）"
        location.reload();
    }

    function loadLorem_EN() {
        localStorage["content"] = lorem_EN;
        localStorage["header"] = "On the Ends of Good and Evil (Excerpt)"
        location.reload();
    }
    return {
        loadLorem_CN: loadLorem_CN,
        loadLorem_EN: loadLorem_EN,
    }
})();