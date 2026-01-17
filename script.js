const message = document.getElementById("message");
const countText = document.getElementById("count");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");

let count = 0;

plusBtn.addEventListener("click", function () {
    count++;
    countText.textContent = count;

    if (count >= 5) {
        message.textContent = "増えてきた!";
    }
});

minusBtn.addEventListener("click", function () {
    count--;
    countText.textContent = count;

    if (count < 0) {
      message.textContent = "マイナスだよ";
    }
});

resetBtn.addEventListener("click", function () {
    count = 0;
    countText.textContent = count;
    message.textContent = "リセットされた";
});