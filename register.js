function register() {
  // GETTING DATA FROM FORM
    let first_name = document.querySelector("#name").value;
    let last_name = document.querySelector("#surname").value;
    let email_address = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    console.log(first_name, last_name, email_address, password);

  //   SEND DATA TO API
  fetch("https://sleepy-retreat-77815.herokuapp.com/user-registration/", {
    method: "POST",
    body: JSON.stringify({
      first_name,
      last_name,
      email_address,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.status_code == 201);
      {
        setTimeout(function () {
          window.location = "./login.html";
        }, 3000);
      }
    });
}