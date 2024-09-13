

let products = [
    { 
        id: 1, 
        name: "Lote de Ropa", 
        description: "´100 Prendas Variadas.", 
        price: 3900,
        images: ["https://media.discordapp.net/attachments/1279989465993056288/1284254754779693137/IMG_20240913_111134.jpg?ex=66e5f6f1&is=66e4a571&hm=557079ef839fe31d7c1c29056a92f196af659609ffc7afed43a29d7258190bfb&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254755320893571/IMG_20240913_111138.jpg?ex=66e5f6f1&is=66e4a571&hm=a2b952eea5ae23789515d860e20cb8f62d36448e9b77d6b8ec9ef40a3e3bb9bb&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254755882926141/IMG_20240913_111320.jpg?ex=66e5f6f2&is=66e4a572&hm=03d784117565532a9a7040e4e65bf8ce4e031586f9440a47093fa21558308e6e&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254756457676883/IMG_20240913_111443.jpg?ex=66e5f6f2&is=66e4a572&hm=75081b2857344366e86f089a25461f460cc9d12f3cc8660d7a725b4311022316&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254757136892038/IMG_20240913_111419.jpg?ex=66e5f6f2&is=66e4a572&hm=d3109055eba3631ea2cf92632f656fe7c0ad197103272ea7a67040df633011a7&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254758135402599/IMG_20240913_111353.jpg?ex=66e5f6f2&is=66e4a572&hm=873a4f974969c7be5b59157e003befd7b8582cc3b3e90acca5bb9c8e1f61fe3c&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254758831390842/IMG_20240913_111526.jpg?ex=66e5f6f2&is=66e4a572&hm=208abd4782eb1ce1565294118ef6aa4bf3f57ab9dd7312782da734acdf6f7bd9&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254759481774232/IMG_20240913_111629.jpg?ex=66e5f6f2&is=66e4a572&hm=9b57ac5807cb084f7808f1f3a6ebc283b5bbd8873d3e18f02acce0b9b1b40de2&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254760068710481/IMG_20240913_111744.jpg?ex=66e5f6f3&is=66e4a573&hm=d869dd4ae061f5340d0da232c2069aeaad0cd34a11a9751a5a394146fcd756ee&=&format=webp&width=295&height=393"],
        status: "available"
    },
    { 
        id: 2, 
        name: "Lote de Blusas",
        description: "100 Blusas Nuevas.", 
        price: 1000,
        images: ["https://media.discordapp.net/attachments/1279989465993056288/1284287176477249608/IMG_20240913_161834.jpg?ex=66e61523&is=66e4c3a3&hm=6eff852595a10f9b7c16e98d584531cac2353380e4b0100788a313c58afcc28c&=&format=webp&width=295&height=393", "product2-2.jpg"],
        status: "available"
    },
    { 
        id: 3, 
        name: "", 
        description: "This is product 3", 
        price: 1650,
        images: ["product3-1.jpg"],
        status: "available"
    },
];

let baseProducts = [
    {
        id: 1,
        price: 3900,
        images: ["https://media.discordapp.net/attachments/1279989465993056288/1284254754779693137/IMG_20240913_111134.jpg?ex=66e5f6f1&is=66e4a571&hm=557079ef839fe31d7c1c29056a92f196af659609ffc7afed43a29d7258190bfb&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254755320893571/IMG_20240913_111138.jpg?ex=66e5f6f1&is=66e4a571&hm=a2b952eea5ae23789515d860e20cb8f62d36448e9b77d6b8ec9ef40a3e3bb9bb&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254755882926141/IMG_20240913_111320.jpg?ex=66e5f6f2&is=66e4a572&hm=03d784117565532a9a7040e4e65bf8ce4e031586f9440a47093fa21558308e6e&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254756457676883/IMG_20240913_111443.jpg?ex=66e5f6f2&is=66e4a572&hm=75081b2857344366e86f089a25461f460cc9d12f3cc8660d7a725b4311022316&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254757136892038/IMG_20240913_111419.jpg?ex=66e5f6f2&is=66e4a572&hm=d3109055eba3631ea2cf92632f656fe7c0ad197103272ea7a67040df633011a7&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254758135402599/IMG_20240913_111353.jpg?ex=66e5f6f2&is=66e4a572&hm=873a4f974969c7be5b59157e003befd7b8582cc3b3e90acca5bb9c8e1f61fe3c&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254758831390842/IMG_20240913_111526.jpg?ex=66e5f6f2&is=66e4a572&hm=208abd4782eb1ce1565294118ef6aa4bf3f57ab9dd7312782da734acdf6f7bd9&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254759481774232/IMG_20240913_111629.jpg?ex=66e5f6f2&is=66e4a572&hm=9b57ac5807cb084f7808f1f3a6ebc283b5bbd8873d3e18f02acce0b9b1b40de2&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284254760068710481/IMG_20240913_111744.jpg?ex=66e5f6f3&is=66e4a573&hm=d869dd4ae061f5340d0da232c2069aeaad0cd34a11a9751a5a394146fcd756ee&=&format=webp&width=295&height=393"],
    },
    {
        id: 2,
        price: 1000,
        images: ["https://media.discordapp.net/attachments/1279989465993056288/1284287176477249608/IMG_20240913_161834.jpg?ex=66e61523&is=66e4c3a3&hm=6eff852595a10f9b7c16e98d584531cac2353380e4b0100788a313c58afcc28c&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284287177135489156/IMG_20240913_161850.jpg?ex=66e61523&is=66e4c3a3&hm=d451f61f7778827b100b69d16b421e8c93045f097d034b82a4662c9b74052c5d&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284287177915633785/IMG_20240913_161915.jpg?ex=66e61524&is=66e4c3a4&hm=38dc3441c041cc86df292ee08a007366729c4160f45247efe1b30bf0e1c687dd&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284287178804953110/IMG_20240913_162004.jpg?ex=66e61524&is=66e4c3a4&hm=426f2da5b46a6f6854e905b6207644abfe1b5a7805df917828569e5c1c342d56&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284287179517853766/IMG_20240913_161953.jpg?ex=66e61524&is=66e4c3a4&hm=463344f78e157e5141d86c122ec55bab017107539e22f639206786e2dcd8ab74&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284287180465897573/IMG_20240913_161929.jpg?ex=66e61524&is=66e4c3a4&hm=ec8a9985f358afe68287283bde8c2143a0e3d705c297fceec8f9233877016ae5&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284287181250101249/IMG_20240913_162943.jpg?ex=66e61524&is=66e4c3a4&hm=0d0287057d0a47a1e58e2e807fe123164bce276a4aecfce312044b2e590ad30a&=&format=webp&width=295&height=393", "https://media.discordapp.net/attachments/1279989465993056288/1284287181896286229/IMG_20240913_165754.jpg?ex=66e61525&is=66e4c3a5&hm=494d25933a29ebc6167994f222cb89dcc5d51ef5872d68a547ff611d20037040&=&format=webp&width=295&height=393"],
    },
    {
        id: 3,
        price: 1650,
        images: ["product3-1.jpg"],
    },
];

const productList = document.getElementById("product-list");
const modal = document.getElementById("product-modal");
const closeBtn = document.getElementsByClassName("close")[0];
const buyButton = document.getElementById("buy-button");
let currentLanguage = 'es';


const languageSelector = document.getElementById('language-selector');
languageSelector.addEventListener('change', (event) => {
    currentLanguage = event.target.value;
    updateLanguage();
});


function updateProducts() {
    products = baseProducts.map((product, index) => ({
        ...product,
        name: translations[currentLanguage].products[index].name,
        description: translations[currentLanguage].products[index].description,
        status: translations[currentLanguage].products[index].status
    }));
}


function clearProductList() {
    productList.innerHTML = '';
}


function updateLanguage() {
    document.getElementById('shop-title').textContent = translations[currentLanguage].title;
    document.getElementById('buy-button').textContent = translations[currentLanguage].buyNow;
    
    updateProducts();
    clearProductList();
    displayProducts();

    // Update product statuses in the modal if it's open
    const modalStatus = document.getElementById('modal-product-status');
    if (modalStatus) {
        const product = products.find(p => p.name === document.getElementById('modal-product-name').textContent);
        if (product) {
            modalStatus.innerHTML = getStatusDisplay(product.status);
        }
    }
}

// ... (rest of your existing script.js code) ...

function getStatusDisplay(status) {
    switch(status) {
        case "available":
            return `<span class="status-dot available"></span> ${translations[currentLanguage].available}`;
        case "unavailable":
            return `<span class="status-dot unavailable"></span> ${translations[currentLanguage].unavailable}`;
        case "out_of_stock":
            return `<span class="status-dot out-of-stock"></span> ${translations[currentLanguage].outOfStock}`;
        default:
            return '';
    }
}

// Call updateLanguage() at the end of your script to set initial language
updateLanguage();


function formatPrice(price) {
    return new Intl.NumberFormat('es-UY', { style: 'currency', currency: 'UYU' }).format(price);
}

function getStatusDisplay(status) {
    switch(status) {
        case "available":
            return '<span class="status-dot available"></span> Available';
        case "unavailable":
            return '<span class="status-dot unavailable"></span> Unavailable';
        case "out-of-stock":
            return '<span class="status-dot out-of-stock"></span> out-of-stock';
        default:
            return '';
    }
}

function displayProducts() {
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>${formatPrice(product.price)}</p>
            <p class="status">${getStatusDisplay(product.status)}</p>
        `;
        productElement.addEventListener("click", () => showProductDetails(product));
        productList.appendChild(productElement);
    });
}

function showProductDetails(product) {
    document.getElementById("modal-product-name").textContent = product.name;
    document.getElementById("modal-product-description").textContent = product.description;
    document.getElementById("modal-product-price").textContent = formatPrice(product.price);
    document.getElementById("modal-product-status").innerHTML = getStatusDisplay(product.status);
    
    const imageGallery = document.getElementById("modal-image-gallery");
    imageGallery.innerHTML = "";
    product.images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = product.name;
        imgElement.classList.add("gallery-image");
        imageGallery.appendChild(imgElement);
    });
    
    updateBuyButton(product.status);
    
    modal.style.display = "block";
}

function updateBuyButton(status) {
    switch(status) {
        case "disponible":
            buyButton.textContent = "Comprar Ahora";
            buyButton.disabled = false;
            break;
        case "indisponible":
            buyButton.textContent = "Este producto al momento no está disponible";
            buyButton.disabled = true;
            break;
        case "agotado":
            buyButton.textContent = "Actualmente, no esta en stock ahora este producto."; 
            buyButton.disabled = true;
            break;
    }
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
    if (!buyButton.disabled) {
        const selectedProduct = {
            productName: document.getElementById("modal-product-name").textContent,
            price: parseFloat(document.getElementById("modal-product-price").textContent.replace(/[^\d,-]/g, '').replace(',', '.')),
            quantity: 1
        };
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        window.location.href = "checkout.html";
    }
}
updateLanguage();