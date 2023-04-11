const email = document.getElementById('email')
const senha = document.getElementById('senha')
const button = document.getElementById('submit')
button.addEventListener('click', ()=>{
    if(email.value == "admin" && senha.value == "123456"){
        window.location.replace("./src/menu.html")
    }else{
        alert("Email ou senha inválidos, tente novamente.")
    }
})
