var dt = new Date(1980, 11, 17, 3, 24, 0, 0);
//console.log(dt);

var building = 
{
	ID: '55', 
	name: 'aaaaa', 
	builder: 'SDF', 
	date: new Date(1980, 11, 17, 3, 24, 0),
//	date: dt,
	apartmentsQuantity: 22,
	floorsQuantity: 2,
	sizes: [5,7,2],
	buildingFloorsSize: 35,
}

function getID(b) 
{
	return b.ID;
}
console.log(getID(building));

function getAddress(b) 
{
	return b.name;
}
console.log(getAddress(building));

function getBuilder(b) 
{
	return b.builder;
}
console.log(getBuilder(building));


function getDate(b) 
{
	return b.date;
}
console.log(getDate(building));

function getFloorsNumber(b) 
{
	return b.floorsQuantity;
}
console.log(getFloorsNumber(building));

function getSizes(b) 
{
	return b.sizes;
}
console.log(getSizes(building));

function getBuildingFloorsSize(b) 
{
	return b.buildingFloorsSize;
}
console.log(getBuildingFloorsSize(building));

function setAddres(b,a) 
{
	b.name = a;
}
setAddres(building,'bbbb');
console.log(building.name);

function setBuilder(b,a) 
{
	b.builder = a;
}
setBuilder(building,'TNK');
console.log(building.builder);

function setDate(b,a) 
{
	b.date = new Date(a);
}

setDate(building,'1975');
console.log(building.date);

function setApartmentsQuantity(b,a) 
{
	b.apartmentsQuantity = a;
}

setApartmentsQuantity(building,50);
console.log(building.apartmentsQuantity);

function setFloorsQuantity(b,a) 
{
	b.floorsQuantity = a;
}

setFloorsQuantity(building,10);
console.log(building.floorsQuantity);
