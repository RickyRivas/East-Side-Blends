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
