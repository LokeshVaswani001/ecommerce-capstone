const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

renderCart();

function renderCart(){

if(cart.length === 0){

cartItems.innerHTML = `
<tr>
<td colspan="5" class="text-center py-4">
Your cart is empty
</td>
</tr>
`;

cartTotal.innerText = "0";
updateCartCount();
return;

}

let total = 0;

cartItems.innerHTML = cart.map(item=>{

const product = products.find(p=>p.id===item.id);

const subtotal = product.price * item.quantity;

total += subtotal;

return `

<tr>

<td>

<div class="d-flex align-items-center gap-3">

<img
src="${product.image}"
class="cart-product-img"
alt="${product.name}"
>

<div>
<strong>${product.name}</strong>
</div>

</div>

</td>

<td>
$${product.price}
</td>

<td>

<input
type="number"
min="1"
value="${item.quantity}"
class="form-control quantity-input"
onchange="updateQuantity(${item.id}, this.value)"
>

</td>

<td>
$${subtotal}
</td>

<td>

<button
class="btn btn-danger btn-sm"
onclick="removeItem(${item.id})">
Remove
</button>

</td>

</tr>

`;

}).join('');

cartTotal.innerText = total.toFixed(2);

updateCartCount();

}

function updateQuantity(id, quantity){

quantity = parseInt(quantity);

const item = cart.find(item=>item.id===id);

if(item){

item.quantity = quantity;

if(item.quantity <= 0){

cart = cart.filter(product=>product.id !== id);

}

}

localStorage.setItem("cart", JSON.stringify(cart));

renderCart();

}

function removeItem(id){

cart = cart.filter(item=>item.id !== id);

localStorage.setItem("cart", JSON.stringify(cart));

renderCart();

}

function updateCartCount(){

const totalItems = cart.reduce((sum,item)=>{

return sum + item.quantity;

},0);

document.querySelectorAll("#cart-count").forEach(item=>{

item.innerText = totalItems;

});

}