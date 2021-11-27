// schedule modal
const scheduleModalBtn = document.querySelector('.modal-trig').addEventListener('click', () => {
  document.querySelector('.schedule-modal').style.display = 'flex';
})
const closeSchModal = document.querySelector('.close-sch-modal').addEventListener('click', () => {
  document.querySelector('.schedule-modal').style.display = 'none';
})
// select all images in home gallery
const galleryModal = document.querySelector('.gallery-modal');
const galleryModalImg = document.querySelector('.gallery-modal img');
const closeGalBtn = document.querySelector('.close-gal-modal').addEventListener('click', () => {
  galleryModal.style.display = 'none'
})
const galleryHomeImgs = document.querySelectorAll('#masonry-gallery .container .masonry .item img');
galleryHomeImgs.forEach(img => {
  img.addEventListener('click', () => {
    galleryModal.style.display = 'flex';
    galleryModalImg.src = img.src;
  })
});