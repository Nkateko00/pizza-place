function OrderPizza() {

	const smallPrice = 35;
	const mediumPrice = 65;
	const largePrice = 85;

	let smallQty = 0;
	let mediumQty = 0;
	let largeQty = 0;

	function orderSmall(qty) {
		smallQty += Number(qty);
	}

	function orderMedium(qty) {
		mediumQty += Number(qty);
	}

	function orderLarge(qty) {
		largeQty += Number(qty);
	}

	function smallTotal() {
		return smallQty * smallPrice;
	}

	function mediumTotal() {
		return mediumQty * mediumPrice;
	}

	function largeTotal() {
		return largeQty * largePrice;
	}

	function total() {
		const total = smallTotal() + mediumTotal() + largeTotal();
		return total.toFixed(2);
	}

	return {
		orderSmall,
		orderMedium,
		orderLarge,
		smallTotal,
		mediumTotal,
		largeTotal,
		total
	}

}