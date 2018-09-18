
        
function navigate(action) {
	switch(action){
		case 'reload':
		location.reload(true);
		break;
		
		case 'open_new': 		
        var newWindow = window.open("lecture_7_new2.html", "MyNewWindow");
        newWindow.focus();
               
        newWindow.onload = function () {
            console.log("onload");
            var newElem = newWindow.document.createElement("p");
                newElem.innerHTML = "New text!";
                newWindow.document.body.appendChild(newElem);
        };

        setTimeout(function() {newWindow.close();}, 5000);
   		break;
		
		case 'back':
		window.history.back();
		break;
		
		case 'update_iframe':
		document.getElementById('iframe1').src = 'lecture_7_new2.html';
		break;

		default:
		alert(screen.width + 'x' + screen.height + '\n' + navigator.userAgent);
	}
}

function changeValue() {
	var text = document.getElementById('input1').value;
	document.getElementById('input1').value = document.getElementById('input2').value;
	document.getElementById('input2').value = text;
}

function toggleInput() {
	if (document.getElementById('input3').disabled) {
		document.getElementById('input3').disabled = false;
		document.getElementsByTagName('button')[1].textContent = 'Block';
	} else {
		document.getElementById('input3').disabled = true;
		document.getElementsByTagName('button')[1].textContent = 'Unblock';
	}	
}

function CreateDOM (newElement,newElementJSON,elements) {
 	var elem = document.createElement(newElement);
 	for (var key in newElementJSON) {
 	    elem[key]=newElementJSON[key];
 	}
 	if (elements!=undefined) { 
 	 	for (var i = 0; i < elements.length; i++) {
 	 	 	elem.appendChild(elements[i]);
 	 	} 
 	}
 	return elem; 	
} 


function searchElements(selector, context) {
 	if (context===undefined){context=document;}
 	//console.log(context);
 	if (selector.charAt(0)=='.') {
 		return context.getElementsByClassName(selector.substring(1));
 	} else if (selector.charAt(0)=='#') {
 		return document.getElementById(selector.substring(1));
 	} else {
 		return context.getElementsByTagName(selector);
 	}
} 

function advancedSearchElements(selector, context) {
	if (context===undefined){context=document;}
	return context.querySelectorAll(selector);
}
//navigate('open_new');
document.body.appendChild(CreateDOM('div',{ textContent: "myElem", style: "background:#ccc" },));

document.body.appendChild(CreateDOM('li',{ class: "store" },[CreateDOM('a',{href: "#", textContent: "Cull Store"})]));
/*
<div id= "header" >
	<div class= "container" >
		<h1 class= "logo" >
			<a href= "#" title= "Link" >
				<img src= "files/itcc-logo.jpg" style= "width: 50%;" >
			</a>
		</h1>
		<div id= "nav" class= "default" >
			<ul class= "list" >
				<li class= "store" >
					<a href= "#" > Store </a>
				</li>
				<li class= "store" >
					<a href= "#" > Store </a>
				</li>
				<li class= "store" >
					<a href= "#" > Cull Store </a>
				</li>
			</ul>
		</div>
	</div>
</div>
5. Search*/