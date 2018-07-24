console.log("hi");

function Building(ID, address, builder, date, apartmentsQuantity,
floorsQuantity, sizes, buildingFloorsSize, apartments) {
	this.ID = ID; 
	this.address = address, 
	this.builder = builder; 
	this.date = new Date(date);
	this.apartmentsQuantity = apartmentsQuantity;
	this.floorsQuantity = floorsQuantity;
	this.sizes = sizes;
	this.buildingFloorsSize = buildingFloorsSize;
	this.apartments = apartments;

	
	this.getID = function() {
		return this.ID;
	}
	
	this.getAddress = function() {
		return this.address;
	}
	
	this.getBuilder = function() {
		return this.builder;
	}
	
	this.getDate = function() {
		return this.date;
	}
	
	this.getFloorsNumber = function() {
		return this.floorsQuantity;
	}
	
	this.getSizes = function() {
		return this.sizes;
	}

	this.getBuildingFloorsSize = function() {
		return this.buildingFloorsSize;
	}

	this.setAddress = function(address) {
		this.address = address;
	}

	this.setBuilder = function(builder) {
		this.builder = builder;
	}
	
	this.setDate = function(date) {
		this.date = new Date(date);
	}
	
	this.setApartmentsQuantity = function(apartmentsQuantity) {
		this.apartmentsQuantity = apartmentsQuantity;
	}

	this.setFloorsQuantity = function(floorsQuantity) {
		this.floorsQuantity = floorsQuantity;
	}
	//apartments
	this.getApartments = function() {
		return this.apartments;
	}

	this.addApartment = function(apartment) {
		this.apartments.push(apartment);
	}

	this.createApartment = function(ID, roomsQty, floorSize,
	residentsQuantity, soldAt, floor) {
		this.apartments.push(new Apartment(ID, roomsQty, floorSize,
		residentsQuantity, soldAt, floor));
	}
	
	this.deleteApartment = function(ID) {
		var index = this.apartments.findIndex(function (element) {
 			return element.ID == ID;
		});
		
		this.apartments.splice(index,1);		
	}

	this.getLargestApartment = function() {
		var index = 0;
		for (var i = 1; i <= this.apartments.length - 1; i++) {
			if (this.apartments[i].floorSize > this.apartments[index].floorSize) {
				index = i;
			}
		}
		return this.apartments[index];
	}
		
	this.getNewestApartment = function() {
		var index = 0;
		for (var i = 1; i <= this.apartments.length - 1; i++) {
			if (this.apartments[i].soldAt > this.apartments[index].soldAt) {
				index = i;
			}
		}
		return this.apartments[index];
	}
	
	this.getApartmentsWithFloor = function(floorN) {
		
		return this.apartments.filter(function (element) {
 			return element.floor == floorN;
		});						
	}
	
	this.updateResidentsQty = function(ID,qty) {
		var apartment = this.apartments.find(function (element) {
 			return element.ID == ID;
		});
		apartment.residentsQuantity = qty;
	}


}


function Apartment(ID, roomsQty, floorSize,
residentsQuantity, soldAt, floor) {
	this.ID = String(ID);
	this.roomsQty = Number(roomsQty);
	this.floorSize = Number(floorSize);
	this.residentsQuantity = Number(residentsQuantity);
 	this.soldAt = new Date(soldAt);
  	this.floor = Number(floor);
}

function sortApartments(apartments, sortRule) {
		apartments.sort(function (element1,element2) {
 			return element1[sortRule] > element2[sortRule];
		});
		
}

function addFloor(building1, apartmentsCount, apartments) {
	building1.apartmentsQuantity += apartmentsCount;
	building1.floorsQuantity += 1;
		console.log(apartments);

	for (var i = 0; i < apartments.length; i++) {
		building1.apartments.push(new Apartment (
			apartments[i].ID,
			apartments[i].roomsQty,
			apartments[i].floorSize,
			apartments[i].residentsQuantity,
		 	apartments[i].soldAt,
		  	apartments[i].floor
		));
		
	}
}


var apartments = 
	[new Apartment('7', 3, 60, 2, '1980, 2', 4),
	new Apartment('9', 4, 90, 3, '1981, 3', 5),
	new Apartment('10', 4, 92, 3, '1980, 5', 5)
];

console.log(JSON.stringify(apartments))

var building = new Building(
	'55', 
	'aaaaa', 
	'SDF', 
	'1980, 1, 17, 3, 24, 0',
	22,
	2,
	[5,7,2],
	35,
	apartments
	);

console.log(JSON.stringify(building));

building.addApartment(new Apartment('6', 3, 60, 2, '1980, 2, 2', 4));
building.createApartment('5', 3, 65, 4, '1980, 2, 5', 4);
console.log(JSON.stringify(building));


building.deleteApartment('7');
console.log(JSON.stringify(building));

console.log(JSON.stringify(building.getLargestApartment()));

console.log(JSON.stringify(building.getNewestApartment()));

console.log(JSON.stringify(building.getApartmentsWithFloor(4)));

building.updateResidentsQty('6',7);
console.log(JSON.stringify(building.apartments));

addFloor(building, 4, [{'ID': 'a', 'roomsQty': '2', 'floorSize': '56', 
'residentsQuantity' : 0, 'soldAt' : '2017-10-22 22:22:22', apartmentsQty: 3},
 {'ID': 'a10', 'roomsQty' : '3', 'floorSize' : '75', 'residentsQuantity' : 0, 
 'soldAt' : null, apartmentsQty: 1}]);


sortApartments(building.apartments, 'ID');
console.log('ID\n' + JSON.stringify(building.apartments));
sortApartments(building.apartments, 'roomsQty');
console.log('sort roomsQty\n' + JSON.stringify(building.apartments));
sortApartments(building.apartments, 'floorSize');
console.log('sort IfloorSizeD\n' + JSON.stringify(building.apartments));
sortApartments(building.apartments, 'residentsQuantity');
console.log('sort residentsQuantity\n' + JSON.stringify(building.apartments));
sortApartments(building.apartments, 'soldAt');
console.log('sort soldAt\n' + JSON.stringify(building.apartments));


console.log((building));
//console.log(JSON.stringify(building.apartments));

