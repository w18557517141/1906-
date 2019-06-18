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


