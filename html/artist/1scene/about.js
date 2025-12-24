// aboutGallery.js

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
        Artist Kang SunAh communicated her feelings with drawings before words during childhood.<br>
        In the cautious expression of emotions, drawing became her own language<br>
        and a window to communicate with the world.<br><br>

        Under the gentle support of her mother, her sense of color naturally seeped<br>
        into her daily life and memories. Her gaze lingers on green-hued objects<br>
        like peas, green grapes, and Aori apples,<br>
        revealing the affectionate sensibility of the artist.<br><br>

        Green is the color where her heart feels most at ease.<br>
        At times painterly, sometimes with the liveliness of pop art,<br>
        small joys sparkle on her canvas.<br><br>

        "I want to beautifully paint and gift my works to people."<br><br>

        Holding that wish, she slowly and steadily paints what she loves.<br>
        Her careful depiction of moments in life transmits warmth in green today as well.
      `;
    }

    if (filterEl) {
      filterEl.innerHTML = `<strong>#DrawingLanguage #GreenGaze #JoyOfGiving</strong>`;
    }
  }
});
