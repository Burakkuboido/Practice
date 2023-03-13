var getModal = document.getElementById("myModal");
var getImg = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01")
var captionText = document.getElementById("caption")

for(let img of getImg){
    img.onclick = function() {
        getModal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var hide = document.getElementsByClassName("close")[0];

hide.onclick = function() {
    getModal.style.display = "none";
}

