// console.log(1);

// setTimeout(() => console.log(2), 1000);
// console.log(3);

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "Alice", age: 25 };
//       const error = {
//         message: "Failed to fetch data",
//       };
//       resolve(data);
//     }, 1000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data); // { name: 'Alice', age: 25 }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// async function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "Alice", age: 25 };
//       resolve(data);
//     }, 1000);
//   });
// }

// async function main() {
//   try {
//     const data = await fetchData();
//     console.log(data); // { name: 'Alice', age: 25 }
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log("Finally, block executed");
//     console.log("This will always be logged");
//   }
// }

// main();

// async function fetchUserData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const user = await response.json();
//     console.log(user);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// fetchUserData();

// async function postData() {
//   const data = {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   };

//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST", // Метод запроса
//       headers: {
//         "Content-Type": "application/json", // Указываем тип содержимого
//       },
//       body: JSON.stringify(data), // Преобразуем объект в JSON
//     });

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const result = await response.json();
//     console.log("Success:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// postData();

//////////////////////////////////////////////////
/*
async function getData() {
  const data = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST", // Метод запроса
      headers: {
        "Content-Type": "application/json", // Указываем тип содержимого
      },
      body: JSON.stringify(data), // Преобразуем объект в JSON
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
*/
///////////////////////////////////////

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error, error"));
}
fetchData();
