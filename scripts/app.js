document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Input validation
    if (!username || !password) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Show loading indicator
    const loadingIndicator = document.getElementById("loading");
    loadingIndicator.style.display = "block";

    setTimeout(() => {
        // Simulate login process
        if (username === "admin" && password === "1234") {
            alert("Inicio de sesión exitoso");
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "index.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
        loadingIndicator.style.display = "none";
    }, 1000);
});

// Logout functionality
document.getElementById("logoutButton")?.addEventListener("click", function() {
    localStorage.removeItem("isLoggedIn");
    alert("Sesión cerrada exitosamente");
    window.location.href = "login.html";
});

// Check login status
window.addEventListener("load", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn && window.location.pathname.includes("login.html")) {
        window.location.href = "index.html";
    }
});
