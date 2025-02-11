const tBody = document.querySelector("#tbody");
const score = JSON.parse(localStorage.getItem("score"));
const newGame = document.querySelector("#again");
const newPlayer = document.querySelector("#new");
tBody.innerHTML = " ";

score.sort((a, b) => (a.score - b.score ? 1 : -1)).slice(0, 10);

score.forEach((data) => {
  const tr = document.createElement("tr");
  const tdName = document.createElement("td");
  tdName.innerText = data.name;
  const tdScore = document.createElement("td");
  tdScore.innerText = data.score;
  tr.append(tdName, tdScore);
  tBody.append(tr);
});

newGame.onclick = () => {
  window.location.href = "/lesson19/NumbersGame/game/game.html";
};
newPlayer.onclick = () => {
  sessionStorage.clear();
  window.location.href = "/lesson19/NumbersGame/gameMain.html";
};
