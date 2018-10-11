
$(document).ready(function() {
//10.1
	var Player = function(name){
		this.name = name;
		this.point = 0;
		this.play =function(){
			this.point++;
		}		
	}

	var Score = {
		
		freshScore: function(name1,score1,name2,score2,time){
			$('#gameScore').text(name1+'('+score1+') : '+name2+'('+score2+') -- '+time);
		},
		
		startTime:function(){
			//console.log($("#timerSelect").val());
			this.timerId = setTimeout(function(){
				Mediator.finish();
				console.log ('end');
			}, 1000 * $("#timerSelect").val() );
		},
	}

	var Game = {
		start: function(){
			$("#startGame").hide();
			$("#finishGame").show();
			Mediator.start();
			$(document).on('keyup', function(key) {
				if (key.which === 48 || key.which === 49 || key.which === 96 || key.which === 97) {
					Mediator.play(key.which);
				}
			});
		},
		finish:function(){
			$("#startGame").show();
			$("#finishGame").hide();
			$(document).off('keyup');
			
		},
	}

	var Mediator = {
		//player1: null,
		//player2: null,

		start: function(){
			this.player1 = new Player($("#Player1").val());			
			this.player2 = new Player($("#Player2").val());
			//console.log (this.player1.name);
			
			Score.startTime();
			var time = $("#timerSelect").val();
			Score.freshScore(this.player1.name, this.player1.point, this.player2.name, this.player2.point, time);
			time--;
			this.timerId = setInterval(function(){
				console.log (time);
				Score.freshScore(Mediator.player1.name, Mediator.player1.point, 
					Mediator.player2.name, Mediator.player2.point, time);
				time--;
				if (time==0) clearInterval(this.timerId);
			},1000);
		},

		finish: function(){
			clearTimeout(this.timerId);
			clearInterval(Score.timerId);
			var text;
			if (this.player1.point > this.player2.point) {
				text = this.player1.name + ' won | ' + this.player2.name + ' lost ('
				+ this.player1.point + ':' + this.player2.point +')';

			} if (this.player1.point < this.player2.point){
				text = this.player2.name + ' won | ' + this.player1.name + ' lost ('
				+ this.player2.point + ':' + this.player1.point +')';
			}else {
				text = this.player2.name + ' draw | ' + this.player1.name + ' draw ('
				+ this.player2.point + ':' + this.player1.point +')';
			}
			
			var history =[];
			history.push(localStorage.getItem('history'));
			if (history != []) {
				console.log(history);
			} else {
				console.log('no history in localStorage');
			}	
			history.push(text);
			localStorage.setItem('history',history);
			alert(text);
			Game.finish();			
		},

		play: function(key){
			if (key == 48 || key == 96)	{
				this.player1.play();
			} else this.player2.play();		
		}
	}

	


	$("#startGame").click(function() {
		Game.start();
	});
	$("#finishGame").click(function() {
		Mediator.finish();
	});

	$("#history").click(function() {
		var history = localStorage.getItem('history');
		if (history != []) {
			console.log(history);
		} else {
			console.log('no history in localStorage');
		}		
	});

//10.2.
	var Ajax = function(url,tipe){
		console.log('ajax');
		var obj;
		$.ajax({
			url: url,
			async: false,
			dataType: tipe,
			success: function(data){
				obj = data;
			},
			type: 'GET'
		});
		return obj;
	}

	var ProxyAjax = function(url,tipe){
		console.log('proxy');
		this.cache = {};
		this.lastRequest = [];
		if (/([a-z0-9][a-z0-9\-\.]{1,255})@[a-z0-9\.!\$%&'\*\+\/=\?\^_\-]{1,15}\.[a-z]{1,5}/i.test(url)){
			console.log("URL contain email");
			return null;
		} if (new Date - this.lastRequest[url] < 60000) {
			return this.cache[url];
		} else {
			this.lastRequest[url] = new Date;
			this.cache[url] = Ajax(url,tipe);
			return this.cache[url];
		}
	}

	$('#proxy').click(function(){
		console.log(ProxyAjax('ajax/json_response.json','json'));
		console.log(ProxyAjax('ajax/json_res@ponse.json'));
		console.log(ProxyAjax('ajax/html_response.html','html'));
	});




});