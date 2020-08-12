$(function () {
    console.log(1);
    $(".step__tooltip__title").mouseover(function () {
        $(".step__tooltip__description").show();
        $(this).css("textDecoration","underline")
    })
    $(".step__tooltip__title").mouseout(function () {
        $(".step__tooltip__description").hide()
        $(this).css("textDecoration","none")
    })
})