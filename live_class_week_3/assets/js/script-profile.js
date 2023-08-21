//jam
let p = document.getElementById("jam")


function myTime(){
    let jam = new Date()
    p.innerHTML = jam.toLocaleTimeString([], {
        hour12:false
    })
}
setInterval(myTime, 1000)
