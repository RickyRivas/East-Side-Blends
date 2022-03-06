/** @format */

// Barber info
const barbers = [
  {
    id: 1,
    name: "Jonathan Sosa",
    image: "/images/sosa.jpeg",
    link: "sosa.html",
    bio:
      "Jonathan has been with the East Side Blends family for more than six years. He takes pride in the level of detail that goes into everyone of his haircuts. ",
  },
  {
    id: 2,
    name: "Victor Cordero Zamora",
    image: "/images/vic.jpeg",
    bio:
      "Victor found expression in barbering while attending college for psychology. This realization ultimately led him to change his career path into becoming a master barber.",
  },
  {
    id: 3,
    name: "Yoroby Rivera",
    image: "/images/yoroby.jpeg",
    bio:
      "Yoroby started cutting hair in middle school and what he believed was only a hobby quickly turned into a skilled craft. He’s always looking for ways to improve his expertise.",
  },
  {
    id: 4,
    name: "Jorge Anaya",
    image: "/images/jorge.jpeg",
    bio:
      "Jorge, once a client of the shop, attended Tulsa Tech and is the newest member of the East Side Blends family.",
  },
];
const barbersOutput = document.querySelector(".barber-grid");
let allItems = "";
barbers.forEach((barber) => {
  allItems += `
            <div class="item">
                <div class="head">
                  <img src='${barber.image}' alt="${barber.name}" class="" height='325' width='386'>
                  <div class='tag'>Master Barber</div>
                </div>
                <div class="item-body">
                  <h3>${barber.name}</h3>
                  <p>${barber.bio}</p>
                  <a href="${
                    barber.link || "nothing"
                  }" class="btn primary-btn">View Profile</a>
                </div>
          </div>
  `;
});
barbersOutput.innerHTML = allItems;
// <div class='social'>
//                 <a href=''><img src='/images/instagramwhite.svg'></a>
//                 <a href=''><img src='/images/facebook-logo.svg'></a>
//             </div>
