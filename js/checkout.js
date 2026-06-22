const checkoutForm = document.getElementById("checkout-form");

if(checkoutForm){

checkoutForm.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const address = document.getElementById("address").value.trim();

if(
name === "" ||
email === "" ||
phone === "" ||
address === ""
){

alert("Please fill all fields");
return;

}

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please enter a valid email address");

return;

}

const phonePattern =
/^[0-9]{10,15}$/;

if(!phonePattern.test(phone)){

alert("Enter a valid phone number");

return;

}

document
.getElementById("success-message")
.classList.remove("d-none");

localStorage.removeItem("cart");

checkoutForm.reset();

setTimeout(()=>{

window.location.href = "index.html";

},3000);

});

}