document.getElementById('send-button').addEventListener('click', function() {
    let userInput = document.getElementById('chat-input').value;
    if (userInput.trim() !== "") {
        appendMessage('user', userInput);
        document.getElementById('chat-input').value = ''; // Clear input field

        // Simulate bot response
        setTimeout(() => {
            appendMessage('bot', generateBotResponse(userInput));
        }, 1000);
    }
});

function appendMessage(sender, text) {
    let chatWindow = document.getElementById('chat-window');
    let message = document.createElement('div');
    message.classList.add('message', sender);
    message.textContent = text;
    chatWindow.appendChild(message);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the bottom
}

function generateBotResponse(userInput) {
    // Simple bot response logic (for demonstration purposes)
    return `You said: ${userInput}`;
}
