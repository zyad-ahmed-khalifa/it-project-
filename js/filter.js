// tickets.forEach(function (ticketdata) {
//     let ticketsdiv = document.querySelector("section.tickets .container .all-tickets")

//     let ticket = `
//         <div class="ticket">
//         <div class="info">
//             <!-- <div class="icon">
//                 <i class="fa-solid fa-ticket-simple"></i>
//             </div> -->
//             <div class="name">
//                 <span>${ticketdata.airline}</span>
//                 <span><i class="fa-solid fa-suitcase-rolling"></i> ${ticketdata.bagWeight}</span>
//             </div>
//             <div class="time">
//                 <span>${ticketdata.timeFrom} - ${ticketdata.timeTo}</span>
//                 <span><i class="fa-solid fa-clock"></i> ${ticketdata.time}</span>
//             </div>
//             <div class="stopping">
//                 <span><i class="fa-solid fa-plane-departure"></i> ${(typeof ticketdata.numberOfStops === 'number'? `${ticketdata.numberOfStops} stop`:`${ticketdata.numberOfStops}`)}</span>
//             </div>
//         </div>
//         <div class="price-choose">
//             <div class="price">
//                 <span>${ticketdata.price}$</span>
//             </div>
//             <button class="choose">
//                 <i class="fa-solid fa-ticket-simple"></i>
//                 choose
//             </button>
//         </div>
//     </div>
//     `;

//     ticketsdiv.innerHTML += ticket
// })

displayticket(tickets);

function displayticket(filteredtickets) {
  let ticketsdiv = document.querySelector(
    "section.tickets .container .all-tickets"
  );
  ticketsdiv.innerHTML = ``;

  filteredtickets.forEach(function (ticketdata) {
    let ticket = `
        <div class="ticket" data-id = "${ticketdata.id}" >
                        <div class="info">
                            <!-- <div class="icon">
                                <i class="fa-solid fa-ticket-simple"></i>
                            </div> -->
                            <div class="name">
                                <span>${ticketdata.airline}</span>
                                <span><i class="fa-solid fa-suitcase-rolling"></i> ${
                                  ticketdata.bagWeight
                                }</span>
                            </div>
                            <div class="time">
                                <span>${ticketdata.timeFrom} - ${
      ticketdata.timeTo
    }</span>
                                <span><i class="fa-solid fa-clock"></i> ${
                                  ticketdata.time
                                }</span>
                            </div>
                            <div class="stopping">
                                <span><i class="fa-solid fa-plane-departure"></i> ${
                                  typeof ticketdata.numberOfStops === "number"
                                    ? `${ticketdata.numberOfStops} stop`
                                    : ` ${ticketdata.numberOfStops}`
                                }</span>
                            </div>
                        </div>
                        <div class="info second">
                            <!-- <div class="icon">
                                <i class="fa-solid fa-ticket-simple"></i>
                            </div> -->
                            <div class="showfrom">
                                <span>from</span>
                                <span><i class="fa-solid fa-plane-departure"></i> ${
                                  ticketdata.from
                                }</span>
                            </div>
                            <div class="showto">
                                <span>to</span>
                                <span><i class="fa-solid fa-plane-arrival"></i> ${
                                  ticketdata.to
                                }</span>
                            </div>
                            <div class="showmembers">
                                <span>members</span>
                                <span>${
                                  ticketdata.passengerNumbers === 1
                                    ? `${ticketdata.passengerNumbers} member`
                                    : `${ticketdata.passengerNumbers} members`
                                }</span>
                            </div>
                            <div class="showtriptype">
                                <span>trip type</span>
                                <span>${ticketdata.typeOfTrip}</span>
                            </div>
                            <div class="showdegree">
                                <span>degree</span>
                                <span>${ticketdata.class}</span>
                            </div>
                        </div>
                        <div class="price-choose">
                            <div class="price">
                                <span>${ticketdata.price}$</span>
                            </div>
                            <button class="choose" onclick="choosedticket(this)">
                                <i class="fa-solid fa-ticket-simple"></i>
                                choose
                            </button>
                        </div>
      </div>`;
    ticketsdiv.innerHTML += ticket;
  });
}

let frominput = document.querySelector("input#from");
let toinput = document.querySelector("input#to");
let membersnumber = document.querySelector("select#members");
let classes = document.querySelector("select#class");
let searchbtn = document.querySelector(".search-btn button");

searchbtn.addEventListener("click", function () {
  let triptype = document.querySelector(".filter-options .trip-btn-clicked");
  if (frominput.value.length === 0 || toinput.value.length === 0) {
    if (frominput.value.length === 0) {
      frominput.placeholder = "please fill this input ";
      frominput.addEventListener("keyup", function () {
        frominput.style.backgroundColor = "transparent";
      });
      frominput.style.backgroundColor = "var(--warning-color)";
    }

    if (toinput.value.length === 0) {
      toinput.placeholder = "please fill this input ";
      toinput.addEventListener("keyup", function () {
        toinput.style.backgroundColor = "transparent";
      });
      toinput.style.backgroundColor = "var(--warning-color)";
    }
  } else {
    let filteredtickets = tickets.filter(function (ticket) {
      let con1 = ticket.from
        .toLowerCase()
        .includes(frominput.value.toLowerCase());
      let con2 = ticket.to.toLowerCase().includes(toinput.value.toLowerCase());
      let con3 = ticket.passengerNumbers == membersnumber.value;
      let con4 = ticket.class.toLowerCase() === classes.value.toLowerCase();
      let con5 = ticket.typeOfTrip === triptype.getAttribute("data-trip");
      return con1 && con2 && con3 && con4 && con5;
    });

    displayticket(filteredtickets);
    console.log(filteredtickets);
  }
});

function choosedticket(that) {
  let parent =
    that.parentElement.className === "ticket"
      ? that.parentElement
      : that.parentElement.parentElement;
  window.localStorage.setItem("ticketId", parent.getAttribute("data-id"));
  window.location.assign("/html/en/ticket_details.html");
}
