let navbar = document.querySelector(".header .navbar");
let contactInfo = document.querySelector(".contact-info");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  contactInfo.classList.remove("active");
};

document.querySelector("#info-btn").onclick = () => {
  contactInfo.classList.add("active");
  navbar.classList.remove("active");
};

document.querySelector("#close-contact-info").onclick = () => {
  contactInfo.classList.remove("active");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  contactInfo.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1600,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});

// Initialize LightGallery for the videos section
lightGallery(document.querySelector(".videos .box-container"), {
  selector: ".box",
  videoMaxWidth: "1000px", // Set the max width for videos
  download: false, // Disable video download option
});
