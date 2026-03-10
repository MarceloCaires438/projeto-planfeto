function login(){

let user = document.getElementById("usuario").value

localStorage.setItem("usuario", user)

window.location.href="pages/dashboard.html"

}
