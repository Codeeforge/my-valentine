/* ==========================
   FLOATING HEARTS EFFECT
========================== */
function spawnHeart() {
    const heart = document.createElement("div");
    heart.textContent = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.opacity = 0.7;
    heart.style.animation = "drop 4s linear";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}

setInterval(spawnHeart, 300);

/* ==========================
   CONFETTI EFFECT
========================== */
function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        shapes: ['heart'],
        colors: ['#ff4081', '#d32f2f', '#fce4ec']
    });
}

/* ==========================
   EFEK TOMBOL DAN LAUNCH CONFETTI
========================== */
function claimGift() {
    launchConfetti();
}

/* ==========================
   ANIMATIONS DEFINITIONS
========================== */
const style = document.createElement("style");
style.textContent = `

/* For floating hearts */
@keyframes drop {
    to { transform: translateY(110vh); opacity: 0; }
}

/* For confetti (tidak digunakan lagi) */
@keyframes confettiFall {
    to { transform: translateY(120vh) rotate(360deg); opacity: 0; }
}
`;

document.head.appendChild(style);

