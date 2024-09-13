const purchaseDetails = JSON.parse(localStorage.getItem('selectedProduct')) || {
    productName: "(Pon el nombre del producto aqui)",
    price: 0,
    quantity: 1
};

let currentLanguage = 'en';

const languageSelector = document.getElementById('language-selector');
languageSelector.addEventListener('change', (event) => {
    currentLanguage = event.target.value;
    updateLanguage();
});

function updateLanguage() {
    document.getElementById('checkout-title').textContent = translations[currentLanguage].checkout;
    document.getElementById('checkout-header').textContent = translations[currentLanguage].checkout;
    document.getElementById('step1-title').textContent = translations[currentLanguage].step1;
    document.getElementById('step2-title').textContent = translations[currentLanguage].step2;
    document.getElementById('step3-title').textContent = translations[currentLanguage].step3;
    document.getElementById('name').placeholder = translations[currentLanguage].fullName;
    document.getElementById('email').placeholder = translations[currentLanguage].email;
    document.getElementById('address').placeholder = translations[currentLanguage].address;
    document.getElementById('city').placeholder = translations[currentLanguage].city;
    document.getElementById('zip').placeholder = translations[currentLanguage].zipCode;
    document.getElementById('step1-next').textContent = translations[currentLanguage].next;
    document.getElementById('step2-next').textContent = translations[currentLanguage].next;
    document.getElementById('complete-purchase').textContent = translations[currentLanguage].completePurchase;
    document.getElementById('in-person-option').textContent = translations[currentLanguage].inPerson;
}


let orderNumber = localStorage.getItem('lastOrderNumber') || 1000;

function formatPrice(price) {
    return new Intl.NumberFormat('es-UY', { style: 'currency', currency: 'UYU' }).format(price);
}

function nextStep(step) {
    document.querySelectorAll('.step').forEach(el => el.style.display = 'none');
    document.getElementById(`step${step}`).style.display = 'block';
}


function isWithinWorkingHours() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
    const hour = now.getHours();
    const minute = now.getMinutes();

    // Convert current time to minutes since midnight
    const currentTimeInMinutes = hour * 60 + minute;

    // Check if it's Tuesday to Friday (2 to 5) and between 1:00 PM (13:00) and 5:00 PM (17:00)
    return dayOfWeek >= 2 && dayOfWeek <= 5 && currentTimeInMinutes >= 13 * 60 && currentTimeInMinutes < 17 * 60;
}

function completePurchase() {
    document.querySelectorAll('.step').forEach(el => el.style.display = 'none');
    
    if (isWithinWorkingHours()) {
        orderNumber++;
        localStorage.setItem('lastOrderNumber', orderNumber);
        
        document.getElementById('confirmation').innerHTML = `
            <h2 style="color: green;">✅</h2>
            <p>Purchase completed successfully.</p>
            <p>Order Number: ${orderNumber}</p>
            <p id="redirect-message">Redirecting to WhatsApp in <span id="countdown">5</span> seconds...</p>
        `;
        document.getElementById('confirmation').style.display = 'block';
        
        // Start countdown
        let countdown = 5;
        const countdownElement = document.getElementById('countdown');
        const countdownInterval = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                redirectToWhatsApp();
            }
        }, 1000);
    } else {
        document.getElementById('error').innerHTML = `
            <h2 style="color: red;">✖️</h2>
            <p>Sorry, purchases can only be made during working hours (Tuesday to Friday, 1:00 PM to 5:00 PM).</p>
            <button onclick="window.location.href='index.html'">Return to Shop</button>
        `;
        document.getElementById('error').style.display = 'block';
    }
}

function redirectToWhatsApp() {
    const phoneNumber = "59899685536"; // Uruguay country code (598) + 99 685 536
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    
    const message = encodeURIComponent(
        `New purchase details:\n` +
        `Order Number: ${orderNumber}\n` +
        `Product: ${purchaseDetails.productName}\n` +
        `Price: ${formatPrice(purchaseDetails.price)}\n` +
        `Quantity: ${purchaseDetails.quantity}\n` +
        `Date and Time: ${formattedDate}\n` +
        `Customer Name: ${document.getElementById('name').value}\n` +
        `Email: ${document.getElementById('email').value}\n` +
        `Address: ${document.getElementById('address').value}, ${document.getElementById('city').value}, ${document.getElementById('zip').value}`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
}

// Call updateLanguage() at the end of your script to set initial language
updateLanguage();