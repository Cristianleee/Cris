function showCard() {
    document.getElementById("card").classList.remove("hidden");
}

function showMessage() {
    document.getElementById("message").classList.remove("hidden");
}

function showPrediction() {
    document.getElementById("prediction").classList.remove("hidden");
}

function generatePrediction() {
    const predictions = [
        "Сегодня тебя ждёт сюрприз!",
        "Любовь уже рядом!",
        "Скоро ты получишь приятное сообщение!",
        "Твой день будет наполнен романтикой!"
    ];
    let randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    document.getElementById("result").textContent = randomPrediction;
}

function startQuest() {
    document.getElementById("quest").classList.remove("hidden");
}

function checkAnswer(choice) {
    let resultText;
    if (choice === "шоколад") {
        resultText = "Правильно! Купидон любит шоколад! 💖 Теперь выбери, куда идти на свидание: 🌅 Пляж или 🎡 Аттракционы?";
    } else {
        resultText = "Хороший выбор, но Купидон предпочитает шоколад!";
    }
    document.getElementById("quest-result").textContent = resultText;
}

function toggleMusic() {
    let music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}