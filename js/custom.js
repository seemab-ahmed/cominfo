AOS.init({
  duration: 1000, // Animation duration in milliseconds
  easing: "ease-in-out", // Animation easing
  once: true, // Whether animation should happen only once
  mirror: false, // Whether elements should animate out while scrolling past them
});
// Scroll to Top Button
window.addEventListener("scroll", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  scrollToTopBtn.style.display = window.pageYOffset > 100 ? "block" : "none";
});
document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
// Initialize Slick Sliders
$(document).ready(function () {
  // Client Slider
  $(".client-slider").slick({
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 6 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
      { breakpoint: 375, settings: { slidesToShow: 1 } },
    ],
  });
  // Testimonials Slider
  $(".testimonials-slider").slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  });
  // Latest Slick Slider
  $(".latest_slick").slick({
    dots: false,
    infinite: true,
    draggable: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev custom_slick_prev_success"></div>',
    nextArrow: '<div class="slick-next custom_slick_next_success"></div>',
    responsive: [
      { breakpoint: 768, settings: { arrows: false, slidesToShow: 2 } },
      {
        breakpoint: 480,
        settings: { arrows: false, slidesToShow: 1 },
      },
    ],
  });

  // Demo Slider
  $(".demo-slider").slick({
    dots: false,
    infinite: true,
    draggable: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev custom_slick_prev_demo"></div>',
    nextArrow: '<div class="slick-next custom_slick_next_demo"></div>',
    responsive: [
      { breakpoint: 768, settings: { arrows: false, slidesToShow: 2 } },
      {
        breakpoint: 480,
        settings: { arrows: false, slidesToShow: 2, dots: true },
      },
    ],
  });
 // Success Slick Slider
$(".success_slick").slick({
  dots: false,
  infinite: true,
  draggable: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev custom_slick_prev_success"></div>',
  nextArrow: '<div class="slick-next custom_slick_next_success"></div>',
  responsive: [
    { breakpoint: 768, settings: { arrows: false, slidesToShow: 2 } },
    {
      breakpoint: 480,
      settings: { arrows: false, slidesToShow: 1, dots: true },
    },
  ],
});

// Pause the slick slider and play video when modal is shown
$("#videoModal").on("shown.bs.modal", function () {
  $(".success_slick").slick("slickPause"); // Pause slider
  $("#videoPlayer")[0].play(); // Play the video
});

// Resume the slick slider and pause video when closing modal
$("#close_btn").click(function () {
  $(".success_slick").slick("slickPlay"); // Resume slider
  $("#videoPlayer")[0].pause(); // Pause the video
  $("#videoPlayer")[0].currentTime = 0; // Reset video to start
  $("#videoModal").modal("hide"); // Hide the modal
});

// Dynamically load the video source and show modal
$(".success_box").click(function () {
  var videoPath = $(this).data("video");
  $("#videoPlayer").attr("src", videoPath); // Set video source
  $("#videoModal").modal("show"); // Show modal
});

  // Demo Iframe Handling
  $(".demo-slider img").on("click", function () {
    const clickedDataId = $(this).data("id");
    $(".demo-slider img").removeClass("showBorder");
    $(this).addClass("showBorder");
    $(".demo-iframe").hide();
    $("#" + clickedDataId + "_iframe").show();
  });
});
