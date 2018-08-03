function Pizza(size, stuffing) {
	this.arrStuffing = ['CHEESE', 'BACON', 'HAM'];
	this.arrSize = ['L','S'];
	this.arrTopping = ['MAYO','SPICE'];

	this.SIZE = 'S';
	this.CHEESE = 0;
	this.BACON = 0;
	this.HAM = 0;
	this.MAYO = 0;
	this.SPICE = 0;	

	if (typeof(size) != "string" || typeof(stuffing) != "string") {
		PizzaException('Invalid input');		
	} else {

		
		if (this.arrSize.indexOf(size) == -1)  {
			PizzaException('Invalid size');
		} else {
			this.SIZE = size;
		}
		

		stuffing = stuffing.replace(/\s+/g, '');
		var arr = stuffing.split(',');
		//console.log(arr);
		for (var i = 0; i < arr.length; i++) {
			if (arr[i]!='') {
				if (this.arrStuffing.indexOf(arr[i]) == -1) {
					PizzaException('Invalid stuffing');				
				} else {
					if (this[arr[i]] == 0) {
						this[arr[i]] = 1;
					} else {
						PizzaException(arr[i]+' already on pizza');
					}
				}
			}		
		}	
	}
	if (this.CHEESE + this.BACON + this.HAM < 1) {PizzaException('no stuffings')}
}

function PizzaException(err){
	console.log(err);
}

Pizza.prototype.addTopping = function (topping){
	if (this.arrTopping.indexOf(topping) == -1)  {
		PizzaException('Invalid Topping');
		return;
	}
	
	if (this[topping] == 1){
		PizzaException(topping +' already on pizza');
		return;
	}

	this[topping] = 1;
}

Pizza.prototype.removeTopping = function (topping){
	if (this.arrTopping.indexOf(topping) == -1)  {
		PizzaException('Invalid Topping');
		return;
	}
	
	if (this[topping] == 0){
		PizzaException(topping +' not on pizza');
		return;
	}

	this[topping] = 0;
}

Pizza.prototype.getToppings = function (){
	return [this.MAYO,this.SPICE];
}

Pizza.prototype.getSize = function (){
	return this.SIZE;
}

Pizza.prototype.getStuffing = function (){
	return [this.CHEESE, this.BACON, this.HAM];
}

Pizza.prototype.calculatePrice = function (){
	var price = this.CHEESE * 10 + this.BACON * 15 + this.HAM * 20 + this.MAYO * 10 + this.SPICE * 5;
	
	if (this.SIZE=='L') {price += 100;
	} else {price += 50;}

	return price;
}

Pizza.prototype.calculateCalories = function (){
	var calories = this.CHEESE * 100 + this.BACON * 150 + this.HAM * 200 + this.MAYO * 50;
	
	if (this.SIZE=='L') {calories += 1000;
	} else {calories += 500;}

	return calories;
}






var pizza = new Pizza('L',22)

pizza.addTopping('MAYO')
console.log(JSON.stringify(pizza));


function PizzaMargarita(size, stuffing) {
	Pizza.call(this, size, 'CHEESE,'+stuffing);
	this.SPICE = 1;
	this.addTopping = function (topping){
		PizzaException('impossible to execute');
	}
	this.removeTopping = function (topping){
		PizzaException('impossible to execute');
	}
}
PizzaMargarita.prototype = Object.create(Pizza.prototype);
PizzaMargarita.prototype.constructor = PizzaMargarita;

function PizzaBig(doubleMeat,stuffing) {
	Pizza.call(this, 'L', 'BACON,HAM,'+stuffing);
	this.SPICE = 1;
	this.MAYO = 1;

	if (typeof(doubleMeat) != "boolean") {
		PizzaException('Invalid doubleMeat');
		return;
	}
	
	if (doubleMeat){
		this.BACON = 2;
		this.HAM = 2;
	}	
}

PizzaBig.prototype = Object.create(Pizza.prototype);
PizzaBig.prototype.constructor = PizzaBig;

var pizzaBig = new PizzaBig(false);
pizzaBig.addTopping('MAYO');
console.log('Big '+ JSON.stringify(pizzaBig)+ ' calories '+ pizzaBig.calculateCalories());

var pizzaMargarita = new PizzaMargarita('S');
pizzaMargarita.addTopping('MAYO');
console.log('Margarita  ' + JSON.stringify(pizzaMargarita));