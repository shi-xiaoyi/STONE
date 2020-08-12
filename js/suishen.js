//   1.获取元素在当前视口上部偏移量
var b1 = $(".box1").offset().top;
console.log(b1);
var b2 = $(".box2").offset().top;
console.log(b2);
var b3 = $(".box3").offset().top;
console.log(b3);
var b4 = $(".box4").offset().top;
console.log(b4);
var b5 = $('.box5').offset().top;
console.log(b5);
var c = document.documentElement;
// 2.滚动条滚动事件
window.onscroll = function () {
    // 遍历所有div判断布尔值，拿到每个索引号,ele元素本身
    // 页面滚动动画效果
    $('.boxDiv').each(function (index, ele) {
        // 滚动判断条件
        if (
            // 条件1：在范围内活动，动画未开始，进入目标页面，最大范围盒子中间
            // 获取页面可视区高度+ 被卷去Y偏移 >= 当前元素距离最开始页面距离（开始进入目标页面）
            //获取页面可视区高度+  <= 当前元素距离最开始页面距离+ 进入当前盒子高一般（目标页面最大范围）
            c.clientHeight + window.pageYOffset >= $(ele).offset().top &&
            c.clientHeight + window.pageYOffset <= $(ele).offset().top + $(ele).height() / 2
        ) {
            // 第二张图初始p2和t2位置
            $(ele).find('.p2').stop().animate({
                top: '500px',
            }, 300);
            $(ele).find('.t2').stop().animate({
                right: '800px',
            }, 300);
            // 第三张图初始p3和t3位置
            $(ele).find('.p3').stop().animate({
                top: '500px',
            }, 300);
            $(ele).find('.t3').stop().animate({
                left: '50px',
            }, 300);
            // 第四张图初始p4和t4位置
            $(ele).find('.p4').stop().animate({
                top: '700px',
            }, 300);
            $(ele).find('.t4').stop().animate({
                left: '10px',
            }, 300);
            // 第五张图初始p5和t5位置
            $(ele).find('.p5').stop().animate({
                top: '700px',
            }, 300);
            $(ele).find('.t5').stop().animate({
                right: '0px',
            }, 300);


        }  // 条件2：在范围内活动，动画已执行，最大范围盒子结束位置
        // 获取页面可视区高度+ 被卷去Y偏移 >= 当前元素距离最开始页面距离（开始进入目标页面）
        //获取页面可视区高度+ 被卷去Y偏移 <= 当前元素距离最开始页面距离+ 进入当前盒子高（目标页面最大范围）
        else if (c.clientHeight + window.pageYOffset >= $(ele).offset().top &&
            c.clientHeight + window.pageYOffset <= $(ele).offset().top + $(ele).height()) {
            // 第二张图变化后p2和t2位置
            $(ele).find('.p2').stop().animate({
                top: '150px',

            }, 300);
            $(ele).find('.t2').stop().animate({
                right: '100px',

            }, 300);
            // 第三张图变化p3和t3位置
            $(ele).find('.p3').stop().animate({
                top: '150px',
            }, 300);
            $(ele).find('.t3').stop().animate({
                left: '150px',
            }, 300);
            // 第四张图变化p4和t4位置
            $(ele).find('.p4').stop().animate({
                top: '500px',
            }, 300);
            $(ele).find('.t4').stop().animate({
                left: '100px',
            }, 300);
            // 第五张图变化p4和t4位置
            $(ele).find('.p5').stop().animate({
                top: '400px',
            }, 300);
            $(ele).find('.t5').stop().animate({
                right: '100px',
            }, 300);
            // 滚动到第5个盒子中间中间，固定下载页面显示，小于此距离，页面隐藏
            // console.log(window.pageYOffset >= $('.box5').offset().top + $('.box5').height() / 2);
            if (window.pageYOffset >= $('.box5').offset().top + $('.box5').height() / 2) {
                $('.go-download').css("display", 'block');

            } else if (window.pageYOffset < $('.box5').offset().top + $('.box5').height() / 2) {
                $('.go-download').css("display", 'none');
            }
   
        }
                 // 页面滚动相应图片，侧边li变化
                 var index = $(ele).index();
                 console.log(index);
                 $('.sidePoint li').eq(index).css({
                         border: '4px solid #fff',
                     }).siblings().css({
                         border: '4px solid #fff',
                     })
    })
}
// li点击到滚动到相应页面
$('.point').click(function () {
    var index = $(this).index();
    console.log(index);
    var Top = $('.boxDiv').eq(index).offset().top;
    $('body, html').stop().animate(
        {
            scrollTop: Top,
        },
        300
    );
});
// 鼠标点击底部关闭效果
$('.close').click(function () {
    $('.go-download').css("display", 'none');
})