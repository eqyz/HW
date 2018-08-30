/*
var text1 = prompt('Input HEX COLOR', '#');
var HEX_COLOR = /^#(?:[\da-f]{3})(?:[\da-f]{3})?$/i;
console.log(text1+' HEX COLOR ' + HEX_COLOR.test(text1));

var text2 =  prompt('Input DATE', '');
var DATE = /^(?:[0-2]\d|3[0-1])\/[0-1]\d\/(?:19\d\d|[2-9]\d{3})$/;
console.log(text2+' DATE ' + DATE.test(text2));

var text3 =  prompt('Input PASSWORD', '');
var PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
console.log(text3+' PASSWORD ' + PASSWORD.test(text3));

var text4 =  prompt('Input MAC address', '');
var MAC = /^(?:[\da-f]{2}:){5}(?:[\da-f]{2})$/i;
console.log(text4+' MAC address ' + MAC.test(text4));
*/
var text5 =  prompt('Input IP address', '');
var IP = /^(?:2(?:5[0-5]|[0-4]\d)|[01]?\d?\d)(?:\.(?:2(?:5[0-5]|[0-4]\d)|[01]?\d?\d)){3}$/;
console.log(text5+' IP address ' + IP.test(text5));
/*
var text6 =  prompt('Input GUID', '');
var GUID = /^(?=\{?(?:[\da-f]{8})-(?:[\da-f]{4}-){3}(?:[\da-f]{12})\}?)(?:.{36}|.{38})$/i;
console.log(text6+' GUID ' + GUID.test(text6));

var text7 =  prompt('Input URL', '');
var URL = /^(?:https?:\/\/)?(?:[a-z]{2,}\.)?[a-z]+\-?[a-z]+\.[a-z]{2,}(?:(?:#|\/)[\da-z/%_.?=&#-]*)?$/i;
console.log(text7+' URL ' + URL.test(text7));

function TemplateEngine (temp,obj){
	return temp.replace(/\{{2}.+?\}{2}/g, function(text){
		//console.log(text+' ddd');
		var key = text.replace(/\{|\}/g,'');
		return obj[key];
	});
}

console.log(TemplateEngine('N {{name}} A {{age}} D {{date}}',{date: 2018, name: 'rik', age: 3}));
*/