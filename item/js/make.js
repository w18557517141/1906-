$('#list-one .yuan-1 span').on('click',function(){
    $(this).addClass('yuan1').siblings().removeClass('yuan1');
    var index  = $(this).index()
    $('#list-one .make-1 .moveimg').css({
        'marginLeft' : - 280 * index + 'px',
        'transition' : '0.5s'
    })
})

$('#list-one .yuan-2 span').on('click',function(){
    $(this).addClass('yuan1').siblings().removeClass('yuan1');
    var index  = $(this).index()
    $('#list-one .make-one .moveimg1').css({
        'marginLeft' : - 280 * index + 'px',
        'transition' : '0.5s'
    })
})

$('#list-one .yuan-3 span').on('click',function(){
    $(this).addClass('yuan3').siblings().removeClass('yuan3');
    var index  = $(this).index()
    $('#list-one .make-one .moveimg2').css({
        'marginLeft' : - 280 * index + 'px',
        'transition' : '0.5s'
    })
})

$('#list-one .yuan-4 span').on('click',function(){
    $(this).addClass('yuan4').siblings().removeClass('yuan4');
    var index  = $(this).index()
    $('#list-one .make-one .moveimg3').css({
        'marginLeft' : - 280 * index + 'px',
        'transition' : '0.5s'
    })
})

$('#list-one .yuan-5 span').on('click',function(){
    $(this).addClass('yuan5').siblings().removeClass('yuan5');
    var index  = $(this).index()
    $('#list-one .make-one .moveimg4').css({
        'marginLeft' : - 280 * index + 'px',
        'transition' : '0.5s'
    })
})