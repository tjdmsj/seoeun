// aboutGallery_hyeshin.js

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('dots');
  let currentIndex = 0;

  // 슬라이드 dot 생성
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // 슬라이드 이동 함수
  function moveToSlide(index) {
    slides[currentIndex].classList.remove('active');
    dotsContainer.children[currentIndex].classList.remove('active');
    currentIndex = index;
    slides[currentIndex].classList.add('active');
    dotsContainer.children[currentIndex].classList.add('active');
  }

  // 터치 스와이프 이벤트
  let startX = 0;
  const sliderContainer = document.querySelector('.slider-container');

  sliderContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  sliderContainer.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff > 50 && currentIndex > 0) moveToSlide(currentIndex - 1);
    if (diff < -50 && currentIndex < slides.length - 1) moveToSlide(currentIndex + 1);
  });

  // 언어 감지 및 번역 처리
  const lang = localStorage.getItem('lang');

  if (lang === 'en') {
    const namesEl = document.querySelector('.header .names');
    const filterEl = document.querySelector('.header .filter');

    if (namesEl) {
      namesEl.innerHTML = `
        Park HyeShin's paintings quietly carry memories of childhood spent with nature.<br>
        The smell of earth, playing with fire sticks, picking mulberries —<br>
        small scenes revived warmly through color and emotion.<br><br>

        The artist paints according to daily changing feelings and impressions.<br>
        Carefully unraveling the unspoken heart through colors and lines.<br><br>

        "I hope people feel happiness when they see my paintings" —<br>
        with that wish, Park HyeShin’s work offers gentle comfort and joy.<br>
        Her landscapes invite viewers to quietly pause,<br>
        breathing calm into their hearts.<br><br>

        These scenes, filled with the artist's gaze and senses towards nature,<br>
        linger by us like silent memories.
      `;
    }

    if (filterEl) {
      filterEl.innerHTML = `<strong>#HealingArtist #SpeakingThroughPainting #MemoriesOfLandscape</strong>`;
    }
  }
});
