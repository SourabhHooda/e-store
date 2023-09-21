// Get all add-to-cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add click event listener to each button
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('Product added to the cart!');
    });
});
