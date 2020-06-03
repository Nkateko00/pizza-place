describe("Pizza place", function() {

	it("should be able to order 1 small pizza", function() {
		const orderPizza = OrderPizza();
		orderPizza.orderSmall(1);
		assert.equal("35.00", orderPizza.total());

	});

	it("should be able to order 1 small and 1 medium pizza", function() {
		const orderPizza = OrderPizza();
		orderPizza.orderSmall(1);
		orderPizza.orderMedium(1);
		assert.equal("100.00", orderPizza.total());
	});

	it("should be able to order 2 small and 2 medium pizza2", function() {
		const orderPizza = OrderPizza();
		orderPizza.orderSmall(2);
		orderPizza.orderMedium(2);
		assert.equal("70.00", orderPizza.smallTotal());
		assert.equal("130.00", orderPizza.mediumTotal());
		assert.equal("0.00", orderPizza.largeTotal());
		assert.equal("200.00", orderPizza.total());
	});

	it("should be able to order 1 small, 1 medium & 1 large pizza", function() {
		const orderPizza = OrderPizza();
		orderPizza.orderSmall(1);
		orderPizza.orderMedium(1);
		orderPizza.orderLarge(1);
		assert.equal("185.00", orderPizza.total());
	});

});