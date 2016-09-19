$(document).ready(function() {

  function landingPage() {
    $('.enter').hide();
    $('.landing').show();
  };

  function hoverExit() {
    $(this).removeClass('hover');
    $(this).closest('.landing').find('.rotatingImg').attr("src", "Images/emyl3_banner.svg");
  }

  $('.unclick').on('mouseleave', function(){
    $(this).addClass('hover');
    $(this).closest('.enter').find('.logo').attr("src", "Images/emyl3_banner.svg");
  });

  $('.unclick').on('mouseover', function(){
    $(this).addClass('hover');
    $(this).closest('.enter').find('.logo').attr("src", "Images/emyl3_profilepic.svg");
  });


  $('.about').on('mouseover', function(){
    $(this).addClass('hover');
    $(this).closest('.landing').find('.rotatingImg').attr("src", "Images/emyl3_profilepic.svg");
  });

  $('.print').on('mouseover', function(){
    $(this).addClass('hover');
    $(this).closest('.landing').find('.rotatingImg').attr("src", "Images/emyl3_print.svg");
  });


  $('.web').on('mouseover', function(){
    $(this).addClass('hover');
    $(this).closest('.landing').find('.rotatingImg').attr("src", "Images/emyl3_web.svg");
  });

  $('.unclick').on('click', landingPage);
  $('.about').on('mouseleave', hoverExit);
  $('.print').on('mouseleave', hoverExit);
  $('.web').on('mouseleave', hoverExit);
  });
