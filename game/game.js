const board = document.getElementById("game-board");
const giftButton = document.getElementById("gift-button");

/* DATA */
const emojis = ["❤️", "🥰", "😘", "🌹", "💐", "🎁"];
const cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

let firstCard = null;
let lockBoard = false;
let matchedCount = 0;

/* CREATE CARDS */
cards.forEach((value) => {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.value = value;
  card.addEventListener("click", () => flipCard(card));
  board.appendChild(card);
});

/* MULAI EFEK LOVE LABUH */
startFallingLove();

/* GAME LOGIC */
function flipCard(card) {
  if (lockBoard || card.classList.contains("flipped")) return;

  card.classList.add("flipped");
  card.textContent = card.dataset.value;

  if (!firstCard) {
    firstCard = card;
    return;
  }

  checkMatch(card);
}

function checkMatch(secondCard) {
  lockBoard = true;

  if (firstCard.dataset.value === secondCard.dataset.value) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchedCount += 2;
    resetTurn();

    if (matchedCount === cards.length) {
      setTimeout(() => {
        launchConfetti();
        giftButton.style.display = "block";
      }, 400);
    }
    return;
  }

  firstCard.style.animation = secondCard.style.animation = "shake 0.4s";

  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    firstCard.textContent = "";
    secondCard.textContent = "";
    resetTurn();
  }, 700);
}

function resetTurn() {
  firstCard = null;
  lockBoard = false;
}

/* CONFETTI LOVE */
function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    shapes: ["heart"],
    colors: ["#ff4081", "#d32f2f", "#fce4ec"],
  });
}

/* EFEK TOMBOL DAN REDIRECT */
function claimGift() {
  setTimeout(() => {
    window.location.href = "../valentine/vt.html";
  }, 200);
}

/* LOVE LABUH */
function startFallingLove() {
  setInterval(() => {
    const love = document.createElement("div");
    love.className = "falling-love";
    love.textContent = "❤️";
    love.style.left = Math.random() * 100 + "vw";
    love.style.animationDuration = Math.random() * 2 + 2 + "s";
    document.body.appendChild(love);

    setTimeout(() => {
      love.remove();
    }, 3000);
  }, 300);
}
