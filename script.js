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
// Popup on GIF click
const digitalGif = document.getElementById("digital-gif");
digitalGif.addEventListener("click", () => {
  alert("Even through pixels, I felt safe with you.");
});

// Function to go to next page
function nextPage(url) {
  window.location.href = url;
}
// Popup on Gemini photo click
const geminiImg = document.getElementById("gemini-img");
geminiImg.addEventListener("click", () => {
  alert("Distance didn’t reduce anything. It only made us stronger.");
});
// Popup on Gemini photo click
const geminiImg = document.getElementById("gemini-img");
geminiImg.addEventListener("click", () => {
  alert("Distance didn’t reduce anything. It only made us stronger.");
});
function flipCard(card) {
  card.classList.toggle("flipped");
        }
// Tic Tac Toe hearts always win
const cells = document.querySelectorAll(".cell");
let moves = 0;

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (cell.innerHTML === "") {
      cell.innerHTML = "💜"; // Heart always appears
      moves++;
      if (moves === 3) {
        setTimeout(() => {
          alert("Game Over… You already won my heart 7 months ago 💜");
        }, 200);
      }
    }
  });
});
// Falling rose petals
const canvas = document.getElementById("petals-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const petals = [];
const petalCount = 50;

for (let i = 0; i < petalCount; i++) {
  petals.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 1 + 1,
  });
}

function drawPetals() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 182, 193, 0.7)"; // light pink petals
  ctx.beginPath();
  for (let i = 0; i < petalCount; i++) {
    const p = petals[i];
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  updatePetals();
}

function updatePetals() {
  for (let i = 0; i < petalCount; i++) {
    const p = petals[i];
    p.y += p.d;
    p.x += Math.sin(p.y * 0.01) * 2;
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawPetals);
}

drawPetals();
// YES / NO buttons
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

yesBtn.addEventListener("click", () => {
  alert("Happy 7 Months & Happy Valentine’s Day, Ashu. Thank you for being my safe place 💜");
  startConfetti();
});

noBtn.addEventListener("click", () => {
  alert("😌 Just kidding… of course you will stay!");
});

// Simple heart confetti
const confettiCanvas = document.getElementById("confetti-canvas");
const ctxC = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

const hearts = [];
const heartCount = 50;

for (let i = 0; i < heartCount; i++) {
  hearts.push({
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height,
    r: Math.random() * 10 + 5,
    d: Math.random() * 2 + 1
  });
}

function startConfetti() {
  function drawHearts() {
    ctxC.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    ctxC.fillStyle = "rgba(255, 0, 128, 0.8)"; // pink hearts
    ctxC.beginPath();
    for (let i = 0; i < heartCount; i++) {
      const h = hearts[i];
      ctxC.moveTo(h.x, h.y);
      ctxC.arc(h.x, h.y, h.r, 0, Math.PI * 2, true);
      h.y += h.d;
      h.x += Math.sin(h.y * 0.01) * 2;
      if (h.y > confettiCanvas.height) {
        h.y = -10;
        h.x = Math.random() * confettiCanvas.width;
      }
    }
    ctxC.fill();
    requestAnimationFrame(drawHearts);
  }
  drawHearts();
  }
