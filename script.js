// Função de Login (usada na index.html)
function autenticar() {
    const u = document.getElementById('user').value.toLowerCase().trim();
    const p = document.getElementById('pass').value;

    if(p === "123") {
        localStorage.setItem("usuarioLogado", u);
        window.location.assign("dashboard.html");
    } else {
        alert("Senha incorreta! Use 123");
    }
}

// Lógica de exibição (usada na dashboard.html)
window.onload = function() {
    // 1. Verifica se tem alguém logado
    const user = localStorage.getItem("usuarioLogado");
    
    // Se não tiver, volta para o login (proteção de rota)
    if (!user && window.location.pathname.includes("dashboard.html")) {
        window.location.assign("index.html");
        return;
    }

    // 2. Atualiza o nome no topo (se o elemento existir)
    const display = document.getElementById('user-display');
    if (display) display.innerText = user.toUpperCase();

    // 3. Esconde todas as seções primeiro (Reset visual)
    const sections = ["section-admin", "section-func", "section-cliente"];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
    });

    // 4. Mostra apenas a seção do usuário logado
    if (user === "admin") {
        const adminSec = document.getElementById('section-admin');
        if (adminSec) adminSec.style.display = "block";
    } 
    else if (user === "func") {
        const funcSec = document.getElementById('section-func');
        if (funcSec) funcSec.style.display = "block";
    } 
    else if (user === "cliente") {
        const clienteSec = document.getElementById('section-cliente');
        if (clienteSec) clienteSec.style.display = "block";
    }
};

// Funções extras para o Funcionário
function iniciarServico() {
    const nome = document.getElementById('nome-func').value;
    if (!nome) {
        alert("Por favor, preencha seu nome antes de iniciar.");
        return;
    }
    alert("Rota iniciada com sucesso, " + nome + "!");
}
