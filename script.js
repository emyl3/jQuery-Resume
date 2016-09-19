$(document).ready(function() {

  function hoverExit() {
    $(this).removeClass('hover');
    $(this).closest('.nav').find('.rotatingImg').attr("src", "Images/nav_emyl3.svg");
  }

  $('.about').on('mouseover', function(){
    $(this).addClass('hover');
    $(this).closest('.nav').find('.rotatingImg').attr("src", "Images/nav_about.svg");
  });

  $('.print').on('mouseover', function(){
    $(this).addClass('hover');
    $(this).closest('.nav').find('.rotatingImg').attr("src", "Images/nav_print.svg");
  });


  $('.web').on('mouseover', function(){
    $(this).addClass('hover');
    $(this).closest('.nav').find('.rotatingImg').attr("src", "Images/nav_web.svg");
  });

  $('.about').on('mouseleave', hoverExit);
  $('.print').on('mouseleave', hoverExit);
  $('.web').on('mouseleave', hoverExit);
  });
