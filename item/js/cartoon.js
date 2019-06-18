var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    effect: 'vertical',
    autoplay: true,
    cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 100,
        shadowScale: 0.6
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}) 
mySwiper.params.pagination.clickable = true ;
//此外还需要重新初始化pagination
mySwiper.pagination.destroy()
mySwiper.pagination.init()
mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');
$('.swiper-container').on('mouseover',function(){
    $('.swiper-button-prev').css('display','block')
    $('.swiper-button-next').css('display','block')
})
$('.swiper-container').on('mouseout',function(){
    $('.swiper-button-prev').css('display','none')
    $('.swiper-button-next').css('display','none')
})
