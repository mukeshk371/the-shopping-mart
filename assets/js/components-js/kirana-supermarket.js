function createItemList(details) {
    /* Start Card Header */
    var productName = document.createElement("STRONG");
    productName.innerHTML = details.name;

    var cardHeading = document.createElement("DIV");
    cardHeading.classList.add("card-heading");
    cardHeading.appendChild(productName);

    var spacer = document.createElement("DIV");
    spacer.classList.add("spacer");

    var productWeight = document.createElement("SPAN");
    productWeight.innerHTML = details.weight + "Kg";

    var cardHeader = document.createElement("DIV");
    cardHeader.classList.add("card-header", "flex-row");
    cardHeader.appendChild(cardHeading);
    cardHeader.appendChild(spacer);
    cardHeader.appendChild(productWeight);
    /* End Card Header */

    /* Start Item Image */
    var image = document.createElement("IMG");
    image.setAttribute("src", details.pic);

    var imageBox = document.createElement("DIV");
    imageBox.classList.add("item-image", "p-1", "flex-center-center");
    imageBox.appendChild(image);
    /* End Item Image */

    /* Start Item Price */
    var itemPrice = document.createElement("STRONG");
    itemPrice.innerHTML = "₹" + details.price;

    var itemPriceBox = document.createElement("DIV");
    itemPriceBox.classList.add("item-price", "ptb-1", "text-center");
    itemPriceBox.appendChild(itemPrice);
    /* End Item Price */

    /* Start Card Footer */
    var addToCartBtn = document.createElement("BUTTON");
    addToCartBtn.classList.add("btn-primary");
    addToCartBtn.setAttribute("id", details.id + "-btn");
    addToCartBtn.setAttribute("onclick", "addToCart()");
    addToCartBtn.innerHTML = "Add To Cart"

    var cardFooter = document.createElement("DIV");
    cardFooter.classList.add("card-footer", "flex-center-center", "p-05");
    cardFooter.appendChild(addToCartBtn);
    /* End Card Footer */

    /* Start Card */
    var card = document.createElement("DIV");
    card.classList.add("card");
    card.appendChild(cardHeader);
    card.appendChild(imageBox);
    card.appendChild(itemPriceBox);
    card.appendChild(cardFooter);

    var groceryShowcase = document.createElement("DIV");
    groceryShowcase.classList.add("grocery-showcase");
    groceryShowcase.setAttribute("id", details.id);
    groceryShowcase.appendChild(card);

    return groceryShowcase;
}

function createFilters() {

}

function loadShowcase() {
    var content = document.getElementById('content');

    while(content.firstChild) {
		content.removeChild(content.firstChild);
    }
    
    for(var i = 0; i < showcaseItems.length; i++) {
        var li = createItemList(showcaseItems[i]);
        content.appendChild(li);
    }
}


var n = 1;

function addToCart() {
    var badgeCount = document.getElementById('badge');
    badgeCount.classList.add("visible");
    badgeCount.innerHTML = n;
    n += 1;
}