$(function () {
  $('.envelope-card').each(function () {
    var $card = $(this);
    var $envelope = $card.find('.envelope');

    $envelope.on('click', function () {
      if ($envelope.hasClass('open')) {
        $envelope.removeClass('open').addClass('close');
      } else {
        $envelope.removeClass('close').addClass('open');
      }
    });

    $card.find('.btn-open').on('click', function (e) {
      e.stopPropagation();
      $envelope.removeClass('close').addClass('open');
    });

    $card.find('.btn-close').on('click', function (e) {
      e.stopPropagation();
      $envelope.removeClass('open').addClass('close');
    });
  });
});

document.querySelectorAll('.envelope-card').forEach((card, idx) => {
  const openBtn = card.querySelector('.btn-open');
  if (!openBtn) return;

  openBtn.addEventListener('click', () => {
    const delayMs = 500;
    setTimeout(() => {
      window.location.href = `card${idx + 1}.html`;
    }, delayMs);
  });
});

