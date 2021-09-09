let cart = [];

function showCart() {
    document.querySelector(".cart-container").classList.toggle("show");
    popCart();
}

function popCart() {
    fetch('https://sleepy-retreat-77815.herokuapp.com/show-books/').then(
        (response) =>
            response.json().then((data) => {
                console.log(data.data);
                items = data.data;
                let cartContainer = document.querySelector(".cart-container");
                cartContainer.innerHTML = `
                <button class="close-cart" onclick="showCart()">x</button>
                <h1 class="cart-title">Cart</h1>`
                cart.forEach((id) => {
                    console.log(id)
                    console.log(items)
                    items.forEach((item) => {
                        if (id == item[0]) {
                            cartContainer.innerHTML += `
                                <div class="cart-item">
                                    <h3>Name: ${item[1]}</h3>
                                    <h4>Price: R ${item[4]}</h4>
                                </div>
                            `
                        }
                    })
                })
            })
    )
}

function addToCart(id) {
    cart.push(id);
    console.log(cart);
}
