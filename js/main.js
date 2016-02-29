$(document).ready(function() {



  // stuff I got from css tricks..
  $('.smooth-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 easing: 'linear',
                 scrollTop: target.offset().top-50
            }, 400);
            return false;
        }
    }
});



});