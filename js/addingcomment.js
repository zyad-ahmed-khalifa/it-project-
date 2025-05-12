let username = document.querySelector('input[type=text]')
let comment = document.querySelector('textarea')
// let commenttime = new Date().toLocaleTimeString()
let sharebtn = document.querySelector('button#share')
let ulStars = document.querySelector('.card.adding ul.stars')
let publishers = JSON.parse(localStorage.getItem('publish')) || []

// localStorage.clear()
if (publishers != null) {
    // let arr = JSON.parse(localStorage.getItem('publish'));
    publishers.forEach(function (publisher) {
        displaycomment(publisher);
    })
}

/* let user = {
    publisher: '',
    commenttext: '',
    time: ''
} */

sharebtn.onclick = function () {
    // user = {}
    let newComment = {
        publisher: username.value,
        commenttext: comment.value,
        time: new Date().toLocaleTimeString(),
        rate: Number(ulStars.getAttribute('data-selected'))
    };
    publishers.push(newComment)
    console.log(publishers)
    updateLocalStorage();
    username.value = ''
    comment.value = ''
    addingcommentbtn.classList.remove('addingicon')
    addingcard.classList.remove('show')
    // document.querySelector('.cards .sec-card').innerHTML = ``
    displaycomment(newComment);
    resetStars();
}

function updateLocalStorage() {
    localStorage.setItem('publish', JSON.stringify(publishers));
}

// window.onload = function () {
//     window.localStorage.setItem("publish", JSON.stringify(publishers))
// }

function displaycomment(publisher) {
    let stars = ``;

    for (let i = 0; i < 5; i++) {
        stars += `<li data-index="${i}" class="${(i <= publisher.rate) ? 'star' : ''}">
                    <i class="fa-solid fa-star"></i>
                </li>`;
    }

    let commentcard = `
        <div class="card">
            <div class="head">
                <div class="info">
                    <div class="logo">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="user-info">
                        <span class="name">${publisher.publisher}</span>
                        <span class="time">${publisher.time}</span>
                    </div>
                </div>
                <ul class="stars">
                    ${stars}
                </ul>
            </div>
            <div class="text">
                <span>${publisher.commenttext}</span>
            </div>
        </div>`;
    document.querySelector('.cards .sec-card').innerHTML += commentcard;
}

function resetStars() {
    ulStars.setAttribute('data-selected', '0');
    ulStars.querySelectorAll('li').forEach((star) => {
        star.classList.remove('star');
    });
}

function rate(that) {
    that.classList.add('star')
    document.querySelectorAll('.card.adding ul.stars li')
        .forEach(function (element) {
            return element.getAttribute('data-index') <=
                that.getAttribute('data-index')
                ? element.classList.add('star')
                : element.classList.remove('star')
        });
    ulStars.setAttribute('data-selected', that.getAttribute('data-index'))
}
