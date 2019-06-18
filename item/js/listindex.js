// header

$('.banner .banner-top .top-left').on('mouseover',function(){
    $('.banner .banner-bottom').css('display','block')
})
$('.banner .banner-bottom .listhidden .listhidden').on('mouseout',function(){
    $('.banner .banner-bottom').css('display','none')
})
// 鼠标划过效果
$('header .list-left li a').on('mouseover', function () {
    $(this).addClass('overchange').siblings().removeClass('overchange')
})
$('header .list-left li a').on('mouseout', function () {
    $(this).removeClass('overchange')
})


$('header .list-right li a').on('mouseover', function () {
    $(this).addClass('overchange').siblings().removeClass('overchange')
})
$('header .list-right li a').on('mouseout', function () {
    $(this).removeClass('overchange')
})
$('header .list-right .right-one').on('mouseover', function () {
    $(this).css('background', '#fff')
})
$('header .list-right .right-one').on('mouseout', function () {
    $(this).css('background', '#f2f2f2')
})
$('header .list-right .right-one').eq(0).on('mouseover', function () {
    $('header .list-right .right-one div').eq(0).css('display', 'block').siblings()
})
$('header .list-right .right-one').eq(0).on('mouseout', function () {
    $(this).css('background', '#f2f2f2')
    $('header .list-right .right-one div').eq(0).css('display', 'none')
})
$('header .list-right .right-one').eq(2).on('mouseover', function () {
    $('header .list-right .right-one div').eq(2).css('display', 'block').siblings()
})
$('header .list-right .right-one').eq(2).on('mouseout', function () {
    $(this).css('background', '#f2f2f2')
    $('header .list-right .right-one div').eq(2).css('display', 'none')
})
$('header .list-right .right-san').on('mouseover', function () {
    $('header .list-right .right-san div').css('display', 'block').siblings()
})
$('header .list-right .right-san').on('mouseout', function () {
    $(this).css('background', '#f2f2f2')
    $('header .list-right .right-san div').css('display', 'none')
})


$('.banner .banner-top ul a').on('mouseover', function () {
    $(this).addClass('left-zi').siblings().removeClass('left-zi')
})
$('.banner .banner-top ul a').on('mouseout', function () {
    $(this).removeClass('left-zi')
})
$('.list-right .lastli').on('mouseover',function(){
    $(this).css({
        'background' : '#fff',
    })
    $(".list-right li .bodylist").css('display','block')
})
$('.list-right .lastli').on('mouseout',function(){
    $(this).css({
        'background' : '#f2f2f2',
    })
    $(".list-right li .bodylist").css('display','none')
})
$('.list-right li .bodylist .list-body li a').on('mouseover',function(){
    $(this).css({
        'color' : '#f56a00',
        'textDecoration': 'unline'
    })
})
$('.list-right li .bodylist .list-body li a').on('mouseout',function(){
    $(this).css({
        'color' : '#999',
        'textDecoration': 'none'
    })
})

$('.list-right li .bodylist .center li a').on('mouseover',function(){
    $(this).css({
        'color' : '#2263d4',
        'textDecoration': 'unline'
    })
})
$('.list-right li .bodylist .center li a').on('mouseout',function(){
    $(this).css({
        'color' : '#999',
        'textDecoration': 'none'
    })
})

$('.list-right li .bodylist .right li a').on('mouseover',function(){
    $(this).css({
        'color' : '#000',
        'textDecoration': 'unline'
    })
})
$('.list-right li .bodylist .right li a').on('mouseout',function(){
    $(this).css({
        'color' : '#999',
        'textDecoration': 'none'
    })
})
$('.list-right li .bodylist .bottom li a').on('mouseover',function(){
    $(this).css({
        'color' : '#666',
        'textDecoration': 'unline'
    })
})
$('.list-right li .bodylist .bottom li a').on('mouseout',function(){
    $(this).css({
        'color' : '#999',
        'textDecoration': 'none'
    })
})



$('.banner-bottom .bottom-left .left-list .float').on('mouseover',function(){
    $(this).css({
        'background' : '#9d3feb',
        'borderLeft' : '2px solid red'
    })
})
$('.banner-bottom .bottom-left .left-list .float').on('mouseout',function(){
    $(this).css({
        'background' : '#211e1e',
        'borderLeft' : 'none',
    })
})

// 给a标签加下划线
$('.banner-bottom .bottom-left .left-list .float a').on('mouseover',function(){
    $(this).css('textDecoration','underline')
})
$('.banner-bottom .bottom-left .left-list .float a').on('mouseout',function(){
    $(this).css('textDecoration','none')
})
$('.banner-bottom .listhidden .list-top .top-left a').on('mouseover',function(){
    $(this).css({
        'textDecoration' : 'underline',
        'color' : 'red'
    })
})
$('.banner-bottom .listhidden .list-top .top-left a').on('mouseout',function(){
    $(this).css({
        'textDecoration' : 'none',
        'color' : '#000'
    })
    $('.banner-bottom .listhidden .list-top .top-left .color').css('color','red')
})

$('.for1').on('mouseover',function(){
    $('.banner-bottom .for1').css('display','block')
})
$('.for1').on('mouseout',function(){
    $('.banner-bottom >.for1').css('display','none')
})
$('.for2').on('mouseover',function(){
    $('.banner-bottom .for2').css('display','block')
})
$('.for2').on('mouseout',function(){
    $('.banner-bottom > .for2').css('display','none')
})
$('.for3').on('mouseover',function(){
    $('.banner-bottom .for3').css('display','block')
})
$('.for3').on('mouseout',function(){
    $('.banner-bottom > .for3').css('display','none')
})
$('.for4').on('mouseover',function(){
    $('.banner-bottom .for4').css('display','block')
})
$('.for4').on('mouseout',function(){
    $('.banner-bottom > .for4').css('display','none')
})
$('.for5').on('mouseover',function(){
    $('.banner-bottom .for5').css('display','block')
})
$('.for5').on('mouseout',function(){
    $('.banner-bottom > .for5').css('display','none')
})




$('.navright .icon-zhiding').on('click',function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var Timer = setInterval(function () {
        scrollTop -= 50;
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
        if (scrollTop <= 0) {
            clearInterval(Timer);
        }
    }, 1)
})
$('.hiddenlist ul .top').on('click',function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var Timer = setInterval(function () {
        scrollTop -= 50;
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
        if (scrollTop <= 0) {
            clearInterval(Timer);
        }
    }, 1)
})

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        $('.navright .icon-zhiding').css('display', 'block')
    }else{
        $('.navright .icon-zhiding').css('display', 'none')
    }
}
window.onscroll = function () {
    if (document.documentElement.scrollTop >= 752 && document.documentElement.scrollTop < 1642 ) {
        $('.hiddenlist ul .change1').css('background','#09061d')
    }else{
        $('.hiddenlist ul .change1').css('background','#8035fb')
    }
    if (document.documentElement.scrollTop >= 1642 && document.documentElement.scrollTop < 2532 ) {
        $('.hiddenlist ul .change2').css('background','#09061d')
    }else{
        $('.hiddenlist ul .change2').css('background','#8035fb')
    }
    if (document.documentElement.scrollTop >= 2532 && document.documentElement.scrollTop < 3422  ) {
        $('.hiddenlist ul .change3').css('background','#09061d')
    }else{
        $('.hiddenlist ul .change3').css('background','#8035fb')
    }
    if (document.documentElement.scrollTop >= 3422  && document.documentElement.scrollTop < 4312   ) {
        $('.hiddenlist ul .change4').css('background','#09061d')
    }else{
        $('.hiddenlist ul .change4').css('background','#8035fb')
    }
    if (document.documentElement.scrollTop >= 4312   && document.documentElement.scrollTop < 5050    ) {
        $('.hiddenlist ul .change5').css('background','#09061d')
    }else{
        $('.hiddenlist ul .change5').css('background','#8035fb')
    }
    if (document.documentElement.scrollTop >= 5050    && document.documentElement.scrollTop < 5841) {
        $('.hiddenlist ul .change6').css('background','#09061d')
    }else{
        $('.hiddenlist ul .change6').css('background','#8035fb')
    }
    if (document.documentElement.scrollTop >= 5841     && document.documentElement.scrollTop < 6475) {
        $('.hiddenlist ul .change7').css('background','#09061d')
    }else{
        $('.hiddenlist ul .change7').css('background','#8035fb')
    }
    if (document.documentElement.scrollTop >= 6475     && document.documentElement.scrollTop < 7366) {
        $('.hiddenlist ul .change8').css('background','#09061d')
    }else{
        $('.hiddenlist ul .change8').css('background','#8035fb')
    }
    if (document.documentElement.scrollTop >= 7366     && document.documentElement.scrollTop < 8257 ) {
        $('.hiddenlist ul .change9').css('background','#09061d')
    }else{
        $('.hiddenlist ul .change9').css('background','#8035fb')
    }
    if (document.documentElement.scrollTop >= 8257      && document.documentElement.scrollTop < 9148  ) {
        $('.hiddenlist ul .change10').css('background','#09061d')
    }else{
        $('.hiddenlist ul .change10').css('background','#8035fb')
    }
    if (document.documentElement.scrollTop >= 9148       && document.documentElement.scrollTop < 9782   ) {
        $('.hiddenlist ul .change11').css('background','#09061d')
    }else{
        $('.hiddenlist ul .change11').css('background','#8035fb')
    }
    if (document.documentElement.scrollTop >= 9782        && document.documentElement.scrollTop < 10673   ) {
        $('.hiddenlist ul .change12').css('background','#09061d')
    }else{
        $('.hiddenlist ul .change12').css('background','#8035fb')
    }
    if (document.documentElement.scrollTop >= 10673        && document.documentElement.scrollTop < 11573   ) {
        $('.hiddenlist ul .change13').css('background','#09061d')
    }else{
        $('.hiddenlist ul .change13').css('background','#8035fb')
    }
    if (document.documentElement.scrollTop > 20) {
        $('.navright .icon-zhiding').css('display', 'block')
    }else{
        $('.navright .icon-zhiding').css('display', 'none')
    }
}


$('.navright .icon-zhiding').on('mouseover',function(){
    $(this).css('background','red')
})
$('.navright .icon-zhiding').on('mouseout',function(){
    $(this).css('background','#000')
})
$('.navright p').on('mouseover',function(){
    $(this).css({
        'background' : 'red',
    })
    $('.navright p i').css('color','#fff')
})
$('.navright p').on('mouseout',function(){
    $(this).css('background','#000')
    $('.navright p i').css('color','red')
})

$(function(){   
    var fs = true; 
    $(window).scroll(function(event) {
        if( $(window).scrollTop() < 452 || $(window).scrollTop() > 11073 ){   
            if(fs){
                
                $(".hiddenlist").stop().animate({
                    right: -52
                },300);

                fs = false;
            }
        }
        else{
            $(".hiddenlist").stop().animate({
                right: "40px"
            },200);

            fs = true;
        }
    });
 });
