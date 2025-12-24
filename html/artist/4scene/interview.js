const translations = {
  en: {
    notice: `※ This interview is based on answers provided directly by artist Park Chan-heum.`,
    bubbles: [
      {
        q: "Q. I read that you have shown curiosity for art since childhood and began reinterpreting your surroundings from your own perspective. You have also won many prizes in various competitions. What has been the driving force that allowed you to continue working as an artist until now?",
        a: "A. By expressing what I like through drawing, I was able to open a door to communicate with the world through exhibitions. As I continued my activities as an artist, I gained confidence and self-esteem, which became a great strength that has allowed me to keep working until now."
      },
      {
        q: "Q. Was there a special reason or turning point that made you resume drawing at the age of 15 after having stopped for a while?",
        a: "A. At that time, several circumstances overlapped. Due to adolescence, my emotions fluctuated a lot, and it was hard to control them myself. So for a while, I couldn’t draw at all. There wasn’t any special reason. One day, while sitting quietly, I just picked up a pen and began drawing the neighborhood scenery—every leaf and every brick in detail. That drawing became the work called 'Bonridong'. It was the first piece I exhibited and also my first sale. From then on, I started creating what I call 'Park Chan-heum style drawings', freely expressing lines with a pen."
      },
      {
        q: "Q. Your bold drawings using lines are impressive. Where do you get inspiration, and how do you work?",
        a: "A. I mainly draw landscapes that are harmonized with nature. I start working directly with a pen without a preliminary sketch. The lines sometimes flow loosely and sometimes overlap. Those free lines are my unique style. Another characteristic is that my perspective is not fixed in one direction. In one landscape, there are elements seen from multiple viewpoints together. This is the 'free gaze' I want to express through my drawings. These free lines and perspectives combined have formed my distinctive working style."
      },
      {
        q: "Q. Why do you mainly draw landscapes, and why do you like them?",
        a: "A. I think the things I’ve liked since childhood naturally continue to appear in my drawings—stars, trees, mountains, and nature. My drawings sometimes pause in the middle and are resumed later, freely continuing without blockage. While working like that, my situation, mood, and emotional changes are naturally reflected in my drawings. So my artwork feels like it shows my process of change."
      },
      {
        q: "Q. This exhibition aims to connect 'scent' and 'landscape'. Are there any scents you particularly like or that remain in your memory?",
        a: "A. I’m quite sensitive to smells. Even when I look at books, I smell them first. As a child, I liked touching and smelling leaves and flowers. I like those natural scents and the smells of nature in everyday life."
      },
      {
        q: "Q. If your artwork had a scent, what kind of scent would it be?",
        a: "A. It would be the scent of mountains or the sea. People say they feel at ease when they see my drawings. So I think my works would also give off a comforting scent, like being in nature."
      },
      {
        q: "Q. What message would you like to convey through your artwork?",
        a: "A. I want to show the world I see from my own perspective, not from a fixed or conventional point of view. I want to convey the value of 'seeing differently' and share it with others. For example, in a work like 'Mother’s Flower', I’ve included memories I cherished from my childhood. Through my drawings, I want to get closer to people with my own perspective and memories."
      },
      {
        q: "Q. Could you tell us about your future plans or dreams?",
        a: "A. My dream is to become an actively working artist. I also hope my work can help improve awareness about developmental disabilities. I want to be an artist whose drawings make people feel at ease and allow them to take a brief rest."
      }
    ]
  }
};

// 나머지 translatePage(), checkVisibility(), 이벤트 리스너 부분은 동일하게 유지

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
