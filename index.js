// Function to display messages
function displayMessages() {
    const messageContainer = document.getElementById("messageContainer");
    const messages = getMessages(); // Get messages from localStorage

    // Clear existing messages
    messageContainer.innerHTML = "";

    // Display each message
    messages.forEach((msg) => {
        const msgDiv = document.createElement("div");
        msgDiv.textContent = msg.message;
        messageContainer.appendChild(msgDiv);
    });
}

// Function to get messages from localStorage
function getMessages() {
    const messages = localStorage.getItem("messages");
    return messages ? JSON.parse(messages) : [];
}

// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();

    if (message) {
        const messages = getMessages();
        messages.push({ message, timestamp: Date.now() });

        // Save updated messages back to localStorage
        localStorage.setItem("messages", JSON.stringify(messages));

        // Clear input field
        messageInput.value = "";
    }
}

// Polling function to check for new messages every 3 seconds
setInterval(() => {
    displayMessages(); // Update messages every 3 seconds
}, 3000);

// Initial message display
displayMessages();
