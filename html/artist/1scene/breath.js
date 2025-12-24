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

  // 로컬스토리지 언어 감지 및 번역
  const lang = localStorage.getItem('lang');
  if (lang === 'en') {
    const bottomTextEl = document.querySelector('.bottom-text');
    if (bottomTextEl) {
      bottomTextEl.innerHTML = `
        Apples, green grapes, and sunflowers paint a light green landscape —<br>
        the scent lingering on it is <span class="highlight">Basil Lime</span>.<br>
        The cool and refreshing citrus notes spread across the green meadow.<br>
        A summer day’s fantasy quietly blossoms.
      `;
    }
  }
});
