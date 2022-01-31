/** @format */

const endpoint = "https://app.snipcart.com/api/products?limit=2";
fetch(endpoint);

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

// dark toggle
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document
  .querySelector(".dark-mode-button")
  .addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", null);
    }
  });

const checkLocalStorage = () => {
  if (darkMode == "enabled") {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  }
};

checkLocalStorage();
