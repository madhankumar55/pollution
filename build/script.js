// script.js

// Example: Highlight images when clicked
document.querySelectorAll('.image').forEach(image => {
    image.addEventListener('click', () => {
        image.style.backgroundColor = '#ffc107'; // Change to orange on click
        alert('You clicked an image!');
    });
});
