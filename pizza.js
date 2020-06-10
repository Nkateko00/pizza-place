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
const totalPrice =  document.querySelector(".totalPrice");

const smallQty =  document.querySelector(".smallQty");
const mediumQty = document.querySelector(".mediumQty");
const largeQty =  document.querySelector(".largeQty");

const orderPizza = OrderPizza();

orderSmallPizza.addEventListener('click', function(e){

	orderPizza.orderSmall( smallQty.value);
	smallTotalPrice.innerHTML = orderPizza.smallTotal();
	totalPrice.innerHTML = orderPizza.total();
 
});

orderMediumPizza.addEventListener('click', function(e){
	orderPizza.orderMedium(mediumQty.value);
	mediumTotalPrice.innerHTML = orderPizza.mediumTotal();
	totalPrice.innerHTML = orderPizza.total();
});

orderLargePizza.addEventListener('click', function(e){
	orderPizza.orderLarge(largeQty.value);
	//get the value  inserted
	largeTotalPrice.innerHTML = orderPizza.largeTotal();
	//adding to the value received to the large total method
	totalPrice.innerHTML = orderPizza.total();
	//adding to the value received to the overall total method
});