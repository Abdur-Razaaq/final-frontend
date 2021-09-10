function popModal(id) {
    fetch('https://sleepy-retreat-77815.herokuapp.com/show-books/').then(
        (response) =>
            response.json().then((data) => {
                // console.log(data.data);
                items = data.data;
                let container = document.querySelector("#modal");
                container.innerHTML = `<button class="cls-btn" onclick="toggleModal()">
                    <i class="far fa-times-circle"></i>
                    </button>`;
                items.forEach((item) => {
                    // console.log(item);
                    if (item[0] == id) {
                        container.innerHTML += `
                        <div class="modal-item">
                            <div class="modal-info">   
                                <div class="text-info">
                                    <h1 class="modal-name">${item[1]}</h1>
                                    <p class="descr">${item[3]}</p>
                                    <h2>R ${item[4]}</h2>
                                    <p>${item[5]}</p>
                                    <button class="incart-btn" onclick="addToCart(${item[0]})">Add to Cart</button>
                                </div>
                                <div class="modal-img-box">
                                    <img src="${item[2]}" class="modal-img"></img>
                                </div>                                
                            </div>
                        </div>

                        `;
                    }
            });
        })
    );
}