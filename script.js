$(document).ready(function() {

  function hoverExit() {
    $(this).removeClass('hover');
    $(this).closest('.nav').find('.rotatingImg').attr("src", "Images/nav_emyl3.svg");
  }

  function hoverEnter() {
    $(this).addClass('hover');
    var a = $(this).attr('class').split(' ')[0];
    if(a == "about") {
      $(this).closest('.nav').find('.rotatingImg').attr("src", "Images/nav_about.svg");
    }
    else if(a == "print") {
      $(this).closest('.nav').find('.rotatingImg').attr("src", "Images/nav_print.svg");
    }
    else if(a == "web") {
      $(this).closest('.nav').find('.rotatingImg').attr("src", "Images/nav_web.svg");
    }
  }

  

  $('.about').on('mouseleave', hoverExit);
  $('.print').on('mouseleave', hoverExit);
  $('.web').on('mouseleave', hoverExit);
  $('.about').on('mouseover', hoverEnter);
  $('.print').on('mouseover', hoverEnter);
  $('.web').on('mouseover', hoverEnter);
  });
