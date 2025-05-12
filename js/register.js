// let stored_user = localStorage.getItem("profile_info");
// let user_in = stored_user.find(
//   (user) =>
//     user.email === profile_info.email && user.password === profile_info.password
// );
// if (user_in) {
//   document.querySelector(".button1").onclick = function () {
//     location.assign("/html/en/signin.html");
//   };
// } else {
//   localStorage.setItem("profile_info", JSON.stringify(stored_user));
//   document.querySelector("#reg").addEventListener("click", function (e) {
//     let profile_info = {
//       firstN: document.getElementById("first-name").value,
//       surname: document.getElementById("surname").value,
//       phone_number: document.getElementById("phone-number").value,
//       country: document.getElementById("country").value,
//       nationality: document.getElementById("nationality").value,
//       email: document.getElementById("email").value,
//       password: document.getElementById("password").value,
//       passport_number: document.getElementById("passport-number").value,
//     };
//     stored_user.push(profile_info);
//     localStorage.setItem("profile_info", JSON.stringify(profile_info));
//     console.log(profile_info);
//   });
// }

document.querySelector(".button1").onclick = function () {
  if (localStorage.getItem("profile_info") != null) {
    console.log(localStorage.getItem("profile_info"));
  } else {
    let profile_info = {
      firstN: document.getElementById("first-name").value,
      surname: document.getElementById("surname").value,
      phone_number: document.getElementById("phone-number").value,
      country: document.getElementById("country").value,
      nationality: document.getElementById("nationality").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      passport_number: document.getElementById("passport-number").value,
    };
    localStorage.setItem("profile_info", JSON.stringify(profile_info));
    console.log(profile_info);
  }
};
