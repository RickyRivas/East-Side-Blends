/** @format */

const products = [
  {
    id: 1,
    title: "ORIGINAL HOLD POMADE",
    description: `Our awesome smelling water based pomades are made to keep your hair in place for the full day and into the night if need be. 
      They apply effortlessly with their creamy consistency and provide a fierce grip for slickbacks, pompadours, side parts or any hairstyle you need.`,
    price: 12.99,
    url: "https://rwt1.netlify.app/scripts/products/products.json",
    images: [
      "images/suavecito-firme-clay-4oz_400x.jpg",
      "images/suavecito-firme-clay-4oz_400x.jpg",
    ],
  },
  {
    id: 2,
    title: "Suavecito Pomade Item 2",
    description: `Our awesome smelling water based pomades are made to keep your hair in place for the full day and into the night if need be. 
      They apply effortlessly with their creamy consistency and provide a fierce grip for slickbacks, pompadours, side parts or any hairstyle you need.`,
    price: 10.99,
    url: "https://rwt1.netlify.app/scripts/products/products.json",
    images: [
      "images/Suavecito_Matte_Pomade_Side_2048x.jpg",
      "images/Suavecito_Matte_Pomade_Side_2048x.jpg",
    ],
  },
  {
    id: 3,
    title: "Suavecito Pomade Item 3",
    description: `Our awesome smelling water based pomades are made to keep your hair in place for the full day and into the night if need be. 
      They apply effortlessly with their creamy consistency and provide a fierce grip for slickbacks, pompadours, side parts or any hairstyle you need.`,
    price: 9.99,
    url: "https://rwt1.netlify.app/scripts/products/products.json",
    images: [
      "images/suavecito-light-hold-pomade-angled_2048x.jpg",
      "images/suavecito-light-hold-pomade-angled_2048x.jpg",
    ],
  },
  {
    id: 4,
    title: "Suavecito Pomade Item 4",
    description: `Our awesome smelling water based pomades are made to keep your hair in place for the full day and into the night if need be. 
      They apply effortlessly with their creamy consistency and provide a fierce grip for slickbacks, pompadours, side parts or any hairstyle you need.`,
    price: 12.99,
    url: "https://rwt1.netlify.app/scripts/products/products.json",
    images: [
      "images/suavecito-petroleum-pomade-side_2048x.jpg",
      "images/suavecito-petroleum-pomade-side_2048x.jpg",
    ],
  },
];

const fetchOutOfStockItems = async () => {
  let outOfStockArr = [];
  // fetch products that are out of stock
  await fetch("/.netlify/functions/snipcart")
    .then((response) => {
      return response.json();
    })
  .then((data) => {
    const { items } = data;
    items.map((item) => {
      if (item.totalStock === 0) {
        outOfStockArr.push(item);
      }
    });
  });
  // get that array and mark the dom
  outOfStockArr.map((item) => {
    const id = item.userDefinedId;
    const foundItem = products.find((item) => item.id == id);
    foundItem.instock = false;
    const foundItemDom = document.querySelector(`#item${item.userDefinedId}`);
    foundItemDom.dataset.instock = "false";
  });
};
fetchOutOfStockItems();

let productsOutput = document.querySelector(".prods-grid");
let prodsDom = "";
products.forEach((product) => {
  prodsDom += `
  <div
              id="item${product.id}"
              class="product"
              data-id="${product.id}"
              data-img="${product.images[0]}"
              data-desc="${product.description}"
              data-url="${product.url}"
              data-price="${product.price}"
              data-title="${product.title}"
              data-instock=''
            >
              <div class="product-image">
                <img alt="img" src="${product.images[0]}" />
              </div>
              <div class="product-body">
                <h4 class="item-name">${product.title}</h4>
                <p class="price">$${product.price} USD</p>
              </div>
            </div>
  `;
});
productsOutput.innerHTML = prodsDom;

// create product modal
const allDomProducts = document.querySelectorAll(".product");
allDomProducts.forEach((product) => {
  product.addEventListener("click", () => {
    const selectedProd = products.find((prod) => prod.id == product.dataset.id);
    renderModal(selectedProd);
  });
});

function renderModal(product) {
  let body = document.querySelector("body");
  // create modal
  const modalEl = document.createElement("div");
  modalEl.className = "prod-modal";
  modalEl.innerHTML = `
            <div class="product-displayed">
                <span class="close">
                    <div></div>
                </span>
                <div class="product-image">
                  <div class='swiper-container prodModalSwiper'>
                    <div class='swiper-wrapper'>
                      <div class='swiper-slide'>
                        <img alt="img" src="${product.images[0]}" class="modal-img" />
                      </div>
                      <div class='swiper-slide'>
                        <img alt="img" src="${product.images[1]}" class="modal-img" />
                      </div>
                    </div>
                  </div>
                   <div class="swiper-pagination-prod"></div>
                </div>
                <div class="product-body">
                      <p class="modal-name">${product.title}</p>
                      <p class="modal-desc">${product.description}</p>
                      <p class="modal-price">$${product.price} USD</p>
                  <div class='item-qty'>
                    <button id='plus-qty' class='qty-btn'>+</button>
                    <input type="number" value='1' min='1' max='99' value='1' class="qty-input">
                    <button id='minus-qty' class='qty-btn'>-</button>
                    </div>
                  <button
                    id="cart-btn"
                    class="snipcart-add-item"
                    data-item-id="${product.id}"
                    data-item-price="${product.price}"
                    data-item-url="${product.url}"
                    data-item-description="${product.description}"
                    data-item-quantity="1"
                    data-item-image="${product.images[0]}"
                    data-item-name="${product.title}"
                  >
                    Add To Cart
                  </button>
                </div>
            </div>
  `;
  if (product.instock === false) {
    modalEl.querySelector("#cart-btn").disabled = true;
    modalEl.querySelector("#cart-btn").textContent = 'OUT OF STOCK';
  }
  body.append(modalEl);
  document.querySelector(".close").addEventListener("click", () => {
    body.removeChild(modalEl);
  });
  const modalAddToCartBtn = document.querySelector("#cart-btn");

  modalAddToCartBtn.addEventListener("click", () => {
    body.removeChild(modalEl);
  });
  // set
  const setQtyAttr = () => {
    modalAddToCartBtn.setAttribute("data-item-quantity", qtyInput.value);
  };

  // qty input logic
  let qtyInput = document.querySelector(".qty-input");
  qtyInput.addEventListener("change", () => {
    setQtyAttr();
  });
  let addQtyBtn = document.querySelector("#plus-qty");
  addQtyBtn.addEventListener("click", () => {
    qtyInput.value++;
    setQtyAttr();
  });
  let remQtyBtn = document.querySelector("#minus-qty");
  remQtyBtn.addEventListener("click", () => {
    qtyInput.value--;
    if (qtyInput.value <= 1) {
      qtyInput.value = 1;
    }
    setQtyAttr();
  });

  // modal swiper
  function returnProdSwiper() {
    const modalSwiper = new Swiper(".prodModalSwiper", {
      // should be a number
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination-prod",
      },
    });
  }

  return returnProdSwiper();
}
