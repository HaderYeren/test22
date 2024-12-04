
const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
let currentKeyIndex;
const keyEl = document.getElementById("key");
const newGameButton = document.getElementById("new-game");
const startNewGame = () => {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    keyEl.textContent = keys[currentKeyIndex];
    PNotify.notice({
        text: "Гра почалась! Натисни правильну клавішу.",
    });
};
document.addEventListener("keydown", (e) => {
    if (e.key === keys[currentKeyIndex]) {
        PNotify.success({
            text: "Правильно!",
        });
        startNewGame();
    } else {
        PNotify.error({
            text: `Помилка! Натиснута клавіша: "${e.key}".`,
        });
    }
});
newGameButton.addEventListener("click", startNewGame);

startNewGame();
