let myButton = document.getElementById("btn")


myButton.addEventListener("click", function(){
    myButton.setAttribute("style", "background-color:red;")
})

let jam = document.getElementById("jam")


function getJamDetail(){
    let d = new Date().toLocaleString('en-US',{
        hour12: false,
    })
    jam.innerHTML = d
}

setInterval(getJamDetail, 1000)
// setTimeout(getJamDetail, 1000)