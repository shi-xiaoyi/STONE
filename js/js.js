class Home {
    constructor() {
        this.nav();
        this.scroll();
        this.bigTurnImg();
        this.smallTurnImg();
        this.icon();
    }
    nav() {
        //为li鼠标放入时设置背景图片,移除时不加背景图片
        //li鼠标放入时显示ul,移除时影藏ul
        //下面的小li鼠标放入变白
        $(".nav-li").hover(
            function (e) {
                //移入时的事件
                $(this).css(
                    "background",
                    `url(../images/tjf/table.jpg) -${
            50 + $(this).index() * 117.5
          }px -52px`
                );
                $(this).children("ul").show();
                $(this).children(".new").css({
                    top: "50px",
                    left: "105px",
                });
            },
            function (e) {
                $(this).css("background", "");
                $(this).children("ul").hide();
                $(this).children(".new").css({
                    top: "-12px",
                    left: "50%",
                });
            }
        );
        //下面的小li鼠标放入变化
        $(".nav-li li").hover(
            function (e) {
                $(this).css("backgroundColor", "rgb(129,18,12)");
                $(e.target).children("a").css("color", "white");
            },
            function (e) {
                $(this).css("backgroundColor", "rgb(85, 20, 17)");
                $(e.target).children("a").css("color", "rgb(205, 153, 142)");
            }
        );
    }
    scroll() {
        $(window).scroll(function (e) {
            if ($(this).scrollTop() >= 234) {
                $(".nav").css({
                    position: "fixed",
                    top: "0",
                    left: "437px", //437
                });
            } else {
                $(".nav").css({
                    position: "relative",
                    margin: "0px auto",
                    left: "0px",
                });
            }
        });
    }
    bigTurnImg() {
        //设置小图片的点击事件
        let step = 0;

        function move() {
            $(this).css("border", "1px solid gold").siblings().css("border", "none");
            $(".turnImg-Img").css("left", `-${621 * $(this).index()}px`);
            $(".turnImg-button>.text>ul").css("top", `-${42 * $(this).index()}px`);
            step = $(this).index();
        }
        $(".turnImg-button-Img>li").mouseover(move);
        //设置自动轮播
        function autoMove() {
            $(".turnImg-button-Img>li")
                .eq(step)
                .css("border", "1px solid gold")
                .siblings()
                .css("border", "none");
            $(".turnImg-Img").css("left", `-${621 * step}px`);
            $(".turnImg-button>.text>ul").css("top", `-${42 * step}px`);
            step++;
            if (step > 2) step = 0;
        }
        setInterval(autoMove, 2000);
    }
    smallTurnImg() {
        //设置小轮播图
        //设置鼠标移入图片放大效果
        let step = 0;
        $(".turnimg-img>ul>li>img").hover(
            function () {
                clearInterval(timeID);
                $(this).css("transform", "scale(1.1,1.1)");
            },
            function () {
                timeID = setInterval(autoMove, 3000);
                $(this).css("transform", "scale(1,1)");
            }
        );

        function autoMove() {
            $(".turnimg-img>ul").css("left", `-${244 * step}px`);
            step++;
            if (step > 1) step = 0;
        }
        let timeID = setInterval(autoMove, 3000);
    }
    icon() {
        //设置图标的点击改变背景图
        $(".icon>li").each(function (index, ele) {
            $(ele).attr("num", `${index}`);
        });
        $(".icon>li").attr("flag", true);
        $(".icon>li").eq(0).attr("flag", false);
        $(".icon>li").click(function () {
            $(".download-btn>li").eq(1).show();
            $(this).css("background-position", `-${80 * $(this).index()}px -180px`);
            $(this).attr("flag", false).siblings().attr("flag", true);
            console.log($(this).attr("flag"));
            $(this)
                .siblings()
                .each((index, ele) => {
                    $(ele).css(
                        "background-position",
                        `-${80 * $(ele).attr("num")}px -90px`
                    );
                });
            if ($(this).index() == 0) {
                $(".download-btn>li").each((index, ele) =>
                    $(ele).css("background-position", `-29px -${364 + 118 * index}px`)
                );
            }
            if ($(this).index() == 1) {
                $(".download-btn>li").each((index, ele) =>
                    $(ele).css("background-position", `-34px -${42 + 103 * index}px`)
                ); //34 42 145
            }
            if ($(this).index() == 2) {
                $(".download-btn>li").eq(0).css("background-position", `-27px -245px`);
                $(".download-btn>li").eq(1).hide();
            }
        });
        //设置图标的鼠标移入移除事件
        $(".icon>li").hover(
            function () {
                if ($(this).attr("flag") == "true") {
                    $(this).css("background-position", `-${80 * $(this).index()}px 0px`);
                }
            },
            function () {
                if ($(this).attr("flag") == "true") {
                    $(this).css(
                        "background-position",
                        `-${80 * $(this).index()}px -90px`
                    );
                }
            }
        );
    }
}
$(function () {
    var home = new Home();
});