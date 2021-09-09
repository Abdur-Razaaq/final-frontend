function login() {
  // GETTING DATA FROM FORM
  let email_address = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  console.log(email_address, password);

  //   SEND DATA TO API
  fetch("https://sleepy-retreat-77815.herokuapp.com/user-registration/", {
    method: "PATCH",
    body: JSON.stringify({
      email_address,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      window.location = "./index.html"
    });
}