const num = document.querySelector("#number");
const checkBtn = document.querySelector("#check");
const errorMessage = document.querySelector("#error");

const random = Math.floor(Math.random() * 5) + 1;
let count = 1;
checkBtn.onclick = () => {
  if (random === +num.value) {
    errorMessage.style.display = "none";
    addScore();
    return;
  } else if (random < +num.value) {
    errorMessage.textContent = "Your number is too high!";

    errorMessage.style.display = "block";
  } else if (random > +num.value) {
    errorMessage.textContent = "Your number is too low!";
    errorMessage.style.display = "block";
  }
  count++;
};

function addScore() {
  const score = localStorage.getItem("score");
  const user = {
    name: sessionStorage.getItem("username"),
    score: count,
  };
  const table = [];
  table.push(user);
  if (score) {
    table.push(...JSON.parse(score));
  }
  localStorage.setItem("score", JSON.stringify(table));
  window.location.href = "../score/score.html";
}
