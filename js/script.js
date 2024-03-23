let divCards = document.getElementById("cards")
let childCards = document.querySelector(".childCards")

let cards = [
    {
    img : "images/man-clothes.jpg",
    h6 : "Product : man-clothes",
    pOne : "Price : 2000 $",
    pTwo : "Category : fashion"
    },
    {
    img : "images/women-clothes.jpg",
    h6 : "Product : women-clothes",
    pOne : "Price : 3000 $",
    pTwo : "Category : fashion"
    },
    {
        img : "images/baby.jpg",
        h6 : "Product : Shoes",
        pOne : "Price : 20 $",
        pTwo : "Category : fashion"
    },
    {
        img : "images/laptop.jpg",
        h6 : "Product : Laptop",
        pOne : "Price : 1500 $",
        pTwo : "Category : accessories"
    },
    {
        img : "images/bag.jpg",
        h6 : "Product : bag",
        pOne : "Price : 40 $",
        pTwo : "Category : fashion"
    },
    {
        img : "images/tshirt.jpg",
        h6 : "Product : T-shirt",
        pOne : " Price : 40 $ ",
        pTwo : "Category : fashion"
    },
    {
        img : "images/shorts.jpg",
        h6 : "Product : shorts",
        pOne : "Price : 30 $",
        pTwo : "Category : fashion"
    },
    {
        img : "images/slipper.jpg",
        h6 : "Product : slipper",
        pOne : "Price : 15 $",
        pTwo : "Category : fashion"
    },
    {
        img : "images/shoes.jpg",
        h6 : "Product : Shoes",
        pOne : "Price : 60 $",
        pTwo : "Category : fashion"
    },
    {
        img : "images/shoes-sport.jpg",
        h6 : "Product : Shoes",
        pOne : "Price : 35 $",
        pTwo : "Category : fashion"
    },
    {
        img : "images/smart-watch.jpg",
        h6 : "Product : smart-watch",
        pOne : "Price : 1800 $",
        pTwo : "Category : accessories"
    },
    {
        img : "images/mobile.jpg",
        h6 : "Product : mobile",
        pOne : "Price : 4990 $",
        pTwo : "Category : Mobile"
    }

]


function itemssss () {
    let showCards = cards.map((el) => {
        const newAAAA =
        `
        <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card item">
            <img src=${el.img} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold">${el.h6}</h5>
                <p class="card-text mb-1 fs-6">${el.pOne}</p>
                <p class="card-text">${el.pTwo}</p>
                <div class="info-card d-flex justify-content-between align-items-center">
                    <a href="#" class="btn btn-primary">Add to cart</a>
                    <a href="#">
                        <i class="fa-solid fa-heart text-secondary fs-4"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>`

        return newAAAA
    })
    childCards.innerHTML = showCards.join("")
}

itemssss()
