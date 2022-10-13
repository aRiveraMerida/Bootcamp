const myInput = document.querySelector("#myInput");

//GET

const getProducts = async () => {
  const productsData = await fetch("http://localhost:8080/products");
  const productsJson = await productsData.json();
  console.log(productsJson);
};

getProducts();

//POST -> Insertar un nuevo registro

const postProduct = async (newName, newPrice) => {
  fetch("http://localhost:8080/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newName,
      price: newPrice,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};

const postBtn = document.querySelector("#postProduct");
postBtn.addEventListener("click", () => postProduct(myInput.value, 4));

//PUT -> Modificar registros

const putProduct = async (id, newName, newPrice) => {
  fetch(`http://localhost:8080/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newName,
      price: newPrice,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};

const putBtn = document.querySelector("#putProduct");
putBtn.addEventListener("click", () => putProduct(2, "Cerveza", 1.2));

const deleteProduct = async () => {
  fetch("http://localhost:8080/products/2", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};

const deleteBtn = document.querySelector("#deleteProduct");
deleteBtn.addEventListener("click", () => deleteProduct());

//CON VITE PODEIS INSTALAR uuid, que al ejecutar la función importada nos genera ids unicos
