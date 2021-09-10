let objAdminUsers = [
    {
        username: "admin",
        password: "admin1234"
    },
    {
        username: "godwin",
        password: "closeyourlaptops"
    }
]

function adminLogin() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    // console.log(username, password)
    

    for (i = 0; i < objAdminUsers.length; i++) {
        if (username == objAdminUsers[i].username && password == objAdminUsers[i].password) {
            window.location.replace("./admin-page.html")
            return
        } 
    }
    alert("Incorrect Username or Password")
}