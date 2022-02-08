'use strict'

// ここからloading画面
// window.onload = function() {
//   const spinner = document.getElementById('loading');
//   spinner.classList.add('loaded');
// }

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.introduce2').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述

// ここからswiper
// const swiper = new Swiper(".swiper", {});

const theWrapper = document.getElementById('swiperWrapper');
const mySwiper = new Swiper('.swiper-container', {
  freeMode: true,
  loop: true,
  loopedSlides: 6,
  slidesPerView: 3,
  speed: 5000,
  autoplay: {
    delay: 0,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  on: {
    slideChangeTransitionStart: function(){
      theWrapper.style.transitionTimingFunction = 'linear';
    }
  },
});