
const products = [
    { id: 1, name: "Product 1", description: "This is product 1", price: 19.99 },
    { id: 2, name: "Product 2", description: "This is product 2", price: 29.99 },
    { id: 3, name: "Product 3", description: "This is product 3", price: 39.99 },
];

const productList = document.getElementById("product-list");
const modal = document.getElementById("product-modal");
const closeBtn = document.getElementsByClassName("close")[0];
const buyButton = document.getElementById("buy-button");

function displayProducts() {
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
        `;
        productElement.addEventListener("click", () => showProductDetails(product));
        productList.appendChild(productElement);
    });
}

function showProductDetails(product) {
    document.getElementById("modal-product-name").textContent = product.name;
    document.getElementById("modal-product-description").textContent = product.description;
    document.getElementById("modal-product-price").textContent = `$${product.price.toFixed(2)}`;
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

buyButton.onclick = function() {
    window.location.href = "checkout.html";
}

displayProducts();
