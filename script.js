$(document).ready(function () {
    let currentIndex = 0;
    const testimonials = $(".testimonial-item");
    const dots = $(".carousel-dots .dot");
    const total = testimonials.length;

    function showTestimonial(index) {
      testimonials.removeClass("active").eq(index).addClass("active");
      dots.removeClass("active").eq(index).addClass("active");
    }

    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % total;
      showTestimonial(currentIndex);
    }

    // Automatic sliding every 5 seconds
    let interval = setInterval(nextTestimonial, 5000);

    // Dot click handler
    dots.click(function () {
      clearInterval(interval); // stop auto slide on manual interaction
      currentIndex = $(this).index();
      showTestimonial(currentIndex);
      interval = setInterval(nextTestimonial, 5000); // restart
    });

    showTestimonial(currentIndex);
  });