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
    const sections = ["section-adm", "section-funcionario", "section-cliente"];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
    });

    // 4. Mostra apenas a seção do usuário logado
    if (user === "adm") {
        const admSec = document.getElementById('section-adm');
        if (admSec) admSec.style.display = "block";
    } 
    else if (user === "funcionario") {
        const funcionarioSec = document.getElementById('section-funcionario');
        if (funcionarioSec) funcionarioSec.style.display = "block";
    } 
    else if (user === "cliente") {
        const clienteSec = document.getElementById('section-cliente');
        if (clienteSec) clienteSec.style.display = "block";
    }
};

// Funções extras para o Funcionário
function iniciarServico() {
    const nome = document.getElementById('nome-func').value;
    const modal = document.getElementById('modal-select').value;
    const endereco = document.getElementById('endereco-entrega').value;

    if (!nome || !endereco) {
        alert("Senhor, por favor preencha o seu nome e o endereço atual.");
        return;
    }

    // Salva os dados para que o ADM e Cliente vejam
    localStorage.setItem("nomeAtivo", nome);
    localStorage.setItem("modalAtivo", modal === 'pe' ? 'A Pé' : 'Carro de Som');
    localStorage.setItem("localAtivo", endereco);

    const info = document.getElementById('info-rota');
    if(info) {
        info.innerHTML = `Líder: <b>${nome}</b> | Local: <b>${endereco}</b>`;
        document.getElementById('status-ativo').classList.remove('hidden');
    }
    
    alert("Rota iniciada em: " + endereco);
}
function enviarFoto() {
    const input = document.getElementById('foto-input');
    if (input.files.length === 0) {
        alert("Selecione uma foto da entrega!");
        return;
    }

    // Simulando o envio
    const hora = new Date().toLocaleTimeString();
    const fotoSimulada = "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=600";

    localStorage.setItem("ultimaFoto", fotoSimulada);
    localStorage.setItem("horaFoto", hora);

    alert("Foto enviada! O Cliente e o ADM já podem visualizar no painel.");
}
