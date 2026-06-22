const featuredProducts = document.getElementById("featured-products");

if(featuredProducts){

featuredProducts.innerHTML = products.map(product => `
<div class="col-lg-3 col-md-6 mb-4">

<div class="card product-card fade-up">

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

updateCartCount();

function updateCartCount(){

const cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll("#cart-count").forEach(item=>{

item.innerText = cart.reduce((sum,item)=>sum + item.quantity,0);

});

}