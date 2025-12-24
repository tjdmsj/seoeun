document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    const NUM_LIMES = 20;
    const limeContainer = document.querySelector('.lime-container');
    const polaroid = document.querySelector('.polaroid-container');

    const polaroidRect = polaroid.getBoundingClientRect();

    for (let i = 0; i < NUM_LIMES; i++) {
      const lime = document.createElement('div');
      lime.className = 'lime';

      let top, left;
      let attempts = 0;

      do {
        top = Math.random() * document.querySelector('.polaroid-container').scrollHeight;
left = Math.random() * (window.innerWidth - 40); // 40은 lime 크기

        attempts++;
      } while (
        top > polaroidRect.top &&
        top < polaroidRect.bottom &&
        left > polaroidRect.left &&
        left < polaroidRect.right &&
        attempts < 100
      );
      lime.style.top = `${top}px`;
      lime.style.left = `${left}px`;
      lime.style.animationDuration = `${2 + Math.random() * 2}s`;
      lime.style.animationDelay = `${Math.random() * 2}s`;

      limeContainer.appendChild(lime);
    }
  });

  // 로컬스토리지 언어가 'en'일 때만 bottom-text 번역
  const lang = localStorage.getItem('lang');
  if (lang === 'en') {
    const bottomTextEl = document.querySelector('.bottom-text');
    if (bottomTextEl) {
      bottomTextEl.innerHTML = `
        Like absorbing the moonlight,<br>
        flowers blooming on a purple background quietly shine.<br>
        The scent that embraces that moment is,<br>
        <span class="highlight">Bluebell</span>.<br>
        The fresh yet sweet fragrance of purple flowers<br>
        quietly blends with the scenery in the painting.
      `;
    }
  }
});
