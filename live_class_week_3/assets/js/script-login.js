// Harcode login
const formLogin = document.getElementById("form-login")
const btnLogin = document.getElementById("btn-login")
btnLogin.addEventListener("click", function(event){
    event.preventDefault
    let loginEmail = document.getElementById("login-email").value
    let loginPassword = document.getElementById("login-password").value
    if((loginEmail && loginPassword) != ''){
        if((loginEmail == "admin@mail.com") && (loginPassword == '12345678')){
            window.location.href = "/index.html";
        }else{
            window.alert("Email atau Password salah!")
        }
    }else{
        window.alert("Mohon mengisi Form login dengan benar!")
    }
})



