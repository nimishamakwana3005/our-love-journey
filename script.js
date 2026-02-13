// Typing effect
const text = "Welcome to our little universe...";
let i = 0;
const typingText = document.getElementById("typing-text");

function typeWriter() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // Adjust speed here
  }
}
typeWriter();

// Enter button goes to page1.html
const enterBtn = document.getElementById("enter-btn");
enterBtn.addEventListener("click", () => {
  window.location.href = "page1.html";
});
