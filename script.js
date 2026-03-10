function autenticar() {
    const u = document.getElementById('user').value.toLowerCase().trim();
    const p = document.getElementById('pass').value;

    if(p === "123") {
        localStorage.setItem("usuarioLogado", u);
        window.location.href = "dashboard.html";
    } else {
        alert("Senha: 123");
    }
}
