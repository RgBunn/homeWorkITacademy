const userName = document.querySelector("#name");
const startGameBtn = document.querySelector("#btn");

startGameBtn.onclick = (event) => {
  event.preventDefault();
  if (userName.value) {
    sessionStorage.setItem("username", userName.value);
    window.location.href = "/lesson19/NumbersGame/game/game.html";
  }
};
