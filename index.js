var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 //item.push({item:Math.floor(Math.random()*51)})
 var element={itemName:item,itemPrice: Math.floor(Math.random()*101)}
 cart.push(element)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var answer="In your cart, you have"
  for (var i = 0; i < cart.length-1; i++) {
    answer = answer + ` ${getCart()[i].itemName} at ${cart[i].itemPrice},`
  }
  answer = answer + ` ${getCart()[i].itemName} at ${cart[i].itemPrice}.`
  return answer
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
