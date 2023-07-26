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

    var ww = $(window).width();

    if(ww > 375){
        var swiper2 = new Swiper(".mySwiper2", {
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
                },
                376:{
                    slidesPerView: 3,
                }
            },
        });
    }else{
        var swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 1,        
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            }
        });
    }

    
    

    var swiper = new Swiper(".mySwiper3-2", {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,        
        loop: true,

        navigation: {
            nextEl: ".r-arrow2",
            prevEl: ".l-arrow2",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
    });

   

    var count = 1;
    var boxcount = 6;
    var tt = 250;
    var result = 0;
    

    $('.l-arrow3').click(function(){
        if(ww <= 1620){
            tt = 211;
        }

        if(count == 1){
            count = 6;
        }else{
            count = count -1;
        }

        if(boxcount == 1){
            boxcount = 6;
        }else{
            boxcount = boxcount -1;
        }

        result = tt * boxcount;

        $('.swiper-view .content-box1 .box').removeClass('active');
        $(`.swiper-view .content-box1 .box${count}`).addClass('active');

        $('.sec-2 .cb').css({
            'transform':'translateX(' + -result + 'px)'
        });
    });

    $('.r-arrow3').click(function(){
        if(ww <= 1170){
            tt = 152;
        }else if(ww <= 1410){
            tt = 184;
        }else if(ww <= 1620){
            tt = 211;
        }

        if(count == 6){
            count = 1;
        }else{
            count = count +1;
        }

        if(boxcount == 10){
            boxcount = 5;
        }else{
            boxcount = boxcount + 1;
        }

        result = tt * boxcount;

        $('.swiper-view .content-box1 .box').removeClass('active');
        $(`.swiper-view .content-box1 .box${count}`).addClass('active');

        $('.sec-2 .cb').css({
            'transform':'translateX('+ -result + 'px)'
        });
    });


    var swiper = new Swiper(".mySwiper4", {
        initialSlide: 4,
        navigation: {
          nextEl: ".r-arrow4",
          prevEl: ".l-arrow4",
        },
      });

    let ycount = 2023;

    $('.sec-3 .l-arrow4').click(function(){
        if(ycount == 2020){
            ycount = 2020
        }else{
            ycount = ycount - 1;
        }
        document.getElementById('text_change').innerText = ycount;
        document.getElementById('text_change2').innerText = ycount;
    });

    
    
    $('.sec-3 .r-arrow4').click(function(){
        if(ycount == 2023){
            ycount = 2023
        }else{
            ycount = ycount + 1;
        }
        document.getElementById('text_change').innerText = ycount;
        document.getElementById('text_change2').innerText = ycount;
        
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
            $('.subheight').addClass('active');  
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
            $('.subheight').removeClass('active'); 
        }
    });

    $('.sec-1 .menu-box .menu').click(function(){
        $(this).addClass('active');
        $(this).siblings(this).removeClass('active');

        const result1 = $(this).attr('data-tab');

        $('.sec-1 .swiper').removeClass('active');
        $(`#${result1}`).addClass('active');
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

});