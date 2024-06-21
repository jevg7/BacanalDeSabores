// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de una función para manejar la interacción
    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            window.location.href = 'menu.html';
        });
    }

    // Validación del formulario de contacto
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario para la validación
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const subject = document.querySelector('#subject').value.trim();
            const message = document.querySelector('#message').value.trim();

            if (!name || !email || !subject || !message) {
                alert('Todos los campos son obligatorios.');
            } else if (!validateEmail(email)) {
                alert('Por favor, ingresa un correo electrónico válido.');
            } else {
                // Si la validación pasa, enviar el formulario (puedes hacer un envío real aquí)
                alert('Mensaje enviado correctamente.');
                contactForm.submit(); // Enviar el formulario
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Gestión del carrito de compras
    const cart = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dish = button.dataset.dish;
            addToCart(dish);
        });
    });

    function addToCart(dish) {
        cart.push(dish);
        alert(`${dish} ha sido añadido al carrito.`);
        updateCart();
    }

    function updateCart() {
        const cartElement = document.querySelector('.cart');
        cartElement.innerHTML = `Carrito (${cart.length})`;
    }

    // Inicializar el carrito en la carga de la página
    updateCart();
});
