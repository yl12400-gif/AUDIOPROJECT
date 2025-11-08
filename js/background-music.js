// background-music.js
(function () {
  if (!window.backgroundMusic) {
    const bg = new Audio("../assets/BackgroundMusic.mp3");
    bg.loop = true;
    bg.volume = 0.3;
    window.backgroundMusic = bg;

    document.addEventListener("click", () => {
      if (bg.paused) {
        bg.play().catch(err => console.log("Autoplay blocked:", err));
      }
    }, { once: true });
  }

  // --- NARRATION FUNCTION ---
  window.playIntroNarration = function () {
    const bg = window.backgroundMusic;
    const narration = new Audio("../assets/introNarration.mp3");
    narration.volume = 0.9;


    const fadeOut = setInterval(() => {
      if (bg.volume > 0.1) bg.volume -= 0.02;
      else clearInterval(fadeOut);
    }, 100);

    narration.play().catch(err => console.log("Narration blocked:", err));

    narration.addEventListener("ended", () => {
      const fadeIn = setInterval(() => {
        if (bg.volume < 0.3) bg.volume += 0.02;
        else clearInterval(fadeIn);
      }, 100);
    });
  };
})();

window.playIntroNarration = function () {
  const bg = window.backgroundMusic;
  const narration = new Audio("../assets/introNarration.mp3");
  narration.volume = 0.9;

  
  const fadeOut = setInterval(() => {
    if (bg.volume > 0.1) bg.volume -= 0.02;
    else clearInterval(fadeOut);
  }, 100);

  narration.play().catch(err => console.log("Narration blocked:", err));

  narration.addEventListener("ended", () => {
    const fadeIn = setInterval(() => {
      if (bg.volume < 0.3) bg.volume += 0.02;
      else clearInterval(fadeIn);
    }, 100);
  });
};

