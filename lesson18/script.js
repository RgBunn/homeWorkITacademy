const userName = document.querySelector("#username");
const fullName = document.querySelector("#fullname");
//
const saveBtn = document.querySelector("#save");
const clearBtn = document.querySelector("#clear");

const userNameInfo = document.querySelector("#last-username");
const userFullNameInfo = document.querySelector("#last-fullname");
const userDateInfo = document.querySelector("#input-date");

saveBtn.onclick = () => {
  const date = new Date();
  const userInfo = {
    id: date.getTime(),
    username: userName.value,
    fullName: fullName.value,
  };
  const arr = [];
  const users = sessionStorage.getItem("users");
  if (users) {
    arr.push(...JSON.parse(users));
  }
  arr.push(userInfo);
  //   localStorage.setItem("lastUser", JSON.stringify(userInfo));
  sessionStorage.setItem("users", JSON.stringify(arr));
  console.log(userInfo);
  console.log(JSON.stringify(userInfo));
  getLastUser();
};
function getLastUser() {
  //   const lastUser = localStorage.getItem("lastUser");
  //   const lastUser = sessionStorage.getItem("users");
  //   if (lastUser) {
  //     const userInfo = JSON.parse(lastUser);
  //     userNameInfo.innerText = userInfo.username;
  //     userFullNameInfo.innerText = userInfo.fullName;
  //     userDateInfo.innerText = new Date(userInfo.id).toLocaleString();
  //   } else {
  //     userNameInfo.innerText = "No saved data";
  //     userFullNameInfo.innerText = "No saved data";
  //     userDateInfo.innerText = "No saved data";
  //   }
  //   console.log("Last user info:", lastUser);

  const users = sessionStorage.getItem("users");
  if (users) {
    document.querySelector(".last-user").innerHTML = "";
    const arr = JSON.parse(users);
    arr.forEach((user) => {
      const div = document.createElement("div");

      const p1 = document.createElement("span");
      const p2 = document.createElement("span");
      const p3 = document.createElement("span");

      p1.innerText = user.username + " ";
      p2.innerText = user.fullName + " ";
      p3.innerText = new Date(user.id).toLocaleString();

      div.append(p1, p2, p3);
      document.querySelector(".last-user").appendChild(div);
    });
  }
}
getLastUser();
// function getLastUser() {
//   const lastUser = localStorage.getItem("lastUser");
//   if (lastUser) {
//     const userInfo = JSON.parse(lastUser);
//     userNameInfo.innerText = userInfo.username;
//     userFullNameInfo.innerText = userInfo.fullName;
//     userDateInfo.innerText = new Date(userInfo.id).toLocaleString();
//   } else {
//     userNameInfo.innerText = "No saved data";
//     userFullNameInfo.innerText = "No saved data";
//     userDateInfo.innerText = "No saved data";
//   }
// }

// getLastUser();

// clearBtn.onclick = () => {
// //   sessionStorage.clear();
// };

clearBtn.onclick = () => {
  //   sessionStorage.removeItem("lastUser");
  sessionStorage.clear();
  document.querySelector(".last-user").innerHTML = "";
};
// clearBtn.onclick = () => {
//   localStorage.clear();
// };
