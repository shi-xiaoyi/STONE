(function nav() {
    //为li鼠标放入时设置背景图片,移除时不加背景图片
    //li鼠标放入时显示ul,移除时影藏ul
    //下面的小li鼠标放入变白
    $('.nav-li').hover(function (e) { //移入时的事件
        $(this).css('background', `url(../images/tjf/table.jpg) -${50+$(this).index()*117.5}px -52px`)
        $(this).children('ul').show()
        $(this).children('.new').css({
            'top': '50px',
            'left': '105px'
        })
    }, function (e) {
        $(this).css('background', '')
        $(this).children('ul').hide()
        $(this).children('.new').css({
            'top': '-12px',
            'left': '50%'
        })
    })
    //下面的小li鼠标放入变化
    $('.nav-li li').hover(function (e) {
            $(this).css('backgroundColor', 'rgb(129,18,12)')
            $(e.target).children('a').css('color', 'white')
        },
        function (e) {
            $(this).css('backgroundColor', 'rgb(85, 20, 17)')
            $(e.target).children('a').css('color', 'rgb(205, 153, 142)')
        })
})();
(function scroll() {
    $(window).scroll(function (e) {
        if ($(this).scrollTop() >= 234) {
            $(".nav").css({
                "position": "fixed",
                "top": "0",
                "left": "422.6px"
            })
        } else {
            $(".nav").css({
                "position": "relative",
                "margin": "0px auto",
                "left": "0px"
            })
        }
    })
})();