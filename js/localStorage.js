const storeProducts = () => {

    const productField = document.getElementById('productField')
    const products = productField.value;

    const quantityField = document.getElementById('quantityField')

    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';
    displayProducts(products, quantity);
}
// console.log(productField,quantityField)
//display products to UI 
const displayProducts = (products, quantity) => {

    const productList = document.getElementById('productList');
    const li = document.createElement('li')
    li.innerText = `${products} : ${quantity}`
    productList.appendChild(li);
    saveProductsToLocalStorage(products, quantity);

}


// check localStorage key
// if found, it should be converted to object using json.parse(objectName).
// if not found, initially decleared an empty object 

const getValueFromLocalStorage = () => {

    let cart = {};

    const getCart = localStorage.getItem('cart');

    if (getCart) {
        cart = JSON.parse(getCart)
    }
    return cart;
}
// before save new products ,check the existing cart value
const saveProductsToLocalStorage = (products, quantity) => {
    const cart = getValueFromLocalStorage();
    //  here cart is a objectName ,products is object property and quantity is object value
    // exmp ::  {mobile:12} ===>>>> products=quantity
    cart[products] = quantity
    // console.log(cart);
    //******** */ bedfore store value,it should be converted to string using json.stringify
    const cartStringified = JSON.stringify(cart);
    console.log(cartStringified);
    localStorage.setItem('cart', cartStringified);


}

const displayProductsFromLocalStorages = () =>{

    const savedCart = getValueFromLocalStorage();
    console.log(savedCart);
    for (products in savedCart) {
        
        const quantity =savedCart[products];
        console.log(products,quantity);
        displayProducts(products,quantity);
    }
}
displayProductsFromLocalStorages();

