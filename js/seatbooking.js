let seat = document.querySelectorAll("div.seat");

seat.forEach(function (s) {
    s.onclick = function () {
        seat.forEach(function (e) {
            e.classList.remove("select-seat")
            s.classList.add("select-seat")
            localStorage.setItem("seat", JSON.stringify(s.getAttribute("data-seat")))
        })
    }
})
