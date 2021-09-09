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
                let totalPrice = 0.0;
                let cartContainer = document.querySelector(".cart-items");
                cartContainer.innerHTML = `
                <button class="incart-btn" onclick="showCart()">x</button>
                <h1 class="cart-title">Cart</h1>`
                cart.forEach((id) => {
                    // console.log(id)
                    // console.log(items)
                    items.forEach((item) => {
                        if (id == item[0]) {
                            totalPrice = Math.round((parseFloat(totalPrice) +
                                parseFloat(String(item[4]).replace(",","."))) * 100) / 100;
                            cartContainer.innerHTML += `
                                <div class="cart-item">
                                    <h4>Name: ${item[1]}</h4>
                                    <h5>Price: R ${item[4]}</h5>
                                    <button class="incart-btn">Remove</button>
                                </div>
                            `;
                        }
                    })
                })
                document.querySelector(".cart-price").innerHTML = `
                Total Price: R ${totalPrice}
                </br>
                <button class="incart-btn">BUY</button>
                `
            })
    )
}

function addToCart(id) {
    cart.push(id);
    // console.log(cart);
}