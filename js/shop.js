let filteredProducts = [...products];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");

function renderProducts(data){

productList.innerHTML = data.map(product=>`

<div class="col-lg-3 col-md-6 mb-4">

<div class="card product-card">

<img src="${product.image}" alt="${product.name}">

<div class="card-body">

<h5 class="product-title">
${product.name}
</h5>

<p class="product-category">
${product.category}
</p>

<h4 class="product-price">
$${product.price}
</h4>

<a href="product.html?id=${product.id}"
class="btn btn-primary product-btn">
View Details
</a>

</div>

</div>

</div>

`).join('');

}

renderProducts(filteredProducts);

searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

function applyFilters(){

let data = [...products];

const searchValue = searchInput.value.toLowerCase();
const categoryValue = categoryFilter.value;
const sortValue = sortSelect.value;

if(searchValue){

data = data.filter(product=>

product.name.toLowerCase().includes(searchValue)

);

}

if(categoryValue !== "all"){

data = data.filter(product=>

product.category === categoryValue

);

}

if(sortValue === "low-high"){

data.sort((a,b)=>a.price-b.price);

}

if(sortValue === "high-low"){

data.sort((a,b)=>b.price-a.price);

}

renderProducts(data);

}

updateCartCount();

function updateCartCount(){

const cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll("#cart-count").forEach(item=>{

item.innerText = cart.reduce((sum,item)=>sum + item.quantity,0);

});

}