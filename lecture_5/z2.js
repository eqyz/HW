function CoffeeMachine (power) {
	var waterAmount = 0 ;
	var WATER_HEAT_CAPACITY = 4200 ;
	
	this.getTimeToBoil = function () {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}
			
	this.setWaterAmount = function (amount) {
	waterAmount = amount;
	};
}

CoffeeMachine.prototype.run = function() {
	setTimeout(function () {
			alert( 'Cofee ready!!' );
		}, this.getTimeToBoil());
}


var coffeeMachine = new CoffeeMachine( 10000 );

//console.log(JSON.stringify(coffeeMachine));
coffeeMachine.setWaterAmount( 50 );
coffeeMachine.run();

