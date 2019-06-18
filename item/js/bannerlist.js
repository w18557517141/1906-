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
