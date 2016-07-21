/**
 * Created by lihui on 2016/4/13.
 */

$(function() {
    //感谢他们对DMLei的信任效果的实现
    $(".part4-item").hover(function () {
        $(this).find(".mask2").css({'top': '0', 'opacity': '1'});
        $(this).find(".mask2 h4").stop().animate({'padding-top':'4%','margin-top':'0'});
    }, function () {
        $(this).find(".mask2").css({'top': '80%', 'opacity': '1'});
        $(this).find(".mask2 h4").stop().animate({'padding-top':'30px','margin-top':'-36px'});

    })
    //海量媒体资源tab选项卡的实现
    $(".part1-title li").hover(function () {
        $(".part1-title li").eq($(this).index()).addClass("tab-cur").css({'background': '#fff'}).siblings().removeClass('tab-cur').css({'background': '#F6F6F6'});
        $(".part1-cont").hide().eq($(this).index()).show();
    })
    $(".part1-title li").eq(0).addClass("tab-cur").css({'background': '#fff'});
    $(".part1-cont").eq(0).css("display","block");
    //为您带来注册用户tab选项卡的实现
    $(".part2-title li").hover(function () {
        $(".part2-title li").eq($(this).index()).addClass("tab-cur").css({'background': '#fff'}).siblings().removeClass('tab-cur').css({'background': '#F6F6F6'});
        $(".part2-cont").hide().eq($(this).index()).show();
    })
    $(".part2-title li").eq(0).addClass("tab-cur").css({'background': '#fff'});
    $(".part2-cont").eq(0).css("display","block");
    //注册tab选项卡的实现
    $(".form-title li").hover(function () {
        $(".form-title li").eq($(this).index()).addClass("on").css({'background': '#fff','border-bottom':'none'}).siblings().removeClass('on').css({'background': '#edf3fc','border-bottom':'1px solid #d5dadf'});
        $(".form-con").hide().eq($(this).index()).show();
    })
    $(".form-title li").eq(0).addClass("on").css({'background': '#fff','border-bottom':'none'});
    $(".part1-cont").eq(0).css("display","block");
    //banner 部分固定导航
    $(".banner-fixed li a").hover(function(){
        $(".banner-fixed li a").removeClass("point");
        $(this).addClass("point");
    },function(){
    });
    //banner依次显示
    $(".banner-item").eq(0).animate({"left":0,"opacity":1},800);
    $(".banner-item").eq(1).animate({"left":0,"opacity":1},1000);
    $(".banner-item").eq(2).animate({"left":0,"opacity":1},1200);
    $(".border-right-none").css({'border-right': 'none'});
    $(".nomargin-right").css({'margin-right': '0'});
    //宣传部分hover事件
    $(".cdt-cont-item").hover(function(){
        $(this).find(".cdt-item-top").css({'height':'347px','opacity':'0.8'});
        $(this).find("h3").stop().animate({'margin-top': '80px'},500);
    },function(){
        $(this).find(".cdt-item-top").css({'height':'179px','opacity':'1'});
        $(this).find("h3").stop().animate({'margin-top': '0'},500);
    });
    //帮助中心的tab
    $(".title-item li").hover(function () {
        $(".title-item li").eq($(this).index()).addClass("this").siblings().removeClass('this');
        $(".help-box").hide().eq($(this).index()).show();
    });
    $(".title-item li").eq(0).addClass("this");
    $(".help-box").eq(0).css("display","block");

    //做宣传tab选项卡的实现
    $(".conduct-title li").hover(function () {
        $(".conduct-title li").eq($(this).index()).addClass("this").siblings().removeClass('this');
        $(".part1-cont").hide().eq($(this).index()).show();
    })
    $(".conduct-title li").eq(0).addClass("this");
    $(".part1-cont").eq(0).css("display","block");


})