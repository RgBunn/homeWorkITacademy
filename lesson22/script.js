const addBtn = document.getElementById("btn-add");
const getBtn = document.getElementById("btn-get");
const putBtn = document.getElementById("btn-put");
const delBtn = document.getElementById("btn-del");

addBtn.onclick = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  fetch("https://test-fire-d4ef1-default-rtdb.firebaseio.com/user.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

getBtn.onclick = () => {
  fetch("https://test-fire-d4ef1-default-rtdb.firebaseio.com/user.json")
    .then((response) => response.json())
    .then((data) => {
      const arr = Object.values(data).map((el, i) => {
        return {
          ...el,
          id: Object.keys(data)[i],
        };
      });
      console.log(arr);
    })
    .catch((error) => console.error("Error:", error));
};

putBtn.onclick = () => {
  const userId = "-OJOvTh80biwNWteHIyZ";
  const user = {
    firstName: "Jack",
    lastName: "Sparrow",
    age: 25,
  };

  fetch(
    `https://test-fire-d4ef1-default-rtdb.firebaseio.com/user/${userId}.json`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  )
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};
// "-OJOvTh80biwNWteHIyZ"
delBtn.onclick = () => {
  const userId = "-OJOvTh80biwNWteHIyZ";
  // const user = {
  //   firstName: "Jack",
  //   lastName: "Sparrow",
  //   age: 25,
  // };

  fetch(
    `https://test-fire-d4ef1-default-rtdb.firebaseio.com/user/${userId}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};
