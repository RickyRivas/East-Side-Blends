// Modify input
const itemQtyInput = document.querySelector('.qty-input');
const checkoutBtn = document.querySelector('#cart-btn');
itemQtyInput.addEventListener('change', () => {
  checkoutBtn.setAttribute('data-item-quantity', itemQtyInput.value)
})
//modal 
const prodModal = document.querySelector('.prod-modal');
//products
const allProducts = document.querySelectorAll('.product');
allProducts.forEach(prod => {
  prod.addEventListener('click', () => {
    let modalImg, modalDesc, modalPrice, modalTitle, modalId, modalUrl, selectedUrl, selectedImg, selectedPrice, selectedDesc, selectedTitle, selectedId;
    // grab selected product info 
    //id
    selectedId = prod.getAttribute('data-modal-id');
    // img
    selectedImg = prod.getAttribute('data-modal-img');
    // desc
    selectedDesc = prod.getAttribute('data-modal-desc');
    // price
    selectedPrice = prod.getAttribute('data-modal-price');
    // title
    selectedTitle = prod.getAttribute('data-modal-title');
    //quantity
    // url
    selectedUrl = prod.getAttribute('data-modal-url');

    // grab modal elements 
    modalImg = document.querySelector('.modal-img').src = selectedImg;
    modalDesc = document.querySelector('.modal-desc').textContent = selectedDesc;
    modalPrice = document.querySelector('.modal-price').textContent = '$' + selectedPrice;
    modalTitle = document.querySelector('.modal-name').textContent = selectedTitle;
    modalId = selectedId;
    modalUrl = selectedUrl;

    // data item id
    checkoutBtn.setAttribute('data-item-id', modalId);
    //item price
    checkoutBtn.setAttribute('data-item-price', selectedPrice);
    //item url
    checkoutBtn.setAttribute('data-item-url', modalUrl);
    //item name
    checkoutBtn.setAttribute('data-item-name', modalTitle);
    // item desc
    checkoutBtn.setAttribute('data-item-description', modalDesc);
    // item img
    checkoutBtn.setAttribute('data-item-image', modalImg)
    // open modal
    prodModal.style.display = 'flex';
  })
})
//close modal 
const closeModalBtn = document.querySelector('.close').addEventListener('click', () => {
  prodModal.style.display = 'none';
  itemQtyInput.value = '1';
})
// close modal after 'add to cart' is clicked
checkoutBtn.addEventListener('click', () => {
  prodModal.style.display = 'none';
  itemQtyInput.value = '1';
})