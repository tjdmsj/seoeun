const translations = {
  en: {
    notice: `※ This interview includes answers reflecting the artist's intentions and some responses provided by her mother.`,
    bubbles: [
      {
        q: "Q. I heard that your childhood in nature became the root of your current work. Are there any scenes or feelings from those days that come to mind while working?",
        a: "A. My child lived in Wonju for 10 years. I think that period became the foundation of her paintings. Playing with fire at night, eating mulberries, pulling out carrots… those memories of playing in nature are deeply embedded in her artwork. While working, such scenes suddenly come to mind, and when I look at her paintings, I also recall those days."
      },
      {
        q: "Q. Even when drawing the same 'flower', do you feel that today's and yesterday's emotions are different? In what way?",
        a: "A. Even when drawing the same flower, Hyeshin's feelings are different every time. Because her emotions change day by day, even if she draws the same flower, completely different colors and moods come out. She doesn't draw exactly what she sees but follows the impressions and feelings left in her heart, so it's always new."
      },
      {
        q: "Q. Have you ever felt that paintings communicate emotions better than words, or had moments of sharing feelings with people through your art?",
        a: "A. I felt so much during her first exhibition. It felt like I was having a deep conversation with my child for the first time. One man lingered in front of her painting for a long time and said, 'This smells like my hometown. I’m from the east coast of Gangwon-do.' I was so surprised to hear that. It felt as if emotions we had never shared in words were being exchanged through the paintings. From that time on, people began calling her a 'healing artist'. Her paintings made people realize that they carry healing energy, childlike innocence, and the power to return to their childhood."
      },
      {
        q: "Q. How do you feel when people say things like, 'Your work feels warm' or 'It made me feel happy'?",
        a: "A. Every time she hears such words, my child feels so happy. When she realizes that her paintings comfort and bring happiness to someone, I also get emotional. As people who look forward to her work have increased, she has naturally developed a sense of responsibility. Once, she worked six hours a day and completed a large painting in just 15 days because she wanted to repay the people who were waiting for her artwork."
      },
      {
        q: "Q. Why did you start mainly painting landscapes, and why do you like them?",
        a: "A. The neighborhood where she grew up was very close to nature. Just across the street were rice fields, dried persimmons hanging, and the smell of earth after rain. Growing up in such a place, the sense of nature became ingrained in her. When she sees landscapes, she feels excited and touched, which naturally leads her to express them through painting."
      },
      {
        q: "Q. This exhibition plans to connect 'scent' and 'landscape'. Do you have any scents you particularly like or that remain in your memory?",
        a: "A. I like the scent of lilacs, and especially the smell of earth after rain—those countryside scents still remain deeply in my heart. I’ve spent a lot of time in forests, so those are the smells that linger in my memory."
      },
      {
        q: "Q. What message would you like to convey through your artwork?",
        a: "A. Hyeshin never paints to meet people's expectations; she paints according to her own convictions. She purely wants to share her joy and happiness with others through her art—the changing seasons, the living feeling of nature. She hopes that her love for nature is conveyed through her work."
      },
      {
        q: "Q. Could you tell us about your future plans or dreams?",
        a: "A. She wants to continue her artistic activities without losing her own style. Most of all, she hopes that when people see her paintings, they feel happy. As long as she can keep painting joyfully and playfully as she does now, and if her paintings can warm someone's heart, that alone is enough for her."
      }
    ]
  }
};

function translatePage() {
  const lang = localStorage.getItem('lang') || 'ko';
  if (lang === 'ko') return; // 기본 한국어면 변경 없음

  const noticeElem = document.querySelector('.notice');
  if(noticeElem && translations[lang] && translations[lang].notice) {
    noticeElem.innerHTML = translations[lang].notice;
  }

  const bubbles = document.querySelectorAll('.bubble');

  bubbles.forEach((bubble, index) => {
    const pairIndex = Math.floor(index / 2);
    if (translations[lang].bubbles[pairIndex]) {
      if (index % 2 === 0) {
        // 짝수 인덱스는 질문(q)
        bubble.innerHTML = translations[lang].bubbles[pairIndex].q;
      } else {
        // 홀수 인덱스는 답변(a)
        bubble.innerHTML = translations[lang].bubbles[pairIndex].a;
      }
    }
  });

  // 번역 후 애니메이션 재실행
  checkVisibility();
}

const bubbles = document.querySelectorAll('.bubble');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  bubbles.forEach((bubble) => {
    const bubbleTop = bubble.getBoundingClientRect().top;

    if (bubbleTop < triggerBottom) {
      bubble.classList.add('show');
    } else {
      bubble.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', () => {
  translatePage();
  checkVisibility();
});
