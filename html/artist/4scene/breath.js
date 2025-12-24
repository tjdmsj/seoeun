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

    // lang이 'en'일 때 bottom-text 영역 내용 영어로 변경
    if (localStorage.getItem('lang') === 'en') {
      const bottomText = document.querySelector('.bottom-text');
      if (bottomText) {
        bottomText.innerHTML = `
          Along with the breeze brushing through the grass,<br>
          the scent of flowers comes alive.<br>
          Red flowers blossoming between the green blades of grass.<br>
          The scent lingering here is,<br>
          <span class="highlight">Flower Hill</span><br>
          A natural floral fragrance carried by the wind,<br>
          blooming like a warm breath seeping through the grass,<br>
          where scent and scenery flourish together.
        `;
      }
    }
  });
});
