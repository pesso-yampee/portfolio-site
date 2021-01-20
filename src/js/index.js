import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  $('a[href^="#"]').on('click', function() {
    const speed        = 200,
          headerHeight = $('#header').height(),
          fNavHeight   = $('#footerNav').height(),
          windowWidth  = $(window).width(),
          href         = $(this).attr('href'),
          target       = $(href == "#" || href == "" ? 'html': href);

    let position;

    if (windowWidth >= 768) {
      position = target.offset().top - headerHeight;
    } else {
      position = target.offset().top - fNavHeight;
    }

    $('body, html').animate({scrollTop: position}, speed, 'swing');

    return false;
  });
})
