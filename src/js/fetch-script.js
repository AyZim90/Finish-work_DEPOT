let products = [];

function displayProducts(filteredProducts) {
    let output = "";

    for (let item of filteredProducts) {
        output += `
        <div class="products-container">
            <div class="product-list">
                <div class="product">
                    <span class="sale">-19%</span>
                    <span class="prod-new">NEW</span>
                    <img src="${item.imgs}" alt="${item.title}">
                    <p class="title">${item.title}</p>
                    <div class="price-cart-wrapper">
                        <p class="price">
                            <span>${item.price}</span>
                            <span>$</span>
                            <span class="discount">$210</span>
                        </p>
                        <p class="cart">Add to cart</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    document.querySelector(".products").innerHTML = output;
}

document.querySelector(".category").addEventListener("click", function(e) {
    e.preventDefault();

    if (e.target && e.target.nodeName == "A") {
        let category = e.target.getAttribute("data-category");

        let filteredProducts = products.filter(product => {
            if (category === "ALL") return true;
            return product.categorys.includes(category);
        });

        displayProducts(filteredProducts);
    }
});

let http = new XMLHttpRequest();

http.open('get', 'products.json', true);
http.send();

http.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        products = JSON.parse(this.responseText);
        displayProducts(products);
    }
}
