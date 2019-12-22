
$(document).ready(function(){   
    $('.l-nav').load('../../../../skin/layout/menu.html');  
    var w = $(window).width();
    // var h = $(window).height();
    $(".l-site").width(w);

    $('.weap').load('gs.html'); 
    $('#select-weap-id').change(function(){ 
        var select_weap = $( "#select-weap-id" ).val(); 
        switch (select_weap){
            default:
                $('.weap').load('gs.html'); 
                break;
            case "1": 
                $('.weap').load('gs.html');
                break;
            case "2":
                $('.weap').load('sw.html');
                break; 
            case "3":
                $('.weap').load('wl.html');
                break; 
        } 
    });
    $('.unit').load('rear.html'); 
    $('#select-unit-id').change(function(){ 
        var select_weap = $( "#select-unit-id" ).val();
        switch (select_weap){
            default:
                $('.unit').load('rear.html'); 
                break;
            case "1": 
                $('.unit').load('rear.html');
                break;
            case "2":
                $('.unit').load('arm.html');
                break;   
            case "3":
                $('.unit').load('leg.html');
                break; 
        } 
    });
    $('.menu').on('click', function(){
        if ($('.l-site').hasClass('is-open')) {
            $('.menu').removeClass('is-active');
            $('.l-site').removeClass('is-open');
        } else {
            $('.menu').addClass('is-active');
            $('.l-site').addClass('is-open');
        }
    });
});      
 
