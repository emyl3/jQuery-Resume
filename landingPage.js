$(document).ready(function() {
  function landingPage() {
    $('.enter').hide();
    $('.landing').show();
  };

  function lpHoverExit(){
    $(this).removeClass('hover');
    $(this).closest('.enter').find('.logo').attr("src", "Images/emyl3_banner.svg");
  }

  function hoverExit() {
    $(this).removeClass('hover');
    $(this).closest('.landing').find('.rotatingImg').attr("src", "Images/emyl3_banner.svg");
  }

  function hoverEnter() {
    $(this).addClass('hover');
    var a = $(this).attr('class').split(' ')[0];
    if(a == "about") {
      $(this).closest('.landing').find('.rotatingImg').attr("src", "Images/emyl3_profilepic.svg");
    }
    else if(a == "print") {
      $(this).closest('.landing').find('.rotatingImg').attr("src", "Images/emyl3_print.svg");
    }
    else if(a == "web") {
      $(this).closest('.landing').find('.rotatingImg').attr("src", "Images/emyl3_web.svg");
    }
    else {
      $(this).closest('.enter').find('.logo').attr("src", "Images/emyl3_profilepic.svg");
    }
  }

  $('.unclick').on('click', landingPage);
  $('.unclick').on('mouseover', hoverEnter);
  $('.unclick').on('mouseleave', lpHoverExit);
  $('.about').on('mouseleave', hoverExit);
  $('.about').on('mouseover', hoverEnter);
  $('.print').on('mouseleave', hoverExit);
  $('.print').on('mouseover', hoverEnter);
  $('.web').on('mouseleave', hoverExit);
  $('.web').on('mouseover', hoverEnter);
  $()
});
