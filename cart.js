let cart = [];
let buy = false;

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
                <h1 class="cart-title">Cart</h1>`;
                let index = 0;
                cart.forEach((book) => {
                    // console.log(book)
                    // console.log(items)
                    items.forEach((item) => {
                        if (book.id == item[0]) {
                            buy = true;
                            totalPrice = Math.round((parseFloat(totalPrice) +
                                parseFloat(String(item[4]).replace(",","."))) * 100) / 100;
                            cartContainer.innerHTML += `
                                <div class="cart-item">
                                    <h4>Name: ${item[1]}</h4>
                                    <h5>Price: R ${item[4]}</h5>
                                    <button onclick="removeFromCart(${index})" class="incart-btn">Remove</button>
                                </div>
                            `;
                            index += 1;
                        }
                    })
                })
                document.querySelector(".cart-price").innerHTML = `
                Total Price: R ${totalPrice}
                </br>
                <button onclick="buyCart()" class="incart-btn">BUY</button>
                `
            })
    )
}

function addToCart(id) {
    cart.push({
        id: id,
        index: cart.length,
    });
}

function removeFromCart(index) {
    newCart = []
    cart.forEach((book) => {
        if (book.index == index) {
            console.log(index, book.id)
        } else {
            newCart.push({
                id: book.id,
                index: newCart.length,
            })
        }
    })
    cart = newCart;
    popCart();
}

function buyCart() {
    if (buy) {
        alert("Thank you, please come again!");
        cart = [];
        document.querySelector(".cart-container").classList.toggle("show");
    } else {
        alert("Cart Is Empty!");
    }
}
