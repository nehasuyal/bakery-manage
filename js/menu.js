let cart = [];
let cartCount = 0;
let cartTotal = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
cartCount++;
cartTotal += itemPrice;
updateCart();
}

function updateCart() {
    document.getElementById("cart-count").innerHTML = cartCount;
document.getElementById("cart-total").innerHTML = "₹" + cartTotal;
}
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
cartCount++;
cartTotal += itemPrice;
updateCart();
updateDropdownCart();
}

function updateDropdownCart() {
    let dropdownCart = document.getElementById("cart-items");
dropdownCart.innerHTML = "";
cart.forEach(item => {
    let li = document.createElement("li");
let span = document.createElement("span");
span.innerHTML = item.name + " - ₹" + item.price;
li.appendChild(span);
dropdownCart.appendChild(li);
});
document.getElementById("cart-total-dropdown").innerHTML = cartTotal;
}

/* Close the dropdown if the user clicks outside of it */
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
for (let i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
}
}
}
}

/* Open the dropdown when the user clicks on the cart button */
document.querySelector(".dropbtn").addEventListener("click", function() {
    document.querySelector(".dropdown-content").classList.toggle("show");
});
function showSuccessMessage() {
var message = document.getElementById("success-message");
message.style.display = "block";
setTimeout(function() {
    message.style.display = "none";
}, 2000); // hide the message after 2 seconds
}
