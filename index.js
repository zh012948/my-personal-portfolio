// Select the form element
const form = document.querySelector('form');

// Add an event listener for the form's submit event
form.addEventListener('submit', () => {
    // Clear the input fields
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
});


