var accordionItems = document.getElementsByClassName('faq-accordion-btn');

console.log(accordionItems);

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

// Slick Slider scripts

$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
