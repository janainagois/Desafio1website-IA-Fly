// Handle Login Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            if (username && password) {
                alert("Login successful!");
                window.location.href = "products.html";
            } else {
                alert("Please fill in all fields.");
            }
        });
    }

    // Handle Product List
    const productList = document.getElementById("productList");
    if (productList) {
        const products = [
            { id: 1, name: "Laptop", price: "$1000", photo: "images/laptop.webp" },
            { id: 2, name: "Mouse", price: "$20", photo: "images/mouse.webp" },
            { id: 3, name: "Keyboard", price: "$30", photo: "images/keyboard.webp" },
            { id: 4, name: "Monitor", price: "$200", photo: "images/monitor.webp" },
            { id: 5, name: "Printer", price: "$150", photo: "images/printer.webp" },
            { id: 6, name: "Headset", price: "$50", photo: "images/headset.webp" },
            { id: 7, name: "Speaker", price: "$40", photo: "images/speaker.webp" },
            { id: 8, name: "Webcam", price: "$60", photo: "images/webcam.webp" },
            { id: 9, name: "External Drive", price: "$120", photo: "images/external_drive.webp" },
            { id: 10, name: "Router", price: "$80", photo: "images/router.webp" },
        ];

        products.forEach(product => {
            const row = `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td><img src="${product.photo}" alt="${product.name}" style="width: 50px; height: auto;"></td>
                </tr>
            `;
            productList.innerHTML += row;
        });
    }

    // Handle Forgot Password Form
    const forgotForm = document.getElementById("forgotForm");
    if (forgotForm) {
        forgotForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value.trim();
            if (email) {
                alert(`A reset link has been sent to ${email}`);
                window.location.href = "index.html";
            } else {
                alert("Please enter your email.");
            }
        });
    }
});