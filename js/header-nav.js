;
(function () {
    //点击让游戏的下拉切换动画，让电子竞技隐藏
    $('#game-btn').click(function () {
        var that = this;
        $('.gamelist').stop().slideToggle()
        $('.gameMatch').stop().slideUp(function () {
            $('.title span').fadeTo(1000, 0)
        })
        change(that)
    })
    //点击让电子竞技的下拉切换动画，让游戏隐藏
    $('#match-btn').click(function () {
        //注意this指向
        var that = this;
        change(that);
        $('.gameMatch').stop().slideToggle(function () {
            $('.title span').fadeTo(1000, 1)
        })
        $('.gamelist').stop().slideUp()

    });
    //比赛栏的滑动切换效果，当鼠标经过li的时候，让其中左边原来隐藏的盒子显示
    $('.match ul li').on('mouseover', function () {
        $(this).find('.left').css('backgroundColor', '#272d39')
        $(this).find('.right').stop().animate({
            width: 96
        })
    });
    $('.match ul li').on('mouseout', function () {
        $(this).find('.left').css('backgroundColor', '')
        $(this).find('.right').stop().animate({
            width: 0
        })
    })


    // 用来同步切换小图标
    function change(ele2) {
        $(ele2).siblings('i').toggleClass('rotate')
        // console.log($(ele2))
        $(ele2).parent().siblings('li').find('i').removeClass('rotate')
    }
    //通行证栏切换显示
    $('.passid').click(function () {
        $('#user').toggle();
    })
})()