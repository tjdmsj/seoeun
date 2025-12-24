// aboutGallery_darae.js

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
        Lee DaRae's canvas holds the breath of life quietly blossoming amidst vivid colors.<br>
        Flowers, trees, fruits – images drawn from everyday scenes are reimagined through the artist's sensibility and imagination.<br>
        Scenes self-photographed at Seoul Grand Park, hotel gardens, etc., serve as starting points for her work.<br><br>

        Layers of light and color create a sensory landscape beyond reality.<br>
        The plants in her paintings are reborn not just as subjects,<br>
        but as beings imbued with emotion.<br><br>

        For Lee DaRae, painting is a language of the heart<br>
        and a quiet bridge connecting to the world.<br>
        When visitors stand before her works and smile softly,<br>
        the artist quietly sends a small greeting from her heart.<br><br>

        Like her wish to share joy through her paintings,<br>
        DaRae's landscapes hold gentle gazes and warm breaths.
      `;
    }

    if (filterEl) {
      filterEl.innerHTML = `<strong>#EverydayScenes #HandsThatDrawJoy #GardenInMyHeart</strong>`;
    }
  }
});
