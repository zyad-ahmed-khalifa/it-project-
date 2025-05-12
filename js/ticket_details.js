if (localStorage.getItem("ticketId") !== null) {
  let id = Number(localStorage.getItem("ticketId"));

  let selectedticket = tickets.find(function (ticket) {
    return ticket.id === id;
  });
  console.log(selectedticket);

  displaydetails(selectedticket);
}

function displaydetails(selectedticket) {
  let det = document.querySelector("div.details");
  det.innerHTML = ``;
  let details = `
    <div class="container1">
      <div class="section1">
        <div class="timeline">
        <div class="line"></div>
        <div class="dots">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
      </div>
      <div class="flight-details">
        <div class="flight-row">
          <span class="time">${selectedticket.timeTo}</span>
          <div class="location">
            <span>${selectedticket.to}</span>
          </div>
        </div>
        <div class="content">
        <div class="flight-info">

          <div class="baggages ">
            <span><p  class="ticket"><p><i class="fa-solid fa-ticket-simple"></i></p><p>CA-${Math.floor(
              Math.random() * (10000 - 1000) + 10000
            )} • ${selectedticket.class}</p></p></span>

          <span class="baggage"><p><p><i class="fa-solid fa-suitcase-rolling"></i></p><p>Baggage • </p></p> ${
            selectedticket.bagWeight
          }</span>
          <span class="baggage"><p>Cabin Baggage • </p> ${
            Number.parseInt(selectedticket.bagWeight) / 2
          }kg</span>
        </div>
        <div class="airbuss">
          <span class="airbus"><p><p><i class="fa-solid fa-suitcase-rolling"></i></p><p>Airbus •  </p></p> A${Math.floor(
            Math.random() * (1000 - 100) + 100
          )}</span>
          <span class="airbus">3-3 seat layout</span>
          <span class="airbus">29 inches Seat pitch (standard)</span>
        </div>
        </div>
        <div class="flight-row">
          <span class="time">${selectedticket.timeFrom}</span>
          <div class="location">
            <span >${selectedticket.from}</span>
          </div>
        </div>
      </div>
        </div>
      </div>
        <div class="section2">
        <div class="pricing">
          <div class="item">
            <div>adult basic fee</div>
            <div>tax</div>
            <div>tax value</div>
            <div class="save">Save</div>

          </div>
          <div class="prices">
            <div>${selectedticket.price}$</div>
            <div>included</div>
            <div>${selectedticket.vat}%</div>
            <div class="save-amount">+$${
              selectedticket.price * (selectedticket.vat / 100)
            }</div>
          </div>
        </div>

        </div>
        <hr class="hr1">
        <div class="total">
          <span>Total</span>
          <span class="total-price">${
            selectedticket.price +
            selectedticket.price * (selectedticket.vat / 100)
          }$</span>
        </div>
        <button class="submit-btn">Submit</button>

    </div>
    `;
  det.innerHTML += details;
  console.log(det);
}
document.querySelector(".submit-btn").onclick = function () {
  location.assign("/html/en/Booking.html");
};
console.log(1);
