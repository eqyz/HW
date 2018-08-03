var d = Date();
var bl = Boolean(true);
var str = '4';
var n = Number(4);
var nl = null;
var un = undefined;

console.log(2+5+' '+typeof(2+5));

console.log(n+' '+typeof(n));
console.log(d+' '+typeof(d));
console.log(bl+' '+typeof(bl));
console.log(str+' '+typeof(str));
console.log(nl+' '+typeof(nl));
console.log(un+' '+typeof(un));

var book = {name : 'manual', price : 12};

for (var x in book) 
{
console.log(typeof(book[x]));
}

var aaa =[7,"f",4,true];
for (var x in aaa) 
{
console.log(typeof(aaa[x]));
}
function proc(n1,n2)
{
	return 100*n1/n2+'%';
} 


console.log(proc(3,4)+typeof(proc(3,4)));

