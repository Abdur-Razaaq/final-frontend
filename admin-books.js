let products = [];

fetch('https://sleepy-retreat-77815.herokuapp.com/show-books/').then(
    (response) =>
        response.json().then((data) => {
            // console.log(data.data);
            items = data.data;
            let container = document.querySelector(".card");
            container.innerHTML = ``;
            items.forEach((item) => {
                // console.log(item);
                container.innerHTML += `
                <div class="item">
                    <div class="info">
                        <p class="name">${item[1]}</p>
                        <div class="img-box">
                            <img src="${item[2]}" class="img"></img>
                        </div>
                    </div>
                    <button class="btn" id="contact-button" onclick="toggleModal(${item[0]})">Edit</button>
                    <button class="btn" id="contact-button">Delete</button>
                </div>

                `;
            });
        })
);

function toggleModal(id) {
    document.querySelector("#modal").classList.toggle("active");
    popModal(id);
}


