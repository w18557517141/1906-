window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        $('.navhidden').css({
            'display': 'block',
        })
        $('.navhidden-er').css('display', 'block')
        $('.navright .icon-zhiding').css('display', 'block')
    }else{
        $('.navhidden').css('display', 'none')
        $('.navhidden-er').css('display', 'none')
        $('.navright .icon-zhiding').css('display', 'none')
    }
}
$('.navright .icon-zhiding').on('click',function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var Timer = setInterval(function () {
        scrollTop -= 50;
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
        if (scrollTop <= 0) {
            clearInterval(Timer);
        }
        console.log(scrollTop)
    }, 10)
})
$('.navhidden-er .icon').on('click',function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var Timer = setInterval(function () {
        scrollTop -= 50;
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
        if (scrollTop <= 0) {
            clearInterval(Timer);
        }
        console.log(scrollTop)
    }, 10)
})
$('.navright .icon-zhiding').on('mouseover',function(){
    $(this).css('background','red')
})
$('.navright .icon-zhiding').on('mouseout',function(){
    $(this).css('background','#000')
})
$('.navright .icon-erweima-copy').on('mouseover',function(){
    $(this).css('background','red')
})
$('.navright .icon-erweima-copy').on('mouseout',function(){
    $(this).css('background','#000')
})


$('.navhidden ul li').on('mouseover',function(){
    $(this).css({
        'marginLeft': '-41px',
        'transition' : '0.4s'
    })
})
$('.navhidden ul li').on('mouseout',function(){
    $(this).css({
        'marginLeft' : '0px',
        'transition' : '0.4s'
    })
})
$('.navhidden-er ul li').on('mouseover',function(){
    $(this).css({
        'marginLeft': '-41px',
        'transition' : '0.4s'
    })
})
$('.navhidden-er ul li').on('mouseout',function(){
    $(this).css({
        'marginLeft' : '0px',
        'transition' : '0.4s'
    })
})