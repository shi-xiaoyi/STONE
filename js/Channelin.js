class Channelin {
    constructor() {
        //1.获取需要做点击翻转的卡牌对象
        this.card = $('.front img.hover');


        //2.获取轮播图的数据
        this.move = $('.move');
        //2.1获取保存轮播图的区域
        this.rotationSection = $('.section');
        //2.2设置轮播图每块的公共宽度
        this.rotationWidth = 748;
        //2.3获取左按钮
        this.left = $('.rotation-left');
        //2.4获取右按钮
        this.right = $('.rotation-right');
        //2.5保存当前轮播的图片index
        this.rotationIndex = 0;
        //2.6保存轮播图区域下方的按钮组
        this.rotationbuttons = $('.buttons');
        //2.7保存当前轮播图区域下方的介绍区域
        this.rotationarticle = $('.article')

        // 3.获取魔法少女的对象
        this.grid = $('.grid');
        // 3.1 获取第一个运动点
        this.gf = $('.card-content-title');

        // 4.获取页面的侧边栏区域
        this.aside = $('.aside');
        // 4.1初始化侧边栏部分的显示和隐藏
        this.aside.hide();
        this.aside.find('span').hide();
        this.aside.find('.buy').hide();
        // 4.2保存当前选中的index
        this.asideIndex = 0;

        this.last = {};



        //初始化事件注册
        this.flip();

        //轮播图区域初始化
        this.rotation();

        //魔法少女的对象的移动处理
        this.gridMove();

        // 侧边栏的鼠标划入处理
        this.asideShow();

        // 底部滚动的处理
        this.lastMove();

    }

    /**注册翻转的卡牌对象的点击事件
     *  1.该事件只需要点击一次，点击一次之后即销毁
     */
    flip() {
        this.card.one('click', function() {
            //1. 获取做翻转的对象
            let li = $(this).parent().parent();

            //2.获取需要隐藏和显示的对象
            let hidden = $(this).parent();
            let showing = hidden.siblings();

            //3.动画开始
            showing.show();

            li.css('animation', 'filp .5s linear forwards');
            setTimeout(() => {
                hidden.hide();
            }, 250)
        })
    }

    // 轮播图区域位置初始化
    rotation() {
        // 初始化位置加载
        this.position(0)

        // 注册事件
        this.right.on('click', this.next.bind(this)); //下一张
        this.left.on('click', this.prve.bind(this)); //上一张
        this.move.on('mousedown', this.drag.bind(this)); //拖拽盒子移动轮播图的功能
        this.isEnded(); //自动轮播（当前视频结束到下一个视频）
        this.rotationbuttons.on('click', 'li', e => this.click.call(this, e));
        this.changeStyle(); //更改高亮显示的按钮组的方法

    }

    // 初始化轮播图的显示位置
    position(index) {
        this.current = 70;

        this.changeStyle(index)

        this.move.each(function(i, ele) {
            let step = $(ele).attr('index') - index;
            let more = 0;
            $(ele).removeClass('active');

            if (i == (2 + index)) {
                more = 50;
                $(ele).addClass('active')
                $(ele).css({
                    width: '925px',
                    height: '586px',
                    marginTop: '0',
                    left: `${this.rotationWidth * step - this.rotationWidth *1.5 + this.current * (step - 1) + more}px`
                });
                $(ele).children().css({
                    width: '759px',
                    height: '574px',
                    top: '0px',
                    left: '84px'
                });
                try {
                    ele.children[0].play();
                } catch (error) {
                    console.log(ele.children);
                }
                return;
            } else if (i > (2 + index)) {
                more = 265;
            }

            $(ele).css({
                width: '748px',
                height: '480px',
                marginTop: '50PX',
                left: `${this.rotationWidth * step - this.rotationWidth *1.5 + this.current * (step - 1) + more}px`
            });
            $(ele).children().css({
                width: '613px',
                height: '485px',
                top: '-7px',
                left: '68px'
            });


        }.bind(this));
    }

    //轮播图区域点击下一张的效果
    next() {
        this.rotationIndex++;

        this.move.removeClass('active');
        this.move.css({
            width: '748px',
            height: '480px',
            marginTop: '50PX',
        });
        this.move.children().css({
            width: '613px',
            height: '485px',
            top: '-7px',
            left: '68px'
        })

        this.move.each(function(i, ele) {
            let step = $(ele).attr('index') - this.rotationIndex;
            let more = 0;
            ele.children[0].pause();

            if (i == (2 + this.rotationIndex)) {
                let that = this
                more = 50;
                ele.children[0].load();

                $(ele).stop().animate({
                    width: '925px',
                    height: '586px',
                    marginTop: '0',
                    left: `${this.rotationWidth * step - this.rotationWidth *1.5 + this.current * (step - 1) + more}px`,
                }, 400, function(e) {

                    if (that.rotationIndex > 2) {
                        that.rotationIndex = 0;
                        setTimeout(() => {
                            that.position(0);
                        }, 3)
                    } else {
                        $(this).addClass('active');
                        that.changeStyle(that.rotationIndex);
                        try {
                            ele.children[0].load();
                            ele.children[0].play();
                        } catch (error) {
                            console.log(ele.children);
                        }
                    }
                })

                $(ele).children().stop().animate({
                    width: '759px',
                    height: '574px',
                    top: '0px',
                    left: '84px'
                }, 400);
                return;
            } else if (i > (2 + this.rotationIndex)) {
                more = 265
            }


            $(ele).stop().animate({
                left: `${this.rotationWidth * step - this.rotationWidth *1.5 + this.current * (step - 1) + more}px`
            }, 400)

        }.bind(this));


    }

    //轮播图区域点击上一张的效果
    prve() {
        this.rotationIndex--;

        this.move.removeClass('active');
        this.move.css({
            width: '748px',
            height: '480px',
            marginTop: '50PX',
        });
        this.move.children().css({
            width: '613px',
            height: '485px',
            top: '-7px',
            left: '68px'
        })

        this.move.each(function(i, ele) {
            let step = $(ele).attr('index') - this.rotationIndex;
            let more = 0;
            ele.children[0].pause();
            if (i == (2 + this.rotationIndex)) {
                let that = this
                more = 50;

                $(ele).stop().animate({
                    width: '925px',
                    height: '586px',
                    marginTop: '0',
                    left: `${this.rotationWidth * step - this.rotationWidth *1.5 + this.current * (step - 1) + more}px`,
                }, 400, function(e) {

                    if (that.rotationIndex < 0) {
                        that.rotationIndex = 2;
                        setTimeout(() => {
                            that.position(2);
                        }, 3)
                    } else {
                        $(this).addClass('active');
                        that.changeStyle(that.rotationIndex);
                        try {
                            ele.children[0].load();
                            ele.children[0].play();
                        } catch (error) {
                            console.log(ele.children);
                        }
                    }
                })

                $(ele).children().stop().animate({
                    width: '759px',
                    height: '574px',
                    top: '0px',
                    left: '84px'
                }, 400);
                return;
            } else if (i > (2 + this.rotationIndex)) {
                more = 265
            }


            $(ele).stop().animate({
                left: `${this.rotationWidth * step - this.rotationWidth *1.5 + this.current * (step - 1) + more}px`
            }, 400)

        }.bind(this));


        console.log(this.rotationIndex);
    }

    //轮播图区域拖拽后的移动效果
    drag(e) {
        let px = e.pageX;
        let that = this;

        window.onmousemove = function(e2) {
            let nx = e2.pageX;
            let move = nx - px;

            this.rotationSection.css({
                left: move + 'px'
            });

            window.onmouseup = function() {
                this.onmouseup = this.onmousemove = null;
                that.rotationSection.css({
                    left: 0
                });
                if (Math.abs(move) > (that.rotationWidth / 2)) {
                    move < 0 ? that.rotationIndex++ : that.rotationIndex--;
                    that.rotationIndex < 0 ? that.rotationIndex = 2 : '';
                    that.rotationIndex > 2 ? that.rotationIndex = 0 : '';
                    that.position(that.rotationIndex);
                }

            }

        }.bind(this);

    }

    //轮播图区域监听当前视频是否部分结束
    isEnded() {
        this.move.children().on('ended', (e) => {
            e.target.load();
            this.next();
        });
    }

    //轮播图区域下方的按钮组的点击事件
    click(e) {
        let step = $(e.currentTarget).index() - this.rotationIndex;
        if (step) {
            if (Math.abs(step) > 1) step > 0 ? this.rotationIndex++ : this.rotationIndex--;

            step > 0 ? this.next() : this.prve();
        }

    }

    //更改选中的按钮的样式
    changeStyle() {
        //根据当前轮播图的index渲染按钮和显示区域
        let index = this.rotationIndex;
        //1.控制按钮的显示和隐藏
        $('.three').hide();
        $('.one').show();

        let current = this.rotationbuttons.children().eq(index);
        current.find('.three').show().siblings('.one').hide();

        //2.控制介绍区域的显示和隐藏
        this.rotationarticle.children().eq(index).show().siblings().hide();

        // 3.视频暂停和重新播放
        this.move.each((i, ele) => {
            ele.children[0].pause();
            if (i == (2 + this.rotationIndex)) {
                ele.children[0].load();
                ele.children[0].play();
            }
        })

    }

    //魔法少女的对象的移动处理 和 侧边栏的显示处理
    gridMove() {
        let top = parseInt(this.grid.css('top'));
        $(window).on('scroll', () => {

            //侧边栏的显示和隐藏处理处理
            window.pageYOffset > 60 ? this.aside.show() : this.aside.hide();

            if (window.pageYOffset < ($('#kapai').offset().top - 280)) {
                $('.jianjie').find('i').prop('class', 'focus')
                $('.jianjie').siblings().find('i').prop('class', 'unfocus');
            }

            if (window.pageYOffset >= $('#kapai').offset().top - 280) {
                $('.kapai').find('i').prop('class', 'focus')
                $('.kapai').siblings().find('i').prop('class', 'unfocus');
            }

            if (window.pageYOffset >= $('#jizhi').offset().top - 280) {
                $('.jizhi').find('i').prop('class', 'focus')
                $('.jizhi').siblings().find('i').prop('class', 'unfocus');

            }


            // /魔法少女的对象的移动处理
            if (window.pageYOffset > 1700) {
                let move = top + ((1817 - window.pageYOffset) / 2 >> 0);
                this.grid.css({
                    top: move
                })
            }
        })
    }

    //侧边栏的鼠标划入处理
    asideShow() {
        // 显示和隐藏相关信息
        this.aside.hover(() => {
            $('.buy-img').hide()
            this.aside.find('span').show();
            this.aside.find('.buy').show();
        }, () => {
            this.aside.find('span').hide();
            this.aside.find('.buy').hide();
            $('.buy-img').show()
        });

        // 侧边栏图标的切换处理
        $('.maodian').hover(function() {
            // $(this).children('.unfocus').css('background-position', '-14px -73px');
            $(this).children('.unfocus').prop('class', 'hover')

        }, function() {
            // $(this).children('.unfocus').css('background-position', '-14px -13px');
            $(this).children('.hover').prop('class', 'unfocus')
        })

        // 侧边栏的点击事件
        $('.maodian').on('click', function(e) {

            $(e.currentTarget).children('i').prop('class', 'focus');

            // $(e.currentTarget).siblings('.maodian').children('i').prop('class', 'unfocus');
            console.log($(e.currentTarget).parent().siblings().find('i').prop('class', 'unfocus'));

            if ($(this).parent().prop('class') == 'jianjie') {
                $("body,html").scrollTop(0);
            } else {
                $("body,html").scrollTop($(`#${$(this).parent().prop('class')}`).offset().top - 80);
            }

        });
    }


    // last 
    /**
     *mian 部分最多移动到 bottom: 110px;
     *house 部分最多移动到 
     *            第一阶段  top: 0px;
     *            第二阶段   bottom: -283px;
     *house_left 部分最多移动到 
     *            第一阶段 top: 710px;
     *            第二阶段 bottom: 
     * house_right 部分最多移动到 
     *            第一阶段 top: 730px;  right: 410px;
     *            第二阶段 bottom: 
     */
    lastMove() {
        this.last.main = 0; //保存山峰部分初始的位置
        this.last.mainLast = 110; //保存山峰的目标距离
        // this.main.move = 1;

        this.last.house = 300; //保存山峰部分初始的位置
        this.last.houseLast = -70; //保存山峰的目标距离

        this.last.left = 1020; //保存左边人物初始的位置
        this.last.leftLast = 505; //保存左边人物的目标距离

        this.last.right = 860; //保存右边人物初始的位置
        this.last.rightLast = 500; //保存右边人物的目标距离

        let start = 3574;
        let result = 3574;

        $(window).on('scroll', () => {


            if (window.pageYOffset > start) {

                let move = window.pageYOffset - result;
                result = window.pageYOffset;
                // //1.先移动山峰
                this.last.main += move / 2 >> 0;
                if (this.last.main <= this.last.mainLast) {

                    $('.castle-main').css('bottom', this.last.main + 'px');
                }

                //2.移动房子
                this.last.house -= move / 2 >> 0;
                if (this.last.house >= this.last.houseLast) {
                    $('.house').css('top', this.last.house + 'px');
                }

                // //3.移动左边的人物
                if (this.last.house <= 260 || move < 0) {
                    this.last.left -= move / 2 >> 0;
                    if (this.last.left >= this.last.leftLast) {
                        $('.house_left').css('top', this.last.left + 'px');
                    }
                }

                // //3.移动左边的人物
                if (this.last.house <= 235 || move < 0) {
                    this.last.right -= move / 2 >> 0;
                    if (this.last.right >= this.last.rightLast) {
                        $('.house_right').css('top', this.last.right + 'px');
                    }
                }


            } else {
                this.last.main = 0; //保存山峰部分初始的位置
                this.last.mainLast = 110; //保存山峰的目标距离
                // this.main.move = 1;

                this.last.house = 300; //保存山峰部分初始的位置
                this.last.houseLast = -70; //保存山峰的目标距离

                this.last.left = 1020; //保存左边人物初始的位置
                this.last.leftLast = 505; //保存左边人物的目标距离

                this.last.right = 860; //保存右边人物初始的位置
                this.last.rightLast = 500; //保存右边人物的目标距离

            }

        })
    }

}

new Channelin();