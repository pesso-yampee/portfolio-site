import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  /*
    PCレイアウト時のヘッダーメニュー及び
    SPレイアウト時のフッターメニューをクリックした時のスムーススクロール処理
  */
  $('a[href^="#"]').on('click', function() {
    const speed        = 200,
          headerHeight = $('.jsi-header').height(),
          fNavHeight   = $('.jsi-footer').height(),
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

  $('.jsi-elem-hover').hover(
    function() {
      $(this).find('.jsc-elem-slide').toggleClass('is-active');
    }
  );
})
