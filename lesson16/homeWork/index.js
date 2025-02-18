//   Задача 1:
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error", error));
}
fetchData();

//   Задача 2:
async function sendData() {
  const data = {
    title: "Data I'm inserting",
    body: "This is body",
    userId: 1,
  };
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("error");
    }
    const result = await response.json();
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}
sendData();

//   Задача 3:
function catchError() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
}
catchError();
