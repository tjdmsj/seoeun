document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    const NUM_LIMES = 15;
    const limeContainer = document.querySelector('.lime-container');
    const polaroid = document.querySelector('.polaroid-container');
    const polaroidRect = polaroid.getBoundingClientRect();

    const types = ['lime1', 'lime2']; // 클래스 이름으로 이미지 구분

    for (let type of types) {
      for (let i = 0; i < NUM_LIMES; i++) {
        const lime = document.createElement('div');
        lime.className = `lime ${type}`;

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
    }

    // lang이 'en'일 때 bottom-text 영역 내용 영어로 변경
    if (localStorage.getItem('lang') === 'en') {
      const bottomText = document.querySelector('.bottom-text');
      if (bottomText) {
        bottomText.innerHTML = `
          A park where petals scatter and fall,<br>
          A quiet landscape passed by in a moment unfolds.<br>
          The subtly spreading scent over it is,<br>
          <span class="highlight">Forest Haze</span><br>
          A cool woody aroma blending soft cedarwood and gentle musk<br>
          lingers like a breeze brushing through the forest.
        `;
      }
    }
  });
});
