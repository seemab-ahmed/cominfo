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
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  });
  // Latest Slick Slider
  $(".news-slider").slick({
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

 // Success copy Slick Slider
$(document).ready(function () {
  // Top video slider
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  // Bottom thumbnail slider
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    autoplay: false,
    arrows: true,
    prevArrow: '<div class="slick-prev custom_slick_prev_success"></div>',
    nextArrow: '<div class="slick-next custom_slick_next_success"></div>',
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ]
  });

  // Custom play/pause logic
  $('.video-wrapper').each(function () {
    const wrapper = $(this);
    const video = wrapper.find('video')[0];
    const playBtn = wrapper.find('.vid_player');
    video.pause();
    video.currentTime = 0;
    playBtn.show();
    playBtn.on('click', function () {
      video.play();
      playBtn.hide();
    });
    $(video).on('click', function () {
      if (!video.paused) {
        video.pause();
        playBtn.show();
      }
    });
    video.onended = function () {
      playBtn.show();
    };
  });
  $('.slider-for').on('beforeChange', function () {
    $('.slider-for video').each(function () {
      this.pause();
      this.currentTime = 0;
    });
    $('.vid_player').show();
  });
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
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev custom_slick_prev_success"></div>',
  nextArrow: '<div class="slick-next custom_slick_next_success"></div>',
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1},
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
$(".story-card").click(function () {
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
// hide scroll to top btn on first 
$(document).ready(function () {
  const $arrowTop = $("#arrowTop");
  const $home = $("#home");

  $(window).on("scroll", function () {
    const homeInView = $home.offset().top <= $(window).scrollTop() + $(window).height() && 
                       $home.offset().top + $home.outerHeight() > $(window).scrollTop();
    $arrowTop.toggle(!homeInView);
  }).trigger("scroll"); // Trigger scroll to set the initial state
});