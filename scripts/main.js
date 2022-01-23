/** @format */

// Navigation 1
const body = document.querySelector("body");
const burger = document.querySelector(".hamburger");
const navOverlay = document.querySelector(".navlinks-overlay");
const nav = document.querySelector(".nav-links");

const toggleEverything = () => {
  nav.classList.toggle("is-active");
  burger.classList.toggle("is-active");
  body.classList.toggle("body-fixed");
  navOverlay.classList.toggle("is-active");
};

burger.addEventListener("click", toggleEverything);
navOverlay.addEventListener("click", toggleEverything);
// Landing Swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination-landing",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Test Swiper
var swiper = new Swiper(".myTestSwiper", {
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
// Barber Swipers
var swiper = new Swiper(".myWorkSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  speed: 1500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
// Home Gallery Swiper
var swiper = new Swiper(".gallery-swiper", {
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-next-gal",
    prevEl: ".swiper-prev-gal",
  },
});
// Scroll to top logic
const scrollToTopButton = document.getElementById("js-top");

const scrollFunc = () => {
  let y = window.scrollY;
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};

scrollToTopButton.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
};

function initMap() {
  map = new google.maps.Map(document.querySelector("#map"), {
    center: {
      lat: 36.130037207923735,
      lng: -95.85173717672147,
    },
    zoom: 15,
    mapId: "7794715a02b4f75c",
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false,
  });
  const image = "/images/esblogo1.png";
  const contentString = `East Side Blends Barbershop`;
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: {
      lat: 36.130037207923735,
      lng: -95.85173717672147,
    },
    map,
    title: "East Side Blends",
    icon: {
      url: image,
      scaledSize: new google.maps.Size(50, 50),
    },
    animation: google.maps.Animation.DROP,
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}
