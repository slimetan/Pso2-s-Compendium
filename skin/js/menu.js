
$(document).ready(function(){   
    $('.l-nav').load('../../../../skin/layout/menu.html');  
    var w = $(window).width();
    // var h = $(window).height();
    $(".l-site").width(w); 
    $('.menu').on('click', function(){
        if ($('.l-site').hasClass('is-open')) {
            $('.menu').removeClass('is-active');
            $('.l-site').removeClass('is-open');
        } else {
            $('.menu').addClass('is-active');
            $('.l-site').addClass('is-open');
        }
    });
    
    $('section').on('click', function(){
        if ($('.l-site').hasClass('is-open')) {
            $('.menu').removeClass('is-active');
            $('.l-site').removeClass('is-open');
        }
    });
});      

