document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); 
            } else {
                entry.target.classList.remove("show"); 
            }
        });
    }, {
        threshold: 0.1 
    });

    sections.forEach((section) => observer.observe(section));
});
document.getElementById("order-form").addEventListener("submit", (event) => {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value;
    const pricePerBottle = 40; 
    const totalPrice = pricePerBottle * quantity; 

    const formattedPrice = `EGP${totalPrice.toFixed(2)}`;

    alert(
        `Thank you, ${name}!\n\nYour order for ${quantity} bottle(s) of SurgeX has been placed.\nWe will send a confirmation to ${email}.\n\nShipping to:\n${address}\n\nTotal Price: ${formattedPrice}`
    );

    document.getElementById("order-form").reset();
    
    document.getElementById("total").value = formattedPrice;
});

document.getElementById("quantity").addEventListener("change", function() {
    const quantity = this.value;
    const pricePerBottle = 40;
    const totalPrice = pricePerBottle * quantity;
    const formattedPrice = `EGP${totalPrice.toFixed(2)}`;
    
    document.getElementById("total").value = formattedPrice; 
});
