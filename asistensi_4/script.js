window.onload = function (){
    let url = "https://jsonplaceholder.typicode.com/posts"
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let res = JSON.parse(this.response)
            console.log(res)

            res.forEach(element => {
                let figEl = document.getElementById("figure")
                let blockquoteEl = document.createElement("blockquote")
                blockquoteEl.setAttribute("class", "blockquote")
                let p = document.createElement("p")
                p.innerHTML = element.body
                blockquoteEl.append(p)
                let figCaptionEl = document.createElement("figcaption")
                figCaptionEl.setAttribute("class", "blockquote-footer")
                figCaptionEl.innerHTML = element.title

                figEl.append(blockquoteEl, figCaptionEl)
            });

           
        }
    }
    xhr.open("GET", url, true)
    xhr.send()

}