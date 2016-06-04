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

  });

  // state true is to show it, false is to hide it
  function toggleEmailForm(state){




  }





});