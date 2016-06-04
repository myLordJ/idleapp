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
    $('.email-form').toggleClass('hidden', !state);
    $body.toggleClass('show-email-form', state);






  }





});