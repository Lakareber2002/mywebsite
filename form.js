function validateForm() {
    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate name
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        return false; // Prevent form submission
    }

    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Basic email pattern
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        return false; // Prevent form submission
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        return false; // Prevent form submission
    }

    // Validate message
    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required.";
        return false; // Prevent form submission
    }

    // If all validations pass
    return true; // Allow form submission
}
