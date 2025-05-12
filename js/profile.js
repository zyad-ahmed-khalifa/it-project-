JSON.parse(localStorage.getItem("profile_info"));
function display_profile(profile_info) {
  document.querySelector(".container1").innerhtml = ``;
  let pf = `
              <div class="content">
                <div class="content2">
                <div class="profile-photo"><i class="fa-solid fa-user"></i></div>
                <div class="upload-section">
                  <p><strong>upload your photo</strong></p>
                  <p>your photo must be PNG or JPG</p>
                  <button class="upload">upload</button>
                  <button class="remove">remove</button>
                </div>
            </div>
                <div class="my-tickets">my tickets</div>
              </div>
          
              <div class="passenger-details">
                <h3>Passenger details</h3>
                <p>Name as on ID card/passport without title and punctuation</p>
              </div>
          
              <table class="form-table">
                <tr>
                  <td><input type="text" placeholder="Name" value="${profile_info.first-name}"></td>
                  <td><input type="text" placeholder="Surname value="${profile_info.surname}"></td>
                </tr>
                <tr>
                  <td><input type="email" placeholder="E-mail" value="${profile_info.email}"></td>
                  <td><input type="password" placeholder="Password value="${profile_info.password}""></td>
                </tr>
                <tr>
                  <td><input type="tel" placeholder="Phone number value="${profile_info.phonenumber}""></td>
                  <td><input type="date" placeholder="Birthday"></td>
                </tr>
                <tr>
                  <td><input type="text" placeholder="Country"></td>
                  <td><input type="text" placeholder="Nationality"></td>
                </tr>
                <tr>
                  <td><input type="text" placeholder="Passport number" value="${profile_info.passportnumber}"></td>
                  <td><input type="text" placeholder="Passport Expiry Date"></td>
                </tr>
                <tr>
                  <td colspan="2"><input type="text" placeholder="Gender"></td>
                </tr>
              </table>
          
              <div class="buttons">
                <button>Sign in</button>
                <button>register</button>
              </div>
`;
  document.querySelector(".container1").innerhtml += pf;
}
