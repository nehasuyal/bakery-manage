// Define cart items array
let cartItems = [];

// Get cart elements
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Add event listener to each item's 'Add to cart' button
document.querySelectorAll('li button').forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', () => {
    // Get item name and price
    const itemName = addToCartButton.parentNode.querySelector('span.item-name').textContent;
    const itemPrice = Number(addToCartButton.parentNode.querySelector('span.item-price').textContent.split('$')[1]);

    // Add item to cart items array
    cartItems.push({
      name: itemName,
      price: itemPrice
    });

    // Update cart
    updateCart();
  });
});

// Function to update cart
function updateCart() {
  // Clear cart items list
  cartItemsList.innerHTML = '';

  // Add cart items to list
  cartItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.addEventListener('click', () => {
      // Remove item from cart items array
      cartItems = cartItems.filter((cartItem) => {
        return cartItem.name !== item.name;
      });

      // Update cart
      updateCart();
    });
    li.appendChild(removeButton);
    cartItemsList.appendChild(li);
  });

  // Update cart total
  const total = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);
  cartTotal.textContent = total.toFixed(2);
}
