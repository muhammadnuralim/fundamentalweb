// Drag N Drop
function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

//Fungsi add
const btnAdd = document.getElementById("btn-add");
let todoItem = document.getElementById('todo');
btnAdd.addEventListener("click", function(){
    let item1 = window.prompt("Enter first item:");
    let item2 = window.prompt("Enter second item");
    let article = document.createElement('article');
    //cek apakah item1 itu null atau tidak
    if ((item1 && item2) != '' & (item1 && item2)!= null) {
            let badgeDelete = document.createElement('a')
            let badgeEdit = document.createElement('a')
            let p = document.createElement("p")
            let h4 = document.createElement("h4")
            h4.appendChild(document.createTextNode(item1));
            p.appendChild(document.createTextNode(item2));
            article.setAttribute("class", 'border p-3 mt-3')
            article.setAttribute("ondragstart", 'drag(event)')
            article.setAttribute("draggable", 'true')
            article.setAttribute("id", h4.textContent)
            badgeDelete.setAttribute('href', "#");
            badgeDelete.setAttribute('class', "badge bg-danger link-underline link-underline-opacity-0 mr-3");
            badgeDelete.setAttribute('id', 'delete-'+ p.textContent);
            badgeDelete.setAttribute("onclick", 'deleteEvent(this.id)')
            badgeEdit.setAttribute('href', "#");
            badgeEdit.setAttribute('class', "badge bg-info link-underline link-underline-opacity-0 mr-3");
            badgeEdit.setAttribute('id', 'edit-'+ p.textContent);
            badgeEdit.setAttribute("onclick", 'editEvent(this.id)')
            article.appendChild(h4)
            article.appendChild(p)
            article.appendChild(badgeDelete)
            article.appendChild(badgeEdit)
            badgeDelete.appendChild(document.createTextNode("Delete"))
            badgeEdit.appendChild(document.createTextNode("Edit"))

            todoItem.appendChild(article);       
        }else{
            alert("isian tidak boleh kosong!")
        }
})
//fungsi menghapus
function deleteEvent(ev){
    let badgeDelete = document.getElementById(ev)
    badgeDelete.parentNode.classList.add('d-none')
}

//fungsi edit
function editEvent(ev){
    let judul = window.prompt("Ganti judul:");
    let paragraf = window.prompt("Ganti deskripsi:");
    if((judul && paragraf)!= ''){
        let badgeEdit = document.getElementById(ev)
        badgeEdit.parentNode.firstChild.innerHTML = judul;
        badgeEdit.parentNode.firstChild.nextSibling.innerHTML = paragraf;
        // console.log(badgeEdit.parentNode.firstChild.nextSibling)
    }else{
        alert("Isian tidak boleh kosong")
    }

}

//fugnsi untuk jam
let p = document.getElementById("jam")

function myTime(){
    let jam = new Date()
    p.innerHTML = jam.toLocaleTimeString([], {
        hour12:false
    })
}
setInterval(myTime, 1000)



