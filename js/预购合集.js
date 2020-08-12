// window.onload(function () {

// })
$(function () {
  //   var ii = window.pageXOffset;
  //   console.log(ii);
  window.onscroll = function () {
    if (window.pageYOffset >= 40) {
      $(".nav-bottm").css({
        position: "fixed",
        zIndex: 9999,
        top: 0,
      });

      //   alert("0000");
    } else {
      $(".nav-bottm").css({
        position: "initial",
        zIndex: 9999,
        top: 0,
      });
    }
  };
  // 点击搜素框
  $(".search").on("click", function () {
    $(this).css("height", "50");
    // $(this).css("color", "red");
  });
  $("a").on("mouseover", function () {
    $(this).css("color", "#ffffff");
  });
  $("a").on("mouseout", function () {
    $(this).css("color", "");
  });
  // 点击我的账户
  $(".zhanghu").find(".box").css("left", "-220px");
  $(".zhanghu").on("click", function () {
    $(this).children().toggle();
  });

  // 点击游戏
  $(".youxi").on("click", function () {
    $(this).siblings().toggle();
    $(this).parent().siblings().find(".fuwu").siblings().css("display", "none");
    $(this)
      .parent()
      .siblings()
      .find(".dianshu")
      .siblings()
      .css("display", "none");
  });
  // 点击服务
  $(".fuwu").on("click", function () {
    $(this).siblings().toggle();
    $(this)
      .parent()
      .siblings()
      .find(".youxi")
      .siblings()
      .css("display", "none");
    $(this)
      .parent()
      .siblings()
      .find(".dianshu")
      .siblings()
      .css("display", "none");
  });
  // 点击暴雪游戏点数
  $(".dianshu").on("click", function () {
    $(this).siblings().toggle();
    $(this)
      .parent()
      .siblings()
      .find(".youxi")
      .siblings()
      .css("display", "none");
    $(this).parent().siblings().find(".fuwu").siblings().css("display", "none");
  });
  var btns = $(".t-nav");
  var xqs = $(".xq");
  console.log(btns);
  console.log(xqs);
  btns.click(function () {
    var index = $(this).index();
    // console.log(index);
    // console.log(xqs[index]);
    $(this).find("a").css("color", "#00aeff");
    $(this).find("a").mouseout().css("color", "#00aeff");
    // $(this).siblings().find("a").mouseout().css("color", "");
    $(this).css("border-bottom", "2px solid #00aeff");
    $(this).siblings("").css("border-bottom", "");
    xqs.eq(index).css("display", "block");
    xqs.eq(index).siblings(".xq").css("display", "none");
  });
  //   for (var i = 0; i < btns.length; i++) {
  //     btns[i].onclick = function () {
  //       var Index = this.index;
  //       //   console.log(Index);

  //       console.log();
  //     };
  //   }
  //   btns.click(function () {
  //     var Index = this.index;
  //     console.log(this.index);

  //     console.log(Index);
  // }
});
