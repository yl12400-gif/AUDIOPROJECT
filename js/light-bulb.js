window.onload = function () {
  const lamp = document.querySelector('.lamp');
  const instruction = document.querySelector('.instruction');
  const beginBtn = document.getElementById('beginButton');

  if (instruction) {
    instruction.style.textShadow = 'none';
  }

  if (instruction && lamp) {
    instruction.addEventListener('click', function (event) {
      event.stopPropagation();

      lamp.classList.add('is-on');

      instruction.style.transition = 'opacity 1s ease';
      instruction.style.opacity = '0';

      setTimeout(() => {
        document.body.style.transition = 'background 2s ease';
        document.body.style.background = '#000';
      }, 2000);


      setTimeout(() => {
        beginBtn.classList.add('show');
      }, 1500);
    });
  }

  if (beginBtn) {
    beginBtn.addEventListener('click', () => {
      document.body.style.transition = 'opacity 2s ease';
      document.body.style.opacity = '0';

      setTimeout(() => {
        window.location.href = 'love letter 2.html';
      }, 2000);
    });
  }
};

document.addEventListener("click", () => {
  if (window.backgroundMusic && window.backgroundMusic.paused) {
    window.backgroundMusic.play().catch(err => console.log("Autoplay blocked:", err));
  }
});
