(function () {
  $(function () {
    //利用遍历，循环给顶部的添加职业栏目，同时添加背景图片
    //下面数组保存的是背景图片的位置
    var hero_bg = [
      "-614px -546px",
      "-386px -211px",
      "-306px -298px",
      "-386px -297px",
      "-386px -384px",
      "-613px -470px",
      "-693px -469px",
      "0px -586px",
      "-79px -587px",
      "-159px -587px",
      "-306px -383px",
    ];

    //循环追加li
    $.each(hero_bg, function (index, value) {
      var li = $(`<li></li>`);
      li.html(`<a href="jacascript:;"></a>`);
      li.css({
        backgroundPosition: value,
      });
      $(".top-nav .btn").append(li);
    });
    //设置职业名称
    // 先设置数组保存职业名称和背景图片
    var hero_name = [
      "恶魔猎手",
      "德鲁伊",
      "猎人",
      "法师",
      "圣骑士",
      "牧师",
      "潜行者",
      "萨满祭司",
      "术士",
      "战士",
      "中立",
    ];
    var hero_box = [
      "-852px 0px",
      "0px -470px",
      "-307px -470px",
      "-522px -172px",
      "0 -384px",
      "-522px 0",
      "-522px -86px",
      "0 -212px",
      "-522px -258px",
      "-522px -344px",
      "0 -298px",
    ];

    //鼠标点击改变职业名称和背景图片
    $(".top-nav .btn li").click(function () {
      var index = $(this).index();
      //添加具有缩放属性的类名
      $(this).toggleClass("current");

      //再次点击按钮时要显示全部的内容页面，所以要进行判断
      if ($(".current").length == 0) {
        $(".big-banner .contanier h1").text("全部卡牌");
        $(".big-banner .contanier h1").css({
          backgroundPosition: "0px -298px",
        });
        allcard(all);
      } else {
        $(this).siblings().removeClass("current");
        $(".big-banner .contanier h1").text(hero_name[index]);
        $(".big-banner .contanier h1").css({
          backgroundPosition: hero_box[index],
        });
        allcard(patarr[index]);
      }
    });
    //封装一个可以输出图片地址的函数
    function fn(dress, num) {
      var arr = [];
      for (var i = 1; i <= num; i++) {
        if (i >= 10) {
          arr.push(`../uploads/sxy/${dress}${i}.png`);
        } else {
          arr.push(`../uploads/sxy/${dress}0${i}.png`);
        }
      }
      return arr;
    }
    //恶魔卡组
    var em = fn("emo", 11);
    //德鲁伊卡组
    var dly = fn("d", 6);
    //猎人卡组
    var lr = fn("l", 3);
    //法师fs
    var fs = fn("f", 7);
    //圣骑士
    var sqs = fn("s", 6);
    //牧师
    var ms = fn("m", 7);
    //潜行者
    var qxz = fn("q", 6);
    //萨满
    var sm = fn("sm", 8);
    //术士
    var ss = fn("ss", 12);
    //战士
    var zs = fn("z", 6);
    //中立
    var zl = fn("zl", 10);
    // console.log(em);
    // console.log(dly);
    //   console.log(zl);
    //全部的卡牌
    var all = [
      ...em,
      ...dly,
      ...lr,
      ...fs,
      ...sqs,
      ...ms,
      ...qxz,
      ...sm,
      ...ss,
      ...zs,
      ...zl,
    ];

    //  二维数组用来切换
    var patarr = [em, dly, lr, fs, sqs, ms, qxz, sm, ss, zs, zl];
    // console.log(patarr);
    // console.log(all);

    //卡牌描述，每个职业的卡牌描述

    var emobj = [{
        h1: "残片震爆秘术师",
        h3: "感受这震撼灵魂的伤害吧。",
      },
      {
        h1: "铸魂宝石匠",
        h3: "宝石匠点燃了一张残片。残片发出强烈的光，她的英雄从没有像现在这样高大。",
      },
      {
        h1: "灵魂学家玛丽希亚",
        h3: "珍爱生命，别说她的研究领域是“软科学”。",
      },
      {
        h1: "灵魂剥离",
        h3: "“再往边上靠一点，再靠一点。”",
      },
      {
        h1: "精魂狱卒",
        h3: "“当然了，它们确实被关在你的牌库里。但思想，才更像是真正的监牢。”",
      },
      {
        h1: "切髓之刃",
        h3: "非常适合用来对付冰冠堡垒的第一个首领。",
      },
      {
        h1: "明星学员斯特里娜",
        h3: "所谓作弊，不过是“合理”地利用了你的资源。",
      },
      {
        h1: "法师猎手",
        h3: "奔袭如火。讨厌话多。喜欢紫色。",
      },
      {
        h1: "邪能学说",
        h3: "不要再念邪音了，要扣钱的。",
      },
      {
        h1: "滑翔",
        h3: "“我的爱好是滑雪，你呢？” “滑翔……”",
      },
      {
        h1: "金牌猎手克里",
        h3: "大师级猎手，喜好赢得比赛和吃冰淇淋。",
      },
      {
        h1: "仇恨之轮",
        h3: "用两张仇恨之轮，能不能组成一辆仇恨之自行车？",
      },
    ];
    var dlyobj = [{
        h1: "萌物来袭",
        h3: "有的卡牌强是因为超模，有的卡牌强是因为可爱。",
      },
      {
        h1: "雕琢符文",
        h3: "“多美的图腾，就这么被你刻毁了……真是符了！”",
      },
      {
        h1: "园地管理员",
        h3: "想让树妖在不踩到花花草草的前提下管理园地，实在有点难。",
      },
      {
        h1: "雷霆绽放",
        h3: "神奇的是，这种花不会在同一个地方绽放两次。",
      },
      {
        h1: "大导师野爪",
        h3: "她同时占据着校园里的两块板：黑板和猫抓板。",
      },
      {
        h1: "自然研习",
        h3: "“我有一本初版的！看看，看这上面的年轮。”",
      },
    ];
    var lrobj = [{
        h1: "萌物来袭",
        h3: "有的卡牌强是因为超模，有的卡牌强是因为可爱。",
      },
      {
        h1: "金牌猎手克里",
        h3: "大师级猎手，喜好赢得比赛和吃冰淇淋。",
      },
      {
        h1: "大导师野爪",
        h3: "她同时占据着校园里的两块板：黑板和猫抓板。",
      },
    ];
    var fsobj = [{
        h1: "詹迪斯·巴罗夫",
        h3: "整座学园都属于她的父母。所以她当然要和学生们好好玩玩！",
      },
      {
        h1: "研究伙伴",
        h3: "老师，我的作业被一个侏儒烧掉了！”",
      },
      {
        h1: "莱斯·霜语",
        h3: "尽管其他教职员工总是对莱斯冷语相向，他一直都是克尔苏加德校长最欣赏的那一个。",
      },
      {
        h1: "决斗大师莫扎奇",
        h3: "对待学生就像对待旗鼓相当的对手，所谓的决斗其实是单方面的碾压。",
      },
      {
        h1: "燃烧",
        h3: "萨莉有三个朋友，都是白银之手新兵，并以任意次序站成一排。在施放这个法术后，她还剩几个朋友？（请在空白处作答。）",
      },
      {
        h1: "魔杖窃贼",
        h3: "想来点什么？”",
      },
      {
        h1: "衰变飞弹",
        h3: "校内法术对决赛总是以满地的小精灵收场。",
      },
    ];
    var sqsobj = [{
        h1: "虔诚的学徒",
        h3: "圣光自带的照明效果使得阅读体验愈加轻松。",
      },
      {
        h1: "终身教授图拉扬",
        h3: "愿邪恶在正义面前退散；愿弱者在和平之中安居。我愿终有一天，所有人都无需恐惧。而为了那一天，我愿献出我的生命。”",
      },
      {
        h1: "流光之赐",
        h3: "圣光会赐给你一份小纪念品，一个小雪花球，里面装着微缩版的你。",
      },
      {
        h1: "仪式重槌",
        h3: "专为纪律委员设计。",
      },
      {
        h1: "双盾优等生",
        h3: "考试当天带上一根油条和两块盾，你也能成为优等生。",
      },
      {
        h1: "新生入学",
        h3: "想来点什么？”",
      },
    ];
    var msobj = [{
        h1: "虔诚的学徒",
        h3: "圣光自带的照明效果使得阅读体验愈加轻松。",
      },
      {
        h1: "流光之赐",
        h3: "圣光会赐给你一份小纪念品，一个小雪花球，里面装着微缩版的你。",
      },
      {
        h1: "秘教侍僧",
        h3: "为何他能在班级中名列前茅？全靠牵线搭桥掌握了控制权！",
      },
      {
        h1: "血肉巨人",
        h3: "这是个“巨大”的错误。",
      },
      {
        h1: "教导主任加丁",
        h3: "“他从不按什么正态曲线打分，直接在零分那里画条竖线，把所有人都挂在上面。”",
      },
      {
        h1: "脆骨破坏者",
        h3: "再要十斤寸金软骨，细细地剁做臊子，不要见些肉在上面！",
      },
      {
        h1: "疲倦的大一新生",
        h3: "三更灯火五更鸡，新生眼皮抬不起。",
      },
    ];
    var qxzobj = [{
        h1: "詹迪斯·巴罗夫",
        h3: "整座学园都属于她的父母。所以她当然要和学生们好好玩玩！",
      },
      {
        h1: "秘密通道",
        h3: "到了夜里，我就用这条通道偷偷溜进厨房，做点黑暗料理。",
      },
      {
        h1: "卡斯迪诺夫教授",
        h3: "给我刀！",
      },
      {
        h1: "渗透者莉莉安",
        h3: "她决心彻查此地，哪怕要付出生命的代价，付两次！",
      },
      {
        h1: "钢铁舞者",
        h3: "刀尖之舞，最为致命。",
      },
      {
        h1: "魔杖窃贼",
        h3: "“想来点什么？”",
      },
    ];
    var smobj = [{
        h1: "导师火心",
        h3: "当心中的火焰燃起，就连死亡也阻止不了你",
      },
      {
        h1: "雕琢符文",
        h3: "“多美的图腾，就这么被你刻毁了……真是符了！”",
      },
      {
        h1: "园地管理员",
        h3: "想让树妖在不踩到花花草草的前提下管理园地，实在有点难。",
      },
      {
        h1: "莱斯·霜语",
        h3: "尽管其他教职员工总是对莱斯冷语相向，他一直都是克尔苏加德校长最欣赏的那一个。",
      },
      {
        h1: "图腾巨怪",
        h3: "这原本是个美术项目，没人知道它的终点在哪。",
      },
      {
        h1: "雷霆绽放",
        h3: "神奇的是，这种花不会在同一个地方绽放两次。",
      },
      {
        h1: "笔记能手",
        h3: "你永远想不到考试会考哪张牌。",
      },
      {
        h1: "衰变飞弹",
        h3: "校内法术对决赛总是以满地的小精灵收场。",
      },
    ];
    var ssobj = [{
        h1: "灵魂学家玛丽希亚",
        h3: "珍爱生命，别说她的研究领域是“软科学”。",
      },
      {
        h1: "灵魂剥离",
        h3: "“再往边上靠一点，再靠一点。”",
      },
      {
        h1: "精魂狱卒",
        h3: "“当然了，它们确实被关在你的牌库里。但思想，才更像是真正的监牢。”",
      },
      {
        h1: "影光学者",
        h3: "掌握了灵魂魔法，你就能用它解决断电后的阅读灯光问题。",
      },
      {
        h1: "虚空吸食者",
        h3: "虚空和吸食者的共同点：尝不出味道。",
      },
      {
        h1: "校园精魂",
        h3: "“……密……封……线……内……不……要……答……题……”",
      },
      {
        h1: "高阶女巫维洛",
        h3: "一个恶魔努力，全员共享成绩。",
      },
      {
        h1: "邪能学说",
        h3: "不要再念邪音了，要扣钱的。",
      },
      {
        h1: "血肉巨人",
        h3: "这是个“巨大”的错误。",
      },
      {
        h1: "教导主任加丁",
        h3: "“他从不按什么正态曲线打分，直接在零分那里画条竖线，把所有人都挂在上面。”",
      },
      {
        h1: "骨网之卵",
        h3: "今年找彩蛋的时候一定特别刺激！",
      },
      {
        h1: "脆骨破坏者",
        h3: "再要十斤寸金软骨，细细地剁做臊子，不要见些肉在上面！",
      },
    ];
    var zsobj = [{
        h1: "卡斯迪诺夫教授",
        h3: "给我刀！",
      },
      {
        h1: "团伙核心",
        h3: "“计划是这样的：你走左边，我走右边，让那个受伤的去扛伤害。”",
      },
      {
        h1: "仪式重槌",
        h3: "专为纪律委员设计。",
      },
      {
        h1: "钢铁舞者",
        h3: "刀尖之舞，最为致命。",
      },
      {
        h1: "血骨傀儡",
        h3: "他现在是丑，但他当年20/20的时候，也是鲜肉一块。",
      },
      {
        h1: "问题学生",
        h3: "“既然你诚心诚意地发问了！”“我们就大发慈悲地告诉你！”",
      },
    ];
    var zlobj = [{
        h1: "钥匙专家阿拉巴斯特",
        h3: "成为钥匙专家的关键：多准备复制品。",
      },
      {
        h1: "维克图斯",
        h3: "不要害怕这些黑暗魔法。他会确保顺利孵化不会搞砸。",
      },
      {
        h1: "感知宝珠",
        h3: "当一张牌沉入牌库底，当一局牌成了谜。",
      },
      {
        h1: "博学者普克尔特",
        h3: "quicksort =quicksort (x:xs) = quicksort small ++ (x : quicksort large) where small = [y | y <- xs, y <= x] large = [y | y <- xs, y > x]",
      },
      {
        h1: "甩笔侏儒",
        h3: "笔确实胜于长剑，特别是在短距离投射打击时的空气动力学性能方面。",
      },
      {
        h1: "校长克尔苏加德",
        h3: "“你想知道我的秘密，嗯？我在长袍的袖子里藏了一点金枪鱼，他最喜欢那个了。哦，你说那些复活的死者？那只是小事，小事。”",
      },
      {
        h1: "黑岩法术抄写员",
        h3: "舍不得法术，套不着法术。",
      },
      {
        h1: "异教低阶牧师",
        h3: "新手牧师，让对手无法可施。",
      },
    ];
    var allobj = [
      ...emobj,
      ...dlyobj,
      ...lrobj,
      ...fsobj,
      ...sqsobj,
      ...msobj,
      ...qxzobj,
      ...smobj,
      ...ssobj,
      ...zsobj,
      ...zlobj,
    ];
    var poart_allobj = [
      emobj,
      dlyobj,
      lrobj,
      fsobj,
      sqsobj,
      msobj,
      qxzobj,
      smobj,
      ssobj,
      zsobj,
      zlobj,
    ];
    // console.log(allobj);
    //封装一个函数，让其在页面刷新和按钮点击切换全部时候，页面刚渲染的是全部的卡牌
    function allcard(shuju) {
      // 首先要清空内容

      $(".big-banner .contanier ul").empty();
      $.each(shuju, function (index, ele) {
        var li = $(`<li data-index=${index} ></li>`);
        li.html(`<img src=${ele} />`);
        $(".big-banner .contanier .card").append(li);
        // console.log(1);
      });
    }

    //调用函数
    allcard(all);
    //关闭遮罩层
    $(".xiangqing .close").click(function () {
      $(".mask").hide();
      $(".xiangqing").addClass("none");
    });
    //给卡牌注册点击事件
    //因为是追加渲染的结果，所以利用事件委托
    var src = [];
    var zong;
    var num;
    //声明一个数组用来存放，当你点击时，获取页面上卡牌li的img地址
    $(".big-banner .contanier ul ").on("click", "li", function () {
      zong = $(".big-banner .contanier ul li").length;
      num = $(this).index();
      src = [];
      $(".mask").show();
      $(".xiangqing").removeClass("none");
      $(".big-banner .contanier ul li").each(function (index, ele) {
        var adress = $(ele).find("img").prop("src");
        src.push(adress);
      });
      $(".explain img").prop("src", src[num]);
      $(".xiangqing p").html(`${num + 1}/${zong}`);
    });
    ///点击对应的语录
    $(".big-banner .contanier ul").on("click", "li", function () {
      if ($(".current").length == 0) {
        var index1 = $(this).index();
        $(".explain .text h3").text(allobj[index1].h3);
        $(".explain .text h1").text(allobj[index1].h1);
      } else {
        var index2 = $(".current").index();
        var index1 = $(this).index();
        $(".explain .text h3").text(poart_allobj[index2][index1].h3);
        $(".explain .text h1").text(poart_allobj[index2][index1].h1);
      }
    });
    //
    //切换图片.伪轮播图
    // 右边按钮;
    $(".xiangqing .right").click(function () {
      num++;
      if (num == $(".big-banner .contanier ul li").length) {
        num = $(".big-banner .contanier ul li").length - 1;
        return;
      }
      $(".xiangqing p").html(`${num + 1}/${zong}`);
      $(".explain img").prop("src", src[num]);

      //每次点击之前需要先判断是否有被点击过的对象，如果没有就使用全部的卡组语录，否则就使用各自的卡组语录（二维数组）
      if ($(".current").length == 0) {
        $(".explain .text h3").text(allobj[num].h3);
        $(".explain .text h1").text(allobj[num].h1);
      } else {
        var index2 = $(" li .current").index();

        $(".explain .text h3").text(poart_allobj[index2][num].h3);
        $(".explain .text h1").text(poart_allobj[index2][num].h1);
      }
      // console.log(allobj[num].h1);
    });

    //z左侧按钮
    $(".xiangqing .left").click(function () {
      num--;
      //   console.log(num);
      if (num < 0) {
        num = 0;
        return;
      }
      $(".xiangqing p").html(`${num + 1}/${zong}`);
      $(".explain img").prop("src", src[num]);

      //每次点击之前需要先判断是否有被点击过的对象，如果没有就使用全部的卡组语录，否则就使用各自的卡组语录（二维数组）
      if ($(".current").length == 0) {
        $(".explain .text h3").text(allobj[num].h3);
        $(".explain .text h1").text(allobj[num].h1);
      } else {
        var index2 = $(".current").index();
        $(".explain .text h3").text(poart_allobj[index2][num].h3);
        $(".explain .text h1").text(poart_allobj[index2][num].h1);
      }

      // console.log(1);
    });
    ///让右边微博的盒子不停的翻转效果
    var timer = setInterval(function () {
      $("#mobile-app .fanzhuang").toggleClass("roll");
    }, 5000);
    //
    $("#mobile-app").hover(
      function () {
        clearInterval(timer);
      },
      function () {
        timer = setInterval(function () {
          $("#mobile-app .fanzhuang").toggleClass("roll");
        }, 2000);
      }
    );

    //点击返回顶部
    $("#top").click(function () {
      $("body, html").stop().animate({
          scrollTop: 0,
        },
        1000
      );
    });
    //让返回顶部开始时候是隐藏，页面滚动
    $(window).scroll(function () {
      if ($(document).scrollTop() >= 220) {
        $("#top").fadeIn();
        console.log(22);
      } else {
        $("#top").fadeOut();
      }
    });
  });
})();