import { insert } from "./modules/module.js";
const addToCartButton = document.querySelectorAll(".button");

const baseURL = "http://localhost:3000/api";

// Check if item is in shooping cart. If yes, disable 'add' button

const url = baseURL + "/shoppingcart";
fetch(url, { method: "GET" })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);

    data.forEach(data => {
      //console.log(data.name);
      let itemName = data.name;
      let getBtn = document.getElementById(`${itemName}`);
      getBtn.classList.remove("button");
      getBtn.classList.add("block");
      getBtn.disabled = true;
      getBtn.innerHTML = "Item Added";
    });
  });

const updateCart = event => {
  event.preventDefault();
  const product = event.target.parentNode.children;
  console.log(product);

  insert(product);
};

// Add function to each button

addToCartButton.forEach(div => {
  div.addEventListener("click", updateCart);
});