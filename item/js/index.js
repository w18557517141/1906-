// header
// 鼠标划过效果
$('header .list-left li a').on('mouseover',function(){
    $(this).addClass('overchange').siblings().removeClass('overchange')
})
$('header .list-left li a').on('mouseout',function(){
    $(this).removeClass('overchange')
})


$('header .list-right li a').on('mouseover',function(){
    $(this).addClass('overchange').siblings().removeClass('overchange')
})
$('header .list-right li a').on('mouseout',function(){
    $(this).removeClass('overchange')
})
$('header .list-right .right-one').on('mouseover',function(){
    $(this).css('background','#fff')
})
$('header .list-right .right-one').on('mouseout',function(){
    $(this).css('background','#f2f2f2')
})
$('header .list-right .right-one').eq(0).on('mouseover',function(){
    $('header .list-right .right-one div').eq(0).css('display','block').siblings()
})
$('header .list-right .right-one').eq(0).on('mouseout',function(){
    $(this).css('background','#f2f2f2')
    $('header .list-right .right-one div').eq(0).css('display','none')
})
$('header .list-right .right-one').eq(2).on('mouseover',function(){
    $('header .list-right .right-one div').eq(2).css('display','block').siblings()
})
$('header .list-right .right-one').eq(2).on('mouseout',function(){
    $(this).css('background','#f2f2f2')
    $('header .list-right .right-one div').eq(2).css('display','none')
})
$('header .list-right .right-san').on('mouseover',function(){
    $('header .list-right .right-san div').css('display','block').siblings()
})
$('header .list-right .right-san').on('mouseout',function(){
    $(this).css('background','#f2f2f2')
    $('header .list-right .right-san div').css('display','none')
})


$('.banner .banner-top ul a').on('mouseover',function(){
    $(this).addClass('left-zi').siblings().removeClass('left-zi')
})
$('.banner .banner-top ul a').on('mouseout',function(){
    $(this).removeClass('left-zi')
})


