const products = [
  {
    name: "Strawberry Cupcake",
    price: 1000,
    description: "🧁",
    type: "chocolate",
    image:
      "./strawberrycupcake.png",
  },
  {
    name: "Starberry Milk",
    price: 1200,
    description: "🥛",
    type: "gummy",
    image:
      "./StrawberryMilk.png",
  },
  {
    name: "Strawberry Icecream",
    price: 2300,
    description: "🍧",
    type: "chocolate",
    image:
      "./StrawberryIcecream.png",
  },
  {
    name: "Strawberry Cake",
    price: 550,
    description: "🍰",
    type: "gummy",
    image:
      "./StrawberryCake.png",
  },
  {
    name: "Strawberry Lolipop",
    price: 3200,
    description: "🍭",
    type: "chocolate",
    image:
      "./Strawberry Lolipop.png",
  },
];

function PrintProducts() {
  const productsContainer = document.getElementById("products");
  let newDiv = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img class='productImage' src="${product.image}"
      <h3 class="title">${product.name}</h3>
      <p>${product.description}</p>
      <p id="price">${product.price}</p>
      <div class ="purchasing">
      <button class="plus" onclick="AddItem('${product.name}')">+</button>
      <button class="minus" onclick="MinusItem('${product.name}')">-</button>
      </div>
    `;

    newDiv += div.outerHTML;
  }

  productsContainer.innerHTML = newDiv;
}

window.onload = PrintProducts;

const userbasket = [];

function AddItem(itemName) {
  const itemIndex = userbasket.findIndex((item) => item.name === itemName);

  if (itemIndex !== -1) {
    userbasket[itemIndex].quantity += 1;
  } else {
    userbasket.push({ name: itemName, quantity: 1 });
  }

  Basket();
}

function MinusItem(itemName) {
  const itemIndex = userbasket.findIndex((item) => item.name === itemName);

  if (itemIndex !== -1) {
    userbasket[itemIndex].quantity -= 1;

    if (userbasket[itemIndex].quantity === 0) {
      userbasket.splice(itemIndex, 1);
    }
  }

  Basket();
}

function Purchase() {
  let total = 0;
  for (let i = 0; i < userbasket.length; i++) {
    const { name, quantity } = userbasket[i];
    const product = products.find((p) => p.name === name);
    if (product) {
      total += product.price * quantity;
    }
  }

  document.getElementById("total").innerHTML = total;
  Clear();
}

function Clear() {
  userbasket = [];
}

function Basket() {
  const basketDiv = document.getElementById("basket");
  const basketHtml = userbasket
    .map(
      ({ name, quantity }) => `
    <h1 class='lol'>${name} - ${quantity}</h1>
  `
    )
    .join("");
  basketDiv.innerHTML = basketHtml;
}