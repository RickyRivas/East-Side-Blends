/** @format */

const trigger = document
  .querySelector(".modal-trig")
  .addEventListener("click", renderScheduleModal);

function renderScheduleModal() {
  const body = document.querySelector("body");
  const modalBackground = document.createElement("div");
  modalBackground.className = "schedule-modal";
  modalBackground.innerHTML = `
     <div class="table">
        <div class="close-sch-modal"><span></span></div>
        <div class="heading">
          <h3>Shop Schedule</h3>
        </div>
        <ul>
          <li>
            <p>Monday:</p>
            <p>7am-5pm</p>
          </li>
          <li>
            <p>Tuesday:</p>
            <p>7am-5pm</p>
          </li>
          <li>
            <p>Wednesday:</p>
            <p>7am-5pm</p>
          </li>
          <li>
            <p>Thursday:</p>
            <p>7am-5pm</p>
          </li>
          <li>
            <p>Friday:</p>
            <p>7am-5pm</p>
          </li>
          <li>
            <p>Saturday:</p>
            <p>7am-5pm</p>
          </li>
          <li>
            <p>Sunday:</p>
            <p>7am-5pm</p>
          </li>
        </ul>
      </div>
  `;
  body.append(modalBackground);
  document.querySelector(".close-sch-modal").addEventListener("click", () => {
    body.removeChild(modalBackground);
  });
}
