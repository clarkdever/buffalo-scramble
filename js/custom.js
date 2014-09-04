// JavaScript Document
$(document).ready(function(e) {
  

  //-- Smooth scroll
  $(function() {
    $('a[href*=#]:not([href=#])').click(function(e) {

      var hash = $(this).attr('href');
      if (hash.indexOf('tab') <= 0)

      {
        e.preventDefault();

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      }
    });
  });
  
  
  //-- Animate main headline
  $('.promo').addClass('loaded');
  
  //-- Auto resize textbox
  $('textarea').autosize();
  
  //-- Animate logo
  setTimeout(function(){
    $('body').addClass('startlogo');
  }, 2000);
   
  
  //-- Opacity scroll function
  var fadeStart=0,
    fadeUntil=1000,
    fading = $('.shade');

  $(window).bind('scroll', function(){
      var offset = $(document).scrollTop(),
        opacity=0;
          
      if( offset <= fadeStart ){
          opacity=1;
      } else if( offset <= fadeUntil ){
          opacity=1-offset/fadeUntil;
      }
      
      if (offset >= 500)
      {
        $('.btn-backtop').fadeIn();
      }
      else if (offset <= 500)
      {
        $('.btn-backtop').fadeOut();
      }
      
      fading.css('opacity', opacity);
  });
  
  //-- Back to top button
  $('.btn-backtop').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
  

  //-- Modal Contact box activation
  $('.btn-contact, .btn-largecontact').on('click', function(e){
    e.preventDefault();
    $('body').addClass('openmodal');
  });
  
  $('.btn-close').on('click', function(e){
    e.preventDefault();
    $('body').removeClass('openmodal');
  });
  
  
  //-- Close modal on Send button click
  $('.btn-sendmail').on('click', function(e){
    e.preventDefault();
    
    $('body').removeClass('openmodal');
    
    setTimeout(function(){
      $('.notification').animate({'top': 0}, 500);
      
      setTimeout(function(){
        $('.notification').animate({'top': -80}, 500);
      }, 2000);
      
    }, 500);
    
  });
  
  //-- Show form error message
  function formError(){
    $('.formerror').slideDown();
  };
  
  


});