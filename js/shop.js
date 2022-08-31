
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
products.forEach((product)=>{
    if(product.id== id){
        cartList.push(product)
    }
})
calculateTotal(id)

//Display number of item in shooping cart

let itemsInCart = document.getElementById('count_product');
itemsInCart.innerHTML = cartList.length;
}

// Exercise 2
function cleanCart() {
    cartList.length=0;
    total=0;

    //update innerHTML
    let cartItems = document.getElementById('cart_list')
    let totalCost = document.getElementById('total_price')
    cartItems.innerHTML = ''
    totalCost.innerHTML=0;
}

// Exercise 3
function calculateTotal(id) {
    // Calculate total price of the cart using the "cartList" array
    cartList.forEach((product)=>{
        if(product.id== id){
        total += product.price;
        }
    })
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart=[];
    
    cartList.forEach(product=>{
    //if cart is empty push the first item 
        if(cart.length>0){
            //I need to check if there is any reapeted item inside cartList
            let repeated = cart.includes(product)
            if(repeated == true){
                product.quantity ++;
            }else{
                product.quantity = 1;
                cart.push(product)
            }
        }
        else{
            product.quantity=1;
            cart.push(product);
        }
            });
    applyPromotionsCart()

}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach( item =>{
        if (item.id==1 && item.quantity>=3){
            item.subtotalWithDiscount=item.quantity*10;
            item.subTotal = item.subtotalWithDiscount
        }
        else if (item.id==3 && item.quantity>=10){
            item.subtotalWithDiscount = (item.quantity*((2/3)*item.price)).toFixed(2);
            item.subTotal = item.subtotalWithDiscount
        }  
        else{
            item.subTotal = item.quantity * item.price;
        }      
    });
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let cartItems = document.getElementById('cart_list')
    let totalCost = document.getElementById('total_price')
    let showTotal =0;
    cartItems.innerHTML = ''
    
    generateCart()
    cart.forEach((item)=>{
        cartItems.innerHTML += `
        <tr>
			<th scope="row">${item.name}</th>
			<td>$${item.price}</td>
			<td>${item.quantity}</td>
		    <td>$${item.subTotal}</td>
		</tr>
        `;
        showTotal+= item.subTotal;
    })
    totalCost.innerHTML=showTotal;

}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    products.forEach((product)=>{
        if(product.id == id){
            if(cart.length>0){
                //I need to check if there is any reapeted item inside cart
                let repeated = cart.includes(product)
                if(repeated == true){
                    product.quantity ++;
                }else{
                    product.quantity = 1;
                    cart.push(product)
                }
            }
            else{
                product.quantity=1;
                cart.push(product);
            }   
        }
    })
    

    //Display number of item in shooping cart

    let itemsInCart = document.getElementById('count_product');
        itemsInCart.innerHTML = cart.length;
    
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}