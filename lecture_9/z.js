var MyFun = {};
$(document).ready(function() {
//9.1.
	var images = [{src : "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160" }, 
	{src : "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg" , width: "320" , height: "195" }, 
	{src : "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg" , width: "500" , height: "343" }];

	document.getElementById('show-image').onclick = function () {
		var container = document.getElementById('image-container');
		if (container.firstChild) {
		    container.removeChild(container.firstChild);
		}
		var img = document.createElement('IMG');
		var rnd = Math.floor(Math.random()*2.99);
		for (var key in images[rnd]) {
	 	    img[key]=images[rnd][key];
	 	}
		console.log('show-image onclick'+rnd);
		document.getElementById('image-container').appendChild(img);
	}

//9.2.
	login = function (event) {
		event.preventDefault();
		var email = document.getElementById("email").value;
		var password = document.getElementById("pwd").value;
		//console.log(email+/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/i.test(email));
		//console.log(password+/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/.test(password));

		if ((/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/.test(email))&&(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/.test(password))) {
			console.log('Login successful');
		} else {
			console.log('Invalid input!');
		} 
	}
	document.getElementById("my_form1").addEventListener("submit", login);
//9.3.
	document.getElementById('ajax-html').onclick = function () {
		var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
		var xhr = new XHR();
		xhr.open('GET', 'ajax/html_response.html', true);

		xhr.onload = function() {
			alert( this.responseText );
		}

		xhr.onerror = function() {
			alert( 'error ' + this.status );
		}

		xhr.send();
		/*var xhr = new XMLHttpRequest();
		xhr.open('GET', 'ajax/html_response.html', true);
		xhr.send();

		xhr.onreadystatechange = function() { 
			console.log(xhr.readyState+':::'+xhr.status);
			if (xhr.readyState == 4) {			
				if (xhr.status == 200) {
				document.getElementById("js-ajax-container").innerHTML = xhr.responseText;
				} else {
				console.log(xhr.status + ': ' + xhr.statusText);
				}
			}
		}*/
		
	}
//9.4.
	$('#cars').change(function() {
      console.log("selected " + this.value);
    });
//9.5.
    $('#task-5 th,td').mouseenter(function(){
	    $(this).css("background-color", "gray");
	});
	$('#task-5 th,td').mouseleave(function(){
	    $(this).css("background-color", "");
	});
//9.6.
	$('#do-once').one('click',function(){
		console.log('click '+'do-once');
	});
	var clickCount=0;
	$('#do-twice').on('click',function(){
		console.log('click '+'do-twice');
		clickCount++;
		if (clickCount==2) {$('#do-twice').off('click')} 
	});
//9.7.					
	$('#jquery-ajax-html').click(function(){
		//$('#jquery-ajax-container').load('ajax/html_jquery_response.html');
		$.ajax({
			type: "GET",
			url: "ajax/html_jquery_response.html",
			dataType: "html"
		}).done(function( html ) {
			$("#jquery-ajax-container").append(html);
		});		
	});
//9.8.	
	$("#ajax-URL").click(function() {
		
	});
});