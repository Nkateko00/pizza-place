const showCartLink = document.querySelector('.showCart');
const cart = document.querySelector('.cart');
const hideCartBtn = document.querySelector('.hideCartBtn');

const orderSmallPizza = document.querySelector('.orderSmallPizza');
const orderMediumPizza = document.querySelector('.orderMediumPizza');
const orderLargePizza = document.querySelector('.orderLargePizza');
const grandTotalElem = document.querySelector('.grandTotal');

const smallTotalPrice =  document.querySelector(".smallTotalPrice");
const mediumTotalPrice = document.querySelector(".mediumTotalPrice");
const largeTotalPrice =  document.querySelector(".largeTotalPrice");

const smallQty =  document.querySelector(".smallQty");
const mediumQty = document.querySelector(".mediumQty");
const largeQty =  document.querySelector(".largeQty");


orderSmallPizza.addEventListener('click', function(e){
	alert("order small pizza : " + smallQty.value);
});

orderMediumPizza.addEventListener('click', function(e){
	alert("order medium pizza : " + mediumQty.value);
});

orderLargePizza.addEventListener('click', function(e){
	alert("order large pizza : " + largeQty.value);
});
