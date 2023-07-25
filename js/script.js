$(document).ready(function(){
    

    var swiper = new Swiper(".mySwiper1", {
        loop: true,
        speed: 1500,
        navigation: {
            nextEl: ".r_arrow",
            prevEl: ".l_arrow",
        },
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
            },
            next: {
            translate: ["100%", 0, 0],
            },
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
    });

    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 1,        

        navigation: {
            nextEl: ".r-arrow2",
            prevEl: ".l-arrow2",
        },
        breakpoints:{
            1380:{
                slidesPerView: 3,
                spaceBetween: 88,
                slidesPerGroup: 1,        
            },
            1000:{
                spaceBetween: 60,
            },
            545:{
                spaceBetween: 40,
            }
        },
    });



    var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 1,
        loop: true,

        navigation: {
            nextEl: ".r-arrow3",
            prevEl: ".l-arrow3",
        },
    });

    var swiper = new Swiper(".mySwiper3-2", {
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerGroup: 1,
        loop: true,

        navigation: {
            nextEl: ".r-arrow3",
            prevEl: ".l-arrow3",
        },
    });



    var swiper = new Swiper(".mySwiper4", {
        initialSlide: 4,
        navigation: {
          nextEl: ".r-arrow4",
          prevEl: ".l-arrow4",
        },
      });

    let count = 1;

    
    $('.sec-2 .l-arrow3').click(function(){
        if(count == 1){
            count = 6
        }else{
            count = count - 1;
        }
        
        if(count == 1){
            $('.dp1').addClass('active');
            $('.dp1').siblings().removeClass('active');
        }else if(count == 2){
            $('.dp2').addClass('active');
            $('.dp2').siblings().removeClass('active');
        }else if(count == 3){
            $('.dp3').addClass('active');
            $('.dp3').siblings().removeClass('active');
        }else if(count == 4){
            $('.dp4').addClass('active');
            $('.dp4').siblings().removeClass('active');
        }else if(count == 5){
            $('.dp5').addClass('active');
            $('.dp5').siblings().removeClass('active');
        }else{
            $('.dp6').addClass('active');
            $('.dp6').siblings().removeClass('active');
        }
    });

    
    
    $('.sec-2 .r-arrow3').click(function(){
        if(count == 6){
            count = 1
        }else{
            count = count + 1;
        }
        
        if(count == 1){
            $('.dp1').addClass('active');
            $('.dp1').siblings().removeClass('active');
        }else if(count == 2){
            $('.dp2').addClass('active');
            $('.dp2').siblings().removeClass('active');
        }else if(count == 3){
            $('.dp3').addClass('active');
            $('.dp3').siblings().removeClass('active');
        }else if(count == 4){
            $('.dp4').addClass('active');
            $('.dp4').siblings().removeClass('active');
        }else if(count == 5){
            $('.dp5').addClass('active');
            $('.dp5').siblings().removeClass('active');
        }else{
            $('.dp6').addClass('active');
            $('.dp6').siblings().removeClass('active');
        }
    });

    let ycount = 2023;

    $('.sec-3 .l-arrow4').click(function(){
        if(ycount == 2020){
            ycount = 2020
        }else{
            ycount = ycount - 1;
        }
        document.getElementById('text_change').innerText = ycount;
    });

    
    
    $('.sec-3 .r-arrow4').click(function(){
        if(ycount == 2023){
            ycount = 2023
        }else{
            ycount = ycount + 1;
        }
        document.getElementById('text_change').innerText = ycount;
        
    });

    $(window).scroll(function(){
        const sct = $(window).scrollTop();

        
        if(sct >= 200){
            $('.h-bot .logo').addClass('active');
            $('.h-bot input').addClass('active');
            $('.h-bot .lr .ul-right').addClass('active');
            $('.h-bot .lr').addClass('active');
            $('.h-top').addClass('active');
            $('header').addClass('active');
            $('.up-btn').addClass('active');
            $('.h-bot .lr .ul-left').addClass('active');
            $('header .h-bot990').addClass('active');
            
        }else{
            $('.h-bot .logo').removeClass('active');
            $('.h-bot input').removeClass('active');
            $('.h-bot .lr .ul-right').removeClass('active');
            $('.h-bot .lr').removeClass('active');
            $('.h-top').removeClass('active');
            $('header').removeClass('active');
            $('.up-btn').removeClass('active');
            $('.h-bot .lr .ul-left').removeClass('active');
            $('header .h-bot990').removeClass('active');
        }
    });

    $('.sec-1 .menu-box .menu').click(function(){
        $(this).addClass('active');
        $(this).siblings(this).removeClass('active');

        const result1 = $(this).attr('data-tab');

        $('.sec-1 .swiper').removeClass('active');
        $(`#${result1}`).addClass('active');
    });

    $('.sec-1 .tab990 .menu').click(function(){
        $(this).addClass('active');
        $(this).siblings(this).removeClass('active');

        const result1 = $(this).attr('data-tab');

        $('.sec-1 .swiper').removeClass('active');
        $(`#${result1}`).addClass('active');
    });

    $('.up-btn').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });

    $('.sec-2 .sec2-tab .menu').click(function(){
        $(this).addClass('active');
        $(this).siblings(this).removeClass('active');

        const result2 = $(this).attr('data-tab');

        $('.sec-2 .tab').removeClass('active');
        $(`#${result2}`).addClass('active');
    });

    $('.sec-2 .sec2-tab990 .menu').click(function(){
        $(this).addClass('active');
        $(this).siblings(this).removeClass('active');

        const result2 = $(this).attr('data-tab');

        $('.sec-2 .tab').removeClass('active');
        $(`#${result2}`).addClass('active');
    });
});