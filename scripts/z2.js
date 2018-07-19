var arr = [7,'0',4,true,0,false,'book'];

function find(a,v) 
{
	for (var i = 0; i < a.length; i++) 
	{
		if (a[i]===v) 
			{
				return i;				
			}
	}
	return -1;
}

console.log(find(arr,0));

arr = [7,8,4,9,5,1,6,2,3,0];

function filterRange(a, b, c)
{
	var aaa = [];
	for (var i = 0; i < a.length; i++) 
	{
		if ((b<=a[i])&&(a[i]<=c))
			{
				aaa.push(a[i]);				
			}
	}
	return aaa;
}

console.log(filterRange(arr, 2, 4));

var tob ={};

tob.readValues = function(an,a,bn,b)
{
	console.log(a+','+b);
	Object.defineProperty(tob, an, {value: a});
	Object.defineProperty(tob, bn, {value: b});
}  

tob.readValues('pr1',5,'pr2',8);
console.log(tob.pr2);

tob.sum = function(a,b)
{
	return a+b;
}
console.log(tob.sum(3,3));

tob.mul = function(a,b)
{
	return a*b;
}
console.log(tob.mul(3,3));

tob.max = function(a,b)
{
	return (a>=b? a:b);
}

console.log(tob.max(5,2));
console.log(tob.max(5,6));