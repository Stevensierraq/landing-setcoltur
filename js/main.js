'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

$(document).ready(function(){
    var top = $('header').offset().top;

    $(window).on('scroll', function(){
        if($(window).scrollTop() > top){
            $('#nav').addClass('nav-fixed');
            $('#logo').addClass('none');
            $('.logo-text').removeClass('none');
        }else{
            $('#nav').removeClass('nav-fixed');
            $('.logo-text').addClass('none');
            $('#logo').removeClass('none');
        }
    });


        
});

  /*---  Scroll Home --*/
  $( "#home" ).click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 1000);
  })

  /*---  Scroll Up --*/
  $( ".up" ).click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 1000);
  })
    
