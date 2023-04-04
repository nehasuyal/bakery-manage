
      // Get all the dropdown buttons
      var dropdowns = document.getElementsByClassName("dropbtn");

      // Loop through the dropdown buttons and add a click event listener to each one
      for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("click", function() {
          // Toggle the display of the dropdown content for the clicked button
          this.nextElementSibling.classList.toggle("show");
        });
      }

      // Close the dropdown menu if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          for (var i = 0; i < dropdowns.length; i++) {
            var dropdown = dropdowns[i];
            if (dropdown.classList.contains('show')) {
              dropdown.classList.remove('show');
            }
          }
        }
      }
      // JavaScript code


  let cartTotal = 0;
  const cartItems = [];
  // Function to remove an item from the cart
  function removeItemFromCart(index) {
    // Remove the item from the cart array
    cartItems.splice(index, 1);
    
    // Update the cart UI
    updateCartUI();
  }

  // Function to update the cart UI
  function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    for (let i = 0; i < cartItems.length; i++) {
      const item = document.createElement('div');
      item.textContent = `${cartItems[i].name} x ${cartItems[i].quantity} - ₹${cartItems[i].price * cartItems[i].quantity}`;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', function() {
        // Call the removeItemFromCart function with the index of the item
        removeItemFromCart(i);
      });

      item.appendChild(removeButton);
      cartItemsElement.appendChild(item);
      updateBillUI()
    }

    // Update the cart total
    cartTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      cartTotal += cartItems[i].price * cartItems[i].quantity;
    }

    const cartTotalElement = document.getElementById('cart-total');
    cartTotalElement.textContent = cartTotal;
     
  }
  function updateBillUI() {
    console.log("updateBillUI called");
    const cartItemsBillElement = document.getElementById('cart-items-bill');
    cartItemsBillElement.innerHTML = '';
    const cartItemsPriceElement = document.getElementById('cart-items-price');
    cartItemsPriceElement.innerHTML = '';
  
    for (let i = 0; i < cartItems.length; i++) {
      const item = document.createElement('div');
      item.textContent = `${cartItems[i].name} x ${cartItems[i].quantity}`;
  
      const price = document.createElement('div');
      price.textContent = `₹${cartItems[i].price * cartItems[i].quantity}`;
  
      item.appendChild(price);
      cartItemsBillElement.appendChild(item);
    }
  
  // Calculate the cart total
let cartTotal = 0;
for (let i = 0; i < cartItems.length; i++) {
  cartTotal += cartItems[i].price * cartItems[i].quantity;
}

// Apply discount if cart total is above or equal to 2500
let discount = 0;
if (cartTotal >= 2500) {
  discount = 250;
}

// Calculate the discounted cart total
let discountedCartTotal = cartTotal - discount;

// Update the bill total with discount
const cartTotalBillElement = document.getElementById('cart-total-bill');
cartTotalBillElement.textContent = `₹${discountedCartTotal}`;

  
  
    const discountElement = document.getElementById('discount-amount');
    if (discount > 0) {
      discountElement.textContent = `₹${discount} discount applied`;
      console.log("Discount applied!");
    } else {
      discountElement.textContent = `DISCOUNT ONLY APPLY FOR ABOVE ₹${2500}`
      console.log("No discount applied.");
    }
    

    
  }
  
  

  // Function to add an item to the cart
  function addToCart(productName, productPrice) {
    // Check if the product is already in the cart
    let itemAlreadyInCart = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].name === productName) {
        // Update the quantity of the item in the cart
        cartItems[i].quantity++;
        itemAlreadyInCart = true;
        break;
      }
    }

    // If the item is not already in the cart, add it
    if (!itemAlreadyInCart) {
      cartItems.push({
        name: productName,
        price: productPrice,
        quantity: 1
      });
    }

    // Update the cart UI
    updateCartUI();
      // Prevent the dropdown from closing
      event.stopPropagation();
  }
  const checkoutBtn = document.getElementById('checkout-btn');
  const modalBg = document.querySelector('.modal-bg');
  const modal = document.querySelector('.modal');
  

  checkoutBtn.addEventListener('click', () => {
    modalBg.classList.add('show');
  });

  modalBg.addEventListener('click', (event) => {
    if (event.target === modalBg) {
      modalBg.classList.remove('show');
    }
  });
  const continueBtn = document.getElementById('cont');
  modalBg.addEventListener('submit',function(event) {
   modalBg.style.display = 'none';

  })


  const checkoutForm = document.querySelector('#checkout-form');
const bill = document.querySelector('#bill');


checkoutForm.addEventListener('submit', function(event) {


  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the form data
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#Phone').value;
  const address = document.querySelector('#address').value;

  // Update the bill with the form data
  document.querySelector('#user-name').textContent = `. ${name}`;
  document.querySelector('#user-email').textContent = `. ${email}`;

  // Update the bill with the cart data
  const cartItemsBill = document.querySelector('#cart-items-bill');
  cartItemsBill.innerHTML = '';
  for (let i = 0; i < cartItems.length; i++) {
    const item = document.createElement('div');
    item.textContent = `${cartItems[i].name} x ${cartItems[i].quantity} - ₹${cartItems[i].price * cartItems[i].quantity}`;
    cartItemsBill.appendChild(item);
  }
  // Check if the cart total is 2500 or more, and apply the discount if it is




  // Update the bill total
  document.querySelector('#cart-total-bill').textContent = `. ₹${cartTotal}`;

  // Show the bill
  bill.classList.add('show');

  // Store the data in the database
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'store-data.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  };
  xhr.onerror = function() {
    console.error(xhr.statusText);
  };
  xhr.send(`name=${name}&email=${email}&phone=${phone}&address=${address}`);
    // Hide the form
   
});


const continueButton = document.querySelector('#cont');
continueButton.addEventListener('click', function() {
  bill.classList.remove('show1');
});

const backButton = document.querySelector('.btn2');
const billElement = document.querySelector('#bill');

backButton.addEventListener('click', function() {
  billElement.classList.add('show1');
});
if (cartTotal >= 2500) {
  const discount = 250;
  const cartDiscountElement = document.getElementById('discount-amount');
  cartDiscountElement.textContent = `₹${discount} discount applied`;
  cartTotalElement.textContent = cartTotal - discount;
} else {
  const cartDiscountElement = document.getElementById('discount-amount');
  cartDiscountElement.textContent = '';
}
function displayConfirmation() {
  // Get the user's name, email, and address from the form
  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  const userAddress = document.getElementById("address").value;

  // Get the items and total price from the bill summary section
  const itemsContainer = document.getElementById("cart-items-bill");
  const itemDivs = itemsContainer.querySelectorAll("div");
  const items = [];
  for (let i = 0; i < itemDivs.length; i++) {
    items.push(itemDivs[i].textContent);
  }
  const itemsList = items.join("\n");
  const totalPrice = document.getElementById("cart-total-bill").textContent;

  // Construct the confirmation message
  const confirmationMessage = `Thank you ${userName} for your order!\nYour order of ${itemsList} has been confirmed.\nThe total price is ${totalPrice}.\nWe will deliver it to ${userAddress} shortly.\nYour order details have been sent to ${userEmail}.`;


  // Display the confirmation message in a pop-up window
  alert(confirmationMessage);
}

