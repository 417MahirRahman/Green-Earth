const Allcategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};

const displayCategory = (categoriess) => {
  const categoryContainer = document.getElementById("category-Container");
  categoryContainer.innerHTML = "";

  for (let category of categoriess) {
    const catBtn = document.createElement("div");
    catBtn.innerHTML = `<button id="lesson-btn" onclick="loadtree" class="rounded p-2 hover:bg-[#15803D] hover:text-white min-w-xs text-left">${category.category_name}</button>`;

    categoryContainer.append(catBtn);
  }
};

const loadtree = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayAllTree(data.plants));
};

const displayAllTree = (trees) => {
  const TreeCard = document.getElementById("tree-container");
  TreeCard.innerHTML = "";


//   "id": 1,
//       "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//       "name": "Mango Tree",
//       "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//       "category": "Fruit Tree",
//       "price": 500
  trees.forEach((tree) => {
    const treeDiv = document.createElement("div");
    treeDiv.innerHTML = `<div class="card bg-base-100 w-96 shadow-sm">
                            <figure class="px-10 pt-10">
                                <img class="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-xl"
                                src="${tree.image}"
                                alt="Shoes"
                                class="rounded-xl" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title text-lg">${tree.name}</h2>
                                <p class="text-sm text-justify">${tree.description}</p>
                                <div class="flex justify-between">
                                    <div class="badge badge-sm text-[#15803D] bg-[#15803D]/15">${tree.category}</div>
                                    <span class="font-semibold text-lg">${tree.price}<span>
                                </div>
                                <div class="card-actions">
                                 <button class="btn w-full bg-[#15803D] text-white rounded-xl">Add to Cart</button>
                                </div>
                            </div>
                        </div>`;

    TreeCard.append(treeDiv);
  });
};

Allcategory();
loadtree();
