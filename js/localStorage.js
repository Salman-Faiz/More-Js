const storeProducts = () =>{

    const productField = document.getElementById('productField').value;

    const quantityField = document.getElementById('quantityField').value;

    // console.log(productField,quantityField)

    const productList = document.getElementById('productList');
    const li =document.createElement('li')
    li.innerText=`${productField} : ${quantityField}`
    productList.appendChild(li);
    productField = '';
    quantityField = '';
}