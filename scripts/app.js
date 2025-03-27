document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Input validation
    if (!username || !password) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Simulate login process
    if (username === "admin" && password === "1234") {
        alert("Inicio de sesión exitoso");
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "/index.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

// Logout functionality
document.getElementById("logoutButton")?.addEventListener("click", function() {
    localStorage.removeItem("isLoggedIn");
    alert("Sesión cerrada exitosamente");
    window.location.href = "/";
});

// Check login status
window.addEventListener("load", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn && window.location.pathname === "/") {
        window.location.href = "/index.html";
    }
});
