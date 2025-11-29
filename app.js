document.getElementById('magicButton').addEventListener('click', function() {
    const greeting = document.getElementById('greeting');
    greeting.textContent = 'Hello, Jules Capabilities!';
    greeting.style.color = '#007bff';

    this.textContent = 'Magic Happened!';
    this.disabled = true;
    this.style.backgroundColor = '#28a745';
});
