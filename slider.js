let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

// Auto slide every 3 seconds
setInterval(() => moveSlide(1), 3000);

// Initialize the first slide
showSlide(currentSlide);

$(".sliderShow").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
