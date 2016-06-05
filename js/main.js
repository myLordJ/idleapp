$(document).ready(function() {
  var $body = $('body');

  function checkWindowSize(){
    $body.toggleClass('tall-body', $(window).height() > 600 && $(window).width() > 991);
  }
  // first time on load
  checkWindowSize();
  $(window).resize(checkWindowSize);


  $('button.get-in-touch').click(function(){
    console.log('clicked!!');
    toggleEmailForm(true);

  });

  $(window).keydown(function(evt){
    var keycode = evt.which;
    //  27 is escape, 13 is enter 
    if($('body').hasClass('show-email-form') && (keycode === 27 || keycode === 13)) {
      toggleEmailForm(false);
    }
  });

  $('div.close-form').click(toggleEmailForm.bind(null, false));

  // state true is to show it, false is to hide it
  function toggleEmailForm(state){
    var $body = $('body');
    $body.toggleClass('show-email-form', state);
  }

  // mouse move effect, just wanted to try this for fun..
  // var $iphone1 = $('.iphone-1');
  // var $iphone2 = $('.iphone-2');

  // $(window).mousemove(function(e){
  //   console.log(e.pageX, e.pageY);

  //   $iphone1.css('transform', 'rotate('+e.pageX/300+'deg)');
  //   $iphone2.css('transform', 'rotate('+-e.pageY/300+'deg)');



  // });





});