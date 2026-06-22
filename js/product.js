const params = new URLSearchParams(window.location.search);

const productId = parseInt(params.get("id"));

const product = products.find(item=>item.id===productId);

const productDetail = document.getElementById("product-detail");

if(product){

productDetail.innerHTML = `

<div class="col-lg-6 mb-4">

<img
src="${product.image}"
class="product-detail-image"
alt="${product.name}"
>

</div>

<div class="col-lg-6">

<div class="product-detail-card">

<h2 class="product-detail-title">
${product.name}
</h2>

<p class="product-category">
${product.category}
</p>

<h3 class="product-detail-price">
$${product.price}
</h3>

<p class="product-description">
${product.description}
</p>

<button
class="btn btn-success mt-3"
onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>

</div>

`;

}

function addToCart(id){

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const existing = cart.find(item=>item.id===id);

if(existing){

existing.quantity++;

}else{

cart.push({
id:id,
quantity:1
});

}

localStorage.setItem("cart",JSON.stringify(cart));

alert("Product Added To Cart");

updateCartCount();

}

updateCartCount();

function updateCartCount(){

const cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll("#cart-count").forEach(item=>{

item.innerText = cart.reduce((sum,item)=>sum + item.quantity,0);

});

}