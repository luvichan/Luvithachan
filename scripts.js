document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message, I'm very happy 'cuz your interact. ありがとう (๑>◡<๑).');
    // Form reset or additional logic can be added here
    this.reset();
});