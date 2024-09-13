  const products = [
      { 
          id: 1, 
          name: "Product 1", 
          description: "This is product 1", 
          price: 19.99,
          images: ["product1-1.jpg", "product1-2.jpg", "product1-3.jpg"]
      },
      { 
          id: 2, 
          name: "Product 2", 
          description: "This is product 2", 
          price: 29.99,
          images: ["product2-1.jpg", "product2-2.jpg"]
      },
      { 
          id: 3, 
          name: "Product 3", 
          description: "This is product 3", 
          price: 39.99,
          images: ["product3-1.jpg"]
      },
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
              <img src="${product.images[0]}" alt="${product.name}" class="product-image">
              <h3>${product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
          `;
          productElement.addEventListener("click", () => showProductDetails(product));
          productList.appendChild(productElement);
      });
  }

  function showProductDetails(product) {
      document.getElementById("modal-product-name").textContent = product.name;
      document.getElementById("modal-product-description").textContent = product.description;
      document.getElementById("modal-product-price").textContent = `${product.price.toFixed(2)}`;
    
      const imageGallery = document.getElementById("modal-image-gallery");
      imageGallery.innerHTML = "";
      product.images.forEach(image => {
          const imgElement = document.createElement("img");
          imgElement.src = image;
          imgElement.alt = product.name;
          imgElement.classList.add("gallery-image");
          imageGallery.appendChild(imgElement);
      });
    
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
      const selectedProduct = {
          productName: document.getElementById("modal-product-name").textContent,
          price: parseFloat(document.getElementById("modal-product-price").textContent),
          quantity: 1
      };
      localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
      window.location.href = "checkout.html";
  }

  displayProducts();
