alert("Welcome to my website!");
function displayComment() {
    // Get user input
    const userInput = document.getElementById('userComment').value;

    // Sanitize the input using DOMPurify
    const cleanInput = DOMPurify.sanitize(userInput);

    // Display the sanitized input
    document.getElementById('commentDisplay').innerHTML = cleanInput;
}