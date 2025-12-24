const translations = {
  en: {
    notice:
      "※ This interview includes both the artist's answers and responses given by her mother on her behalf.",

    q1: "Q. I heard that you started drawing by sketching characters from an early age. What did drawing mean to you back then?",
    a1: "A. At first, drawing characters was just a form of play for Seona. She would copy scenes from animations or picture books she watched as a child. It was more imitation than creation, but within that process, she began creating her own stories. Since Seona didn’t express herself verbally, we didn’t even know which characters she liked until we saw them revealed through her drawings.",

    q2: "Q. I noticed that the color green appears frequently in your works. What does the color green mean to you?",
    a2: "A. Seona likes the musical note 'fa.' Maybe that’s why she also enjoys eating green onions, which are green in color. I don’t know whether she likes green because of green onions or the other way around. Later, she always chose green necklaces, and she liked green things like peas, green grapes, and green apples, so naturally, green started appearing often in her drawings. That’s how a piece like 'I LOVE Green' came about. Seona seems to associate her favorite things with the color green, and as that connection expanded, her paintings began to take on a pop-art quality.",

    q3: "Q. Landscapes frequently appear in your works. What led you to draw nature?",
    a3: "A. After graduation, Seona first got a job at a coffee company. Then she met the CEO of Disabled, who hired her as an artist with developmental disabilities. She started working from home, leading to a rather monotonous life. To give her more external stimulation, I deliberately took her out often. At first, we just went outside to find inspiration or subjects for her drawings.<br>It was similar when she was little. Even in kindergarten, I sent her to a rural daycare far from home. On the way there, she saw flowers like morning glories and fleabanes, which often appear as motifs in her current works. At that time, communication with Seona was difficult, so we tried interacting through words, colors, and numbers. That process itself became language therapy and precious memories. These memories continue to influence her paintings today.<br>Even now, I believe health is the top priority, so I go hiking with Seona as exercise and for inspiration. Through that, she gains physical strength while observing nature for new subjects. That might be why her works, which were once focused on characters, gradually shifted to more observational landscapes. Her love of watching nature documentaries also had an influence.",

    q4: "Q. In this exhibition, we plan to present a concept that connects scents and landscapes. Do you have a favorite scent?",
    a4: "A. [Artist's answer] I like the scent of green apples.",

    q5: "Q. If your artworks had a scent, what do you think they would smell like?",
    a5: "A. [Artist's answer] The scent of fleabane flowers. I think it would be a pleasant fragrance.",

    q6: "Q. How do you feel when you see your own works displayed in an exhibition?",
    a6: "A. Even though they are her own drawings, she often looks at them carefully as if wondering, 'Are they really this good?' When I see her like that, I feel proud and touched.",

    q7: "Q. What do you most want to do through painting?",
    a7: "A. [Artist's answer] I want to draw beautifully so I can give my works as gifts at exhibitions. I also hope many people will buy my paintings. I want to share feelings of happiness and positivity.",

    q8: "Q. What are your future plans or direction for your artwork?",
    a8: "A. Rather than pursuing artistic achievements, I want to focus on her steady growth and progress through painting. I hope Seona continues to draw things she likes and express her own stories through her art. With a grateful heart and without greed, we want to keep painting consistently, like writing in a diary. I hope Seona will continue creating works that contain her personal stories.",

    q9: "Q. What is your dream?",
    a9: "A. [Artist's answer] My dream is to move to Yulhyeon House, a spacious home with a gate. I want to have a room on the second floor where I can do crafts and spend time in my own space.",
  },
};

const noticeEl = document.querySelector(".notice");
const bubbles = document.querySelectorAll(".bubble");

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;
  bubbles.forEach((bubble) => {
    const bubbleTop = bubble.getBoundingClientRect().top;
    if (bubbleTop < triggerBottom) {
      bubble.classList.add("show");
    } else {
      bubble.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", checkVisibility);

window.addEventListener("load", () => {
  checkVisibility();

  const currentLang = localStorage.getItem("lang") || "ko";

  if (currentLang === "en") {
    noticeEl.textContent = translations.en.notice;

    const keys = [
      "q1","a1","q2","a2","q3","a3","q4","a4",
      "q5","a5","q6","a6","q7","a7","q8","a8","q9","a9"
    ];

    bubbles.forEach((bubble, index) => {
      const key = keys[index];
      if (translations.en[key]) {
        bubble.innerHTML = translations.en[key]; // HTML 태그 포함
      }
    });
  }
});
