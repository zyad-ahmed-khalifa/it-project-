//local storage-----------------------
let profile_info = {
      firstN: 3,
      surname: 4,
      phone_number: 6,
      country: 7,
      nationality: 11,
      email: 13,
      password: 17,
      passport_number: 15,
    };
localStorage.setItem("profile_info", JSON.stringify(profile_info));

// variables---------------------------
  const search1 = document.getElementsByClassName("e-mail_input")[0];
  const search2 = document.getElementsByClassName("password_input")[0];
  const text1 = document.getElementsByClassName("e-mail")[0];
  const text2 = document.getElementsByClassName("password")[0];
  const error1 = document.getElementsByClassName("error")[0];
// function----------------------------
  document.getElementById("button").onclick = function () {
    let mail = search1.value;
    let password = search2.value;
    let flag = 0;
    let array = JSON.parse(localStorage.getItem("profile_info")) || [];
    // conditions---------      
      if (mail == array.email && password == array.password) {
        flag = 1;
      }

      if (flag === 0) {
      search1.style.borderColor = "red";
      search2.style.borderColor = "red";
      search1.style.border = "1px solid red";
      search2.style.border = "1px solid red";
      text1.style.color = "red";
      text2.style.color = "red";
      error1.style.opacity = "1"
    } else {
      window.location.href = "https://www.youtube.com";
    }
    
}

    
    
    
  