const weakMap = new WeakMap();
const weakSet = new WeakSet();

// creating object for keys to WeakMap/Set 
const product = { "pId": null };
const cart = { pId: "" };

// save productId in WeakMap and increase views if already visited
function incrementProductViews(productId) {
    product["pId"] = productId;

    if (weakMap.has(product)) {
        weakMap.set(product, weakMap.get(product) + 1)
    } else {
        weakMap.set(product, 1)
    }
}

// save productId in WeakSet and return status of the cart item
function addToCart(productId) {
    cart["pId"] = productId;

    if (weakSet.has(cart)) {
        return "Product already in cart"
    } else {
        weakSet.add(cart);

        return "Product added to cart"
    }

}

// increase page visits/views
incrementProductViews(123);
incrementProductViews(123);

// add items to cart
let item1 = addToCart(123);
let item2 = addToCart(123);

// log the output
console.log("Page Views:", weakMap.get(product))
console.log("Add product - 123: ", item1);
console.log("Add product - 123: ", item2);