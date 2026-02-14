const messages = [
    "Kamu yakin?",
    "beneran??",
    "Apakah sangat yakin?",
    "Ayolah sayang...",
    "Tolong di pikir lagi!",
    "Kalo kamu bilang tak, Aku akan sangat sedih...",
    "Aku akan sangat sangat sedih...",
    "Aku akan benar benar sangat sangat sedih...",
    "Ok baik, aku akan berhenti bertanya...",
    "Hanya bercanda, sayang ayolah kumohon! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "/project/ya.html";
}