let cartCount = 0;
let cartTotal = 0;
const cartItems = [];

function addToCart(itemName, itemPrice) {
  cartCount++;
  cartTotal += itemPrice;
  document.getElementById('cart-count').innerHTML = cartCount;
  document.getElementById('cart-total').innerHTML = '₹' + cartTotal;
  
  // Check if item is already in cart
  const cartItem = cartItems.find(item => item.name === itemName);
  if (cartItem) {
    cartItem.quantity++;
    const cartItemEl = document.getElementById('cart-item-' + cartItem.id);
    cartItemEl.querySelector('.cart-item-quantity').innerHTML = cartItem.quantity;
  } else {
    // Add item to cart
    const newCartItem = {
      id: cartItems.length,
      name: itemName,
      price: itemPrice,
      quantity: 1
    };
    cartItems.push(newCartItem);
    const cartItemsEl = document.getElementById('cart-items');
    const cartItemEl = document.createElement('li');
    cartItemEl.id = 'cart-item-' + newCartItem.id;
    cartItemEl.innerHTML = `
      <span class="cart-item-name">${newCartItem.name}</span>
      <span class="cart-item-quantity">${newCartItem.quantity}</span>
      <span class="cart-item-price">₹${newCartItem.price}</span>
    `;
    cartItemsEl.appendChild(cartItemEl);
  }
}
