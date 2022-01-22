/** @format */

// schedule modal
const scheduleModalBtn = document
  .querySelector(".modal-trig")
  .addEventListener("click", () => {
    document.querySelector(".schedule-modal").style.display = "flex";
  });
const closeSchModal = document
  .querySelector(".close-sch-modal")
  .addEventListener("click", () => {
    document.querySelector(".schedule-modal").style.display = "none";
  });
// select all images in home gallery
const galleryModal = document.querySelector(".gallery-modal");
const galleryModalImg = document.querySelector(".gallery-modal img");
const closeGalBtn = document
  .querySelector(".close-gal-modal")
  .addEventListener("click", () => {
    galleryModal.style.display = "none";
  });
const galleryHomeImgs = document.querySelectorAll(
  "#masonry-gallery .container .masonry img"
);

galleryHomeImgs.forEach((img) => {
  img.addEventListener("click", renderModalSwiper);
});

// create new swiper logic
function renderModalSwiper(img) {
  const body = document.querySelector("body");
  // create background modal
  const backgroundOverlay = document.createElement("div");
  backgroundOverlay.className = "modal-overlay";

  // create swiper container
  const swiperContainer = document.createElement("div");
  swiperContainer.className = "swiper-container swiperModal";

  // create swiper wrapper
  const swiperWrapper = document.createElement("div");
  swiperWrapper.className = "swiper-wrapper";
  // create swiper pagination
  const swiperPagination = document.createElement("div");
  swiperPagination.className = "swiper-pagination-modal";

  // create close button
  const closeModalEl = document.createElement("div");
  closeModalEl.className = "close-swiper-modal";
  const closeModalInnerEl = document.createElement("div");
  closeModalEl.appendChild(closeModalInnerEl);

  // create a new slide for each gallery img and append it to the parent container
  let slides = "";
  galleryHomeImgs.forEach((img) => {
    slides += `<div class="swiper-slide"><img src='${img.src}'></div>`;
    swiperWrapper.innerHTML = slides;
  });

  // append all
  swiperContainer.appendChild(swiperWrapper);
  backgroundOverlay.appendChild(closeModalEl);
  backgroundOverlay.appendChild(swiperPagination);
  backgroundOverlay.appendChild(swiperContainer);

  // append to overlay
  body.appendChild(backgroundOverlay);

  function returnNewSwiper() {
    // find index and set it to swiper initialSlide value
    const thisImgSrc = img.target.currentSrc;
    let thisIndex;
    galleryHomeImgs.forEach((img, index) => {
      if (img.src === thisImgSrc) {
        thisIndex = index;
      } else {
        return;
      }
    });
    const modalSwiper = new Swiper(".swiperModal", {
      // should be a number
      initialSlide: thisIndex,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination-modal",
        type: "fraction",
      },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    });
  }
  // close modal logic
  closeModalEl.addEventListener("click", () => {
    body.removeChild(backgroundOverlay);
  });
  return returnNewSwiper();
}
