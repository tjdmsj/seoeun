const translations = {
  en: {
    notice: `※ This interview includes answers reflecting <br>the artist's intentionsand some responses <br>provided by the artist’s mother.`,
    bubbles: [
      { q: "Q. I read in an article interview that you showed artistic talent from age 4. How did you start art, and with what mindset have you worked over the years?", 
        a: "A. I like positive feelings, especially when drawing flowers. (Artist's answer) Since childhood, I expressed things uniquely. I cut grass and glued it not flat but standing up on paper. When drawing slippers, I painted the soles beautifully, which felt different. Also, I drew dandelions like the sun and painted trees in rainbow colors. I like drawing from my own perspective, and teachers recognized my talent, which naturally led me to become an artist." 
      },
      { q: "Q. Why do you mainly draw landscapes? Is there a reason you like landscapes?", 
        a: "A. I enjoy taking photos and traveling. I love gardens and well-designed hotels so much that I've probably been to almost every hotel in Yeouido. This made me like landscapes more and draw them mostly." 
      },
      { q: "Q. Where do you get inspiration when drawing landscapes?", 
        a: "A. I reinterpret photos I took myself. I once visited Seoul Grand Park about 20 times a month. I was fascinated by flamingos, so if I forgot their look, I had to go see them again. I often observed hydrangeas near my house and sometimes imagined how flowers would bloom instead of drawing exactly what I saw." 
      },
      { q: "Q. This exhibition plans to connect scents and landscapes. Do you have a favorite scent?", 
        a: "A. I like flowers. I like them because they're pretty, and sometimes I sniff the scent when flowers gather." 
      },
      { q: "Q. What message would you like to convey through your artwork?", 
        a: "A. Dara likes it when people come to the exhibition and look at the artwork with happy expressions. When happy, she taps on the paintings; she does this often during exhibitions. I hope people feel joy through the artwork." 
      },
    ],
  },
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
