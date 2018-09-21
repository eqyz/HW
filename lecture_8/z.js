var selectbox = { "id": "cars",
	"options": [ {"text": "Volvo", "value": "volvo"},
	{"text": "Saab", "value": "saab"},
	{"text": "Mercedes", "value": "mercedes"},
	{"text": "Audi", "value": "audi"} ],
	"selected": "audi" };
/*function changeValue() {
 	var text = $('#input1').val();
	$('#input1').val($('#input2').val());
	$('#input2').val(text);
} 

$(function() {
	$("#task-1 button").on("click", function() {    
        var text = $('#input1').val();
		$('#input1').val($('#input2').val());
		$('#input2').val(text);
    });
   
});*/

var MyFunctions = {};

$(function() {

//8.1. Change inputwith jQuery
    MyFunctions.changeValue = function () {
    	var text = $('#input1').val();
		$('#input1').val($('#input2').val());
		$('#input2').val(text);
    };
//8.2.
    $("#task-2 input").on("click", function() {
    	if ($("#switcher-expand").prop("checked")){
    		$("#block-1 p").show();
    	} else {
    		$("#block-1 p").hide();
    	}
    });

//8.3.
	function createSelectBox(selectbox) {
	 	var $sb = $('<select></select>');
	 	$sb.attr('id',selectbox.id);
	 	
	 	for (var i = 0; i < selectbox.options.length; i++) {
	 		if (selectbox.options[i].value==selectbox.selected) {
	 			$sb.append('<option value = "'+selectbox.options[i].value+'" selected>'+selectbox.options[i].text+'</option>');
	 		} else {
	 			$sb.append('<option value = "'+selectbox.options[i].value+'">'+selectbox.options[i].text+'</option>');
	 		} 
	 	}
	 	
	 	return $sb;
	}
	
	function copySelectBox(sb, parameters) {
		$sb=$(sb).clone();
		$sb.attr(parameters);
		/*for (var key in parameters) {
			$sb.attr(key,parameters[key]);
			console.log(key+'  '+parameters[key]); 
		}*/
		return $sb;
	} 
	
	var sb = createSelectBox(selectbox);
	$("#task-3").append(sb);

	var parameters = {"id" : "cars-copy-1", "selected": "mercedes"};
	sb = copySelectBox('#cars', parameters);
	$("#task-3").append(sb);

	console.log(sb.attr('id'));

	function deleteOption(option, sb){
		if (sb===undefined) {
			$('select > option[value="'+option+'"]').remove();
		} else {
			$('select#'+sb.attr('id')+' > option[value="'+option+'"]').remove();
		}		
	}
	deleteOption('audi',sb);
	deleteOption('volvo');
//8.4.

//console.log('156.75m^2'.replace(/^(\d+).*/,"$1"));
//console.log('156.75m^2'.replace(/.*(?:\.|,)(\d+).*/,"$1"));
//console.log('156.75m^2'.replace(/.*(\.|,).*/,"$1"));
//console.log('156.75m^2'.replace(/.*([a-z]+)\^.*/,"$1"));
//console.log('156.75m^2'.replace(/.*(\d+)$/,"$1"));

	function renderBuildingFloorsSize (){
		$('[class="floors-size"][data-size]').each(function(i,elem){
			var dataSize = $(this).attr('data-size');
			if (dataSize!=undefined) {
				$(this).prop('textContent','');
				$(this).append($('<span class="floor-size-int">'+dataSize.replace(/^(\d+).*/,"$1")+'</span>'));
				if (/.*(\.|,).*/.test(dataSize)) {
					$(this).append($('<span class="floor-size-sep">'+dataSize.replace(/.*(\.|,).*/,"$1")+'</span>'));
					$(this).append($('<span class="floor-size-frac">'+dataSize.replace(/.*(?:\.|,)(\d+).*/,"$1")+'</span>'));
				} else {
					$(this).append($('<span class="floor-size-sep"></span>'));
					$(this).append($('<span class="floor-size-frac"></span>'));	
				}
				
				$(this).append($('<span class="floor-size-measurement">'+dataSize.replace(/.*([a-z]+)\^.*/,'$1')+
				'<sup>'+dataSize.replace(/.*(\d+)$/,"$1")+'</sup></span>'));
			} 
		});
	}
	renderBuildingFloorsSize();

//8.5.	
console.log($('#task-5 > .house').children());
	function getQueryString(selector){
		var str ='';
		$(selector).children().each(function(i,elem){
			if (i>0) {str +='&'}
			str += $(elem).attr('data-name')+'=';
			$(elem).children().each(function(i,elem){
				if (i>0) {str +=','}
				str += $(elem).attr('data-value');
			});		
		});
		return str.replace(/ /g,'%20');
	}
	console.log(getQueryString('.house'));

//8.6.
	(function( $ ) {
		$.fn.getQueryString = function() {
			var str ='';
			$(this).children().each(function(i,elem){
				if (i>0) {str +='&'}
				str += $(elem).attr('data-name')+'=';
				$(elem).children().each(function(i,elem){
					if (i>0) {str +=','}
					str += $(elem).attr('data-value');
				});		
			});
			return str.replace(/ /g,'%20');
		};
	})(jQuery);
	console.log($('.house').getQueryString());


});