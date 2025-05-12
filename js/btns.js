let tripbtn1 = document.querySelector(".filter .container .filter-options ul li button.trip-btn1");
let tripbtn2 = document.querySelector(".filter .container .filter-options ul li button.trip-btn2");

tripbtn1.onclick = function () {
    tripbtn1.classList.add("trip-btn-clicked");
    tripbtn2.classList.remove("trip-btn-clicked");
}
tripbtn2.onclick = function () {
    tripbtn2.classList.add("trip-btn-clicked");
    tripbtn1.classList.remove("trip-btn-clicked");
}

// changing layout
let gridbtn = document.querySelector(".tickets .container .found-ticket-title div i[title='grid']")
let listbtn = document.querySelector(".tickets .container .found-ticket-title div i[title='list']")

gridbtn.onclick = function () {
    gridbtn.classList.add("display-btn");
    listbtn.classList.remove("display-btn");
    document.querySelector(".tickets .container .all-tickets").style.cssText = "display: grid; grid-template-columns: repeat(2, 1fr); gap:20px;";
    document.querySelectorAll(".tickets .container .all-tickets .ticket").forEach(function (div) {
        div.classList.add("display-grid")
        div.querySelectorAll("div").forEach(function (el) {
            el.classList.add("display-grid-ticket-content");
        })
    });
    // document.querySelector(".tickets .container .all-tickets .ticket div.info").classList.add("display-grid-ticket-content");
    // document.querySelector(".tickets .container .all-tickets .ticket div.info.second").classList.add("display-grid-ticket-content");
    // document.querySelector(".tickets .container .all-tickets .ticket div.price-choose").classList.add("display-grid-ticket-content");
}
listbtn.onclick = function () {
    listbtn.classList.add("display-btn");
    gridbtn.classList.remove("display-btn");
    document.querySelector(".tickets .container .all-tickets").style.removeProperty("display");
    document.querySelectorAll(".tickets .container .all-tickets .ticket").forEach(function (div) {
        div.classList.remove("display-grid")
        div.querySelectorAll("div").forEach(function (el) {
            el.classList.remove("display-grid-ticket-content");
            console.log(el)
        })
    });
    // document.querySelector(".tickets .container .all-tickets .ticket div.info").classList.remove("display-grid-ticket-content");
    // document.querySelector(".tickets .container .all-tickets .ticket div.info.second").classList.remove("display-grid-ticket-content");
    // document.querySelector(".tickets .container .all-tickets .ticket div.price-choose").classList.remove("display-grid-ticket-content");
}
////////////////////////////////////////////////////////////
