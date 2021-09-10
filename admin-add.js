let cart = [];

function showCart() {
    document.querySelector(".cart-container").classList.toggle("show");
}


function addBook() {

    let name = document.querySelector("#name").value;
    let img_url = document.querySelector("#img_url").value;
    let description = document.querySelector("#description").value;
    let price = document.querySelector("#price").value;
    let category = document.querySelector("#category").value;
    // console.log(name, img_url, description, price, category)

    let json_dict = {
        name: name,
        img_url: img_url,
        description: description,
        price: price,
        category: category
    }
    console.log(json_dict)

    fetch("https://sleepy-retreat-77815.herokuapp.com/add-book/", {
          method: "POST",
          body: JSON.stringify(json_dict),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
    })
        .then(response => response.json())
        .then(data => window.location.reload());
}