let Cart = [];
let cartCounter = 0;

const showLoading = () => {
  document.getElementById("loading").classList.remove("hidden");
};

const hideLoading = () => {
  document.getElementById("loading").classList.add("hidden");
};

const cartID = ( treeName, treePrice) => {
  cartCounter++;

  const data = {
    fruitID: cartCounter,
    fruitName: treeName,
    fruitPrice: treePrice,
  };
  Cart.push(data);
  addTocart();
};

const addTocart = () => {
  const cart_Container = document.getElementById("cart-container");
  cart_Container.innerHTML = "";

  let total = 0;

  for (let data of Cart) {
    total += data.fruitPrice;

    const treeCard = document.createElement("div");
    treeCard.innerHTML = `<div class="flex justify-between items-center bg-[#15803D]/15 rounded-xl p-2 mb-3" id="child-${data.fruitID}"> 
        <div>
            <h1 class="font-semibold">${data.fruitName}</h1>
            <span class="text-gray-400"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${data.fruitPrice}<span> x1</span></span>
        </div>
        <div>
            <i onclick="removeItem(${data.fruitID})" class="fa-solid fa-xmark text-red-500 cursor-pointer"></i>
        </div>
        </div>`;

    cart_Container.append(treeCard);
  }

  let money = document.getElementById("totalMoney");
  money.innerText = total;
};

const removeItem = (fruitID) => {
  Cart = Cart.filter((item) => item.fruitID !== fruitID);

  const Card = document.getElementById(`child-${fruitID}`);
  if (Card) Card.remove();

  let total = 0;
  for (let item of Cart) {
    total += item.fruitPrice;
  }
  let money = document.getElementById("totalMoney");
  money.innerText = total;
};

const removeActive = () => {
  const allBtn = document.querySelectorAll(".tree_Btn, #btn-0");
  allBtn.forEach((btn) => btn.classList.remove("bg-[#15803D]"));
  allBtn.forEach((btn) => btn.classList.remove("text-white"));
};

const allTree = () => {
  removeActive();
  const allTreeBtn = document.getElementById("btn-0");
  allTreeBtn.classList.add("bg-[#15803D]");
  allTreeBtn.classList.add("text-white");

  loadtree();
};

const Allcategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};

const displayCategory = (categoriess) => {
  const categoryContainer = document.getElementById("category-Container");
  categoryContainer.innerHTML = "";

  const btn0 = document.createElement("div");
  btn0.innerHTML = `
          <button
            id="btn-0"
            onclick="allTree(true)"
            class="rounded p-2 bg-[#15803D] text-white hover:bg-[#15803D] hover:text-white w-full text-left"
          >
            All Trees
          </button>
  `;

  categoryContainer.append(btn0);

  for (let category of categoriess) {
    const catBtn = document.createElement("div");
    catBtn.innerHTML = `<div>
    <button id="tree-btn-${category.id}" onclick="selectCategory(${category.id})" class="rounded p-2 hover:bg-[#15803D] hover:text-white w-full text-left tree_Btn">${category.category_name}</button>
    </div>`;
    categoryContainer.append(catBtn);
  }
};

const loadtree = () => {
  showLoading();
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayAllTree(data.plants));
  hideLoading();
};

const displayAllTree = (trees) => {
  const TreeCard = document.getElementById("tree-container");
  TreeCard.innerHTML = "";

  trees.forEach((tree) => {
    const treeDiv = document.createElement("div");
    treeDiv.innerHTML = `<div class="card bg-base-100 w-full shadow-sm rounded-lg overflow-hidden flex flex-col h-full">
                            <figure class="px-10 pt-10">
                                <img class="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-xl"
                                src="${tree.image}"
                                alt="Shoes"
                                class="rounded-xl" />
                            </figure>
                            <div class="card-body">
                                <h2 onclick="ModalDetail(${tree.id})" class="card-title text-lg cursor-pointer">${tree.name}</h2>
                                <p class="text-sm text-justify">${tree.description}</p>
                                <div class="flex justify-between">
                                    <div class="badge badge-sm text-[#15803D] bg-[#DCFCE7]">${tree.category}</div>
                                    <span class="font-semibold text-lg"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price}</span>
                                </div>
                                <div class="card-actions">
                                 <button onclick="cartID('${tree.name}', ${tree.price})" class="btn w-full bg-[#15803D] text-white rounded-xl ">Add to Cart</button>
                                </div>
                            </div>
                        </div>`;

    TreeCard.append(treeDiv);
  });
};

Allcategory();
loadtree();

const selectCategory = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  showLoading();
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`tree-btn-${id}`);
      clickBtn.classList.add("bg-[#15803D]");
      clickBtn.classList.add("text-white");
      displaySelectCategory(data.plants);
      hideLoading();
    });
};

const displaySelectCategory = (tree) => {
  const TreeCard = document.getElementById("tree-container");
  TreeCard.innerHTML = "";

  tree.forEach((tr) => {
    const treeDiv = document.createElement("div");
    treeDiv.innerHTML = `<div class="card bg-base-100 w-full shadow-sm rounded-lg overflow-hidden flex flex-col h-full">
                            <figure class="px-10 pt-10">
                                <img class="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-xl"
                                src="${tr.image}"
                                alt="Shoes"
                                class="rounded-xl" />
                            </figure>
                            <div class="card-body">
                                <h2 onclick="ModalDetail(${tr.id})" class="card-title text-lg cursor-pointer">${tr.name}</h2>
                                <p class="text-sm text-justify">${tr.description}</p>
                                <div class="flex justify-between">
                                    <div class="badge badge-sm text-[#15803D] bg-[#DCFCE7]">${tr.category}</div>
                                    <span class="font-semibold text-lg"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${tr.price}<span>
                                </div>
                                <div class="card-actions">
                                 <button onclick="cartID('${tr.name}', ${tr.price})" class="btn w-full bg-[#15803D] text-white rounded-xl">Add to Cart</button>
                                </div>
                            </div>
                        </div>`;

    TreeCard.append(treeDiv);
  });
};

const ModalDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  await fetch(url)
    .then((res) => res.json())
    .then((data) => displayModalDetails(data.plants));
};

const displayModalDetails = (tree) => {
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
            <div class="card-body">
                <h2 class="card-title text-lg">${tree.name}</h2>
            <figure class="px-3 py-3">
                <img class="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-xl"
                src="${tree.image}"
                alt="Shoes"
                class="rounded-xl" />
            </figure>
                <p class="text-sm text-justify">${tree.description}</p>
                <div class="font-semibold">Category: ${tree.category}</div>
                <span class="font-semibold">Price: <i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price}<span>    
            </div>
        
  `;
  document.getElementById("my_modal_5").showModal();
};
