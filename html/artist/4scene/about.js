const translations = {
  en: {
    names: `Artist Chanheum Park draws lines with a pen. Without any preliminary sketch, the lines flow freely and become a landscape. Within those lines lie the artist's gaze, emotions, and quiet rhythm.

Stars, trees, and mountains—images of nature that he has loved since childhood—still frequently appear in his works.

Each drawing always resembles the mood of that day, and emotions quietly spread along the lines. Like the scent of petals or the smell of leaves, he cherishes the memories of smells. Those sensations permeate his paintings, and people often say they feel as if they carry a scent.

"I hope that people can take a short rest when they look at my paintings."

With the hope that someone's heart might linger for a moment, he continues to draw landscapes today.`,
    filter: `<strong>#SpeakingThroughLines #MyOwnPerspective #StayingWithinScent</strong>`
  }
};

function translatePage() {
  const lang = localStorage.getItem('lang') || 'ko';
  if (lang === 'ko') return;

  const namesElem = document.querySelector('.names');
  const filterElem = document.querySelector('.filter');

  if (namesElem && translations[lang].names) {
    namesElem.innerHTML = translations[lang].names;
  }
  if (filterElem && translations[lang].filter) {
    filterElem.innerHTML = translations[lang].filter;
  }
}

// 슬라이드 기능 (원래 HTML에 있던 JS)
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;

slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => moveToSlide(index));
  dotsContainer.appendChild(dot);
});

function moveToSlide(index) {
  slides[currentIndex].classList.remove('active');
  dotsContainer.children[currentIndex].classList.remove('active');
  currentIndex = index;
  slides[currentIndex].classList.add('active');
  dotsContainer.children[currentIndex].classList.add('active');
}

let startX = 0;

document.querySelector('.slider-container').addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector('.slider-container').addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (diff > 50 && currentIndex > 0) moveToSlide(currentIndex - 1);
  if (diff < -50 && currentIndex < slides.length - 1) moveToSlide(currentIndex + 1);
});

// 페이지 로드 시 실행
window.addEventListener('load', translatePage);
