$(function(){
    /* Trigger */ 
    $('.trigger').click(function(){
        $('.trigger').toggleClass('active')
        $('.gnb').toggleClass('active')
    });
    $('.menu a').click(function(){
        $('.trigger').removeClass('active')
        $('.gnb').removeClass('active')
    });
    
    /* smooth scroll */
     $('.menu a, .gototop').click(function(){
         $.scrollTo(this.hash || 0, 900);
     })
     
     // Change CSS with scroll
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $('header, .gototop').addClass('active')
        }else{
            $('header, .gototop').removeClass('active')
        }
    })
})