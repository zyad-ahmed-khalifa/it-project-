let addingcommentbtn = document.querySelector(".review .container  .add i");
let addingcard = document.querySelector(".review .container  .card.adding");

addingcommentbtn.onclick = function () {
    addingcommentbtn.classList.toggle("addingicon");
    addingcard.classList.toggle("show")
}
