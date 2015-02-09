jQuery(document).ready(function($) {
  $('.custom-option').find('input[type=checkbox],input[type=radio]').accessibleOptions();
  $('.custom-select-wrapper').find('select').amwins_select();
  $('.tabs').amwins_tabs();
  $('.accordion').amwins_accordion();
  $('.collapsible').amwins_collapsible();
  $('.alert-remove-control').amwins_alert();
  $('[data-tooltip]').amwins_collapsible();
  $('[data-popover]').amwins_collapsible();

  $('#styleguide-nav-primary').find('header').find('a').on('click', function(event) {
    $('#styleguide-nav-primary > ul').data('hidden', true).stop().slideUp(250);
    // if ($(this).parent().parent().next().is(':visible')) {
    //   $(this).parent().parent().next().data('hidden', false);
    //   $(this).removeClass('active');
    // } else {
    //   $(this).addClass('active');
    // }
    $(this).toggleClass('active');
    $(this).parent().parent().next().stop().slideToggle(250);
    $(this).parent().parent().siblings('header').find('a').removeClass('active');
    event.preventDefault();
  });
});
