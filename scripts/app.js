document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Inicio de sesión exitoso");
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
