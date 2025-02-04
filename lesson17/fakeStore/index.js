// https://fakestoreapi.com/
const divItems = document.querySelector(".items");
const btnDownload = document.querySelector("#download");

btnDownload.onclick = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  console.log(response);

  const products = await response.json();
  console.log(products);

  products.forEach((product) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    const h3 = document.createElement("h3");
    h3.classList.add("title");
    h3.innerText = product.title;
    const img = document.createElement("img");
    img.classList.add("img");
    img.src = product.image;
    const category = document.createElement("p");
    category.classList.add("category");
    category.innerText = product.category;
    const price = document.createElement("p");
    price.classList.add("price");
    // price.innerText = product.price;
    price.innerText = `$${product.rating.count}`;
    const description = document.createElement("span");
    description.classList.add("description");
    description.innerText = product.description.slice(0, 50) + "...";
    const btn = document.createElement("button");
    btn.innerText = "Info";
    btn.onclick = () => {
      console.log(product.id, product.title);
    };
    //     // const itemDiv=document.createElement('div')
    itemDiv.append(h3, img, category, price, description, btn);
    divItems.appendChild(itemDiv);
  });
};

// };
