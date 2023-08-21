
const btnRegis = document.getElementById("btn-reg")

btnRegis.addEventListener("click", function(event){
    event.preventDefault
    let email = document.getElementById('email').value
    let nama = document.getElementById('nama').value
    let password = document.getElementById('password').value
    let confirm_password = document.getElementById('confirm_password').value
    if((email && nama && password) != ''){
        if(password == confirm_password){
            alert("Registration is temporarily disabled")
            // window.location.href = "http://127.0.0.1:5500/login.html"
        }else{
            alert("Mohon maaf password anda tidak sama")
        }
    }else{
        alert("Masukan data dengan benar!")
    }
})