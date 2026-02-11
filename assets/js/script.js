
/*ESERCIZIO JAVA 1*/

function removeData (){
    let twitterRemove = document.querySelectorAll("a")
    twitterRemove[27].style.display = "none"
    
}

window.onload = removeData()

/*ESERCIZIO JAVA 2*/

let allLinkA = document.querySelectorAll("a")

for (let i = 0; i < allLinkA.length; i++){
    if (allLinkA[i].textContent.includes("Continua a leggere")){
        allLinkA[i].addEventListener("click", removeFather)
    }
    function removeFather(){
        allLinkA[i].parentElement.remove()
    
    }
}


/*ESERCIZIO JAVA 3*/

let blogPost = document.getElementsByClassName("blog-post-meta")
for (let i = 0; blogPost.length; i++){
    let linkAuthor = blogPost[i].querySelector("a")
    let nameAuthor = linkAuthor.textContent
    linkAuthor.addEventListener("mouseover", alertAuthor)
    function alertAuthor(){
        alert("L'autore che hai selezionato è " + nameAuthor)
    }
}