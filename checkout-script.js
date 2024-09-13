// Simulated product data (you should replace this with actual data passed from the shop page)
const purchaseDetails = {
    productName: "Sample Product",
    price: 29.99,
    quantity: 1
};

function nextStep(step) {
    document.querySelectorAll('.step').forEach(el => el.style.display = 'none');
    document.getElementById(`step${step}`).style.display = 'block';
}

function completePurchase() {
    document.querySelectorAll('.step').forEach(el => el.style.display = 'none');
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
}

function redirectToWhatsApp() {
    const phoneNumber = "59899685536"; // Uruguay country code (598) + 99 685 536
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    
    const message = encodeURIComponent(
        `New purchase details:\n` +
        `Product: ${purchaseDetails.productName}\n` +
        `Price: $${purchaseDetails.price.toFixed(2)}\n` +
        `Quantity: ${purchaseDetails.quantity}\n` +
        `Date and Time: ${formattedDate}\n` +
        `Customer Name: ${document.getElementById('name').value}\n` +
        `Email: ${document.getElementById('email').value}\n` +
        `Address: ${document.getElementById('address').value}, ${document.getElementById('city').value}, ${document.getElementById('zip').value}`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappUrl;
}
