let today = new Date().toLocaleDateString();

function display_final_ticket(ticket) {
  document.querySelector("section .container").innerHTML = ``;

  let ticket_final = `
    <div class="ticket">
      <div class="ticket-left">
        <div class="airline">
          <i class="fas fa-plane"></i> ${ticket.airline}
        </div>
        <div class="passenger">
          Passenger: <strong>Amr Fathi</strong>
        </div>
        <div class="flight-route">
          <div>
            <div class="time">${ticket.timeFrom}</div>
            <div class="city">${ticket.from}</div>
          </div>
          <i class="fas fa-plane icon-plane"></i>
          <div>
            <div class="time">${ticket.timeTo}</div>
            <div class="city">${ticket.to}</div>
          </div>
        </div>
        <div class="flight-date">${today}</div>
        <div class="baggage">
          <div class="bag">
            <i class="fas fa-suitcase-rolling"></i> ${ticket.bagWeight}
          </div>
          <div class="bag">
            <i class="fa-solid fa-bag-shopping"></i> ${
              Number.parseInt(ticket.bagWeight) / 2
            }kg
          </div>
        </div>
        <div class="duration">⏱ Duration: ${ticket.time}</div>
        <div class="checkin">Check-in: 9th Feb 205 at 21:20</div>
      </div>

      <div class="ticket-right">
        <div>
          <div class="logo"><i class="fas fa-plane"></i> E-flight</div>
          <div class="info-block">
            <div class="label">Booking ID</div>
            <div class="value">${Math.floor(
              Math.random() * (1000000000 - 100000000) + 100000000
            )}</div>
          </div>
          <div class="info-block">
            <div class="label">Airline Code</div>
            <div class="value">CA-${Math.floor(
              Math.random() * (100000 - 10000) + 10000
            )}</div>
          </div>
        </div>
        <div class="barcode">
          <img src="/img/barcode.png" alt="E-Ticket Barcode"/>
        </div>
      </div>
    </div>`;

  document.querySelector("section .container").innerHTML += ticket_final;
  console.log(ticket);
}

if (localStorage.getItem("ticketId") !== null) {
  let tfilter = tickets.find((t) => t.id == localStorage.getItem("ticketId"));

  if (tfilter) {
    display_final_ticket(tfilter);
  }
}
