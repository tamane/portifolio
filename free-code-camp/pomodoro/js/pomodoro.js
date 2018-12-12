// JavaScript Document
// freeCodeCamp Challenge - Pomodoro Clock
// Code by André Tamane
// March 2018

$( document ).ready(function() {
	
	var x;
	var hours;
	var minutes;
	var seconds;
	var stoppedValue;
	
	/////////////******START BUTTON FUNCTIONS******////////////
	
	$('#start').click(function(){
		
		$(this).prop("disabled",true);
		
		//BOMB HAS BEEN PLANTED!//
		var audioElement = document.createElement('audio');
		audioElement.setAttribute('src', 'https://www.myinstants.com/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3');
		audioElement.play();
		
		// Sum minutes + hours inputed by user
		var userInput = $('#userInMin').val();
						
		// Set current time
		var current = new Date();
		
		// Add minutes to the current time
		current.setMinutes(current.getMinutes() + parseInt(userInput));
		
		// Set the time we're counting down to
		var countDownDate = current;
					
		// Update the count down every 1 second
		x = setInterval(function() {

			// Get now time
			var now = new Date().getTime();
			

			// Find the distance between now and the countdown time
			var distance = countDownDate - now;

			// Time calculations for minutes and seconds
			hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			seconds = Math.floor((distance % (1000 * 60)) / 1000);
			
			// Display the result in the element with id="result"

			if (minutes < 10 && seconds > 9){
				$('#result').text(hours + ' : 0' + minutes + ' : ' + seconds);
			}
			
			else if (minutes < 10 && seconds < 10){
				$('#result').text(hours + ' : 0' + minutes + ' : 0' + seconds);
			}
			
			else { $('#result').text(hours + ' : ' + minutes + ' : ' + seconds); }

			// If the count down is finished, write some text 
			if (distance === 0) {
				clearInterval(x);
				times_up();
			}
		}, 1000);
	});
	
	
	/////////////******STOP BUTTON FUNCTIONS******////////////
	$('#stop').click(function(){
		
		stoppedValue = $('#result').text();
		
		$('#start').css('display','none');

		$('#resume').css('display','inline-block').prop("disabled",false);
				
		clearInterval(x);
		
	});
	
	/////////////******RESUME BUTTON FUNCTIONS******////////////
	$('#resume').click(function(){
		
		$(this).prop("disabled",true);
		
		//Stopped value length
		var svl = stoppedValue.length - 1;
		
		//Get the stopped Hour/Minute/Second 
		hours = stoppedValue.charAt(svl - 10);
		minutes = stoppedValue.charAt(svl - 6) + stoppedValue.charAt(svl - 5);
		seconds = stoppedValue.charAt(svl - 1) + stoppedValue.charAt(svl);
		
		//Transform all in seconds
		//Sum to current time
		var current = new Date();		
		var cHour = hours * 3600;
		var cMin = minutes * 60;
		current.setSeconds(current.getSeconds() + parseInt(seconds) + parseInt(cHour) + parseInt(cMin));
				
		var countDownDate = current;
		
		x = setInterval(function() {

			// Get now time
			var now = new Date().getTime();

			// Find the distance between now and the countdown time
			var distance = countDownDate - now;

			// Time calculations for minutes and seconds
			hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Display the result in the element with id="result"
			$('#result').text(hours + ' : ' + minutes + ' : ' + seconds);

			// If the count down is finished, write some text 
			if (distance === 0) {
				clearInterval(x);
				times_up();
			}
		}, 1000);		
		
	});
	
	
	/////////////******RESET BUTTON FUNCTIONS******////////////
	$('#reset').click(function (){
		
		clearInterval(x);
		$('#start').css('display','inline-block').prop("disabled",false);
		$('#resume').css('display','none');
		hours = 0;
		minutes = 0;
		seconds = 0;
		stoppedValue = 0;
		$('#result').text('0 : 25 : 00');
		
	});
	
	/////////////******POMODORO BUTTON FUNCTIONS******////////////
	$('#pomodoro_btn').click(function(){
		
		clearInterval(x);
		$('#pomodoro').css('display','block');
		$('#short_break').css('display','none');
		$('#long_break').css('display','none');
		$('body').css({'background-color':'#88bce6','transition':'background-color 0.5s ease'});
		$('#controls').fadeIn();
		$('#short_btn').removeClass('active');
		$('#long_btn').removeClass('active');
		$(this).addClass('active');
	});
	
	/////////////******SHORT BREAK BUTTON FUNCTIONS******////////////
	$('#short_btn').click(function(){
		
		clearInterval(x);
		$('#pomodoro').css('display','none');
		$('#short_break').css('display','block');
		$('#long_break').css('display','none');
		$('body').css({'background-color':'#ffedae','transition':'background-color 0.5s ease'});
		$('#controls').fadeOut();
		$('#pomodoro_btn').removeClass('active');
		$('#long_btn').removeClass('active');
		$(this).addClass('active');
		$('#long_result').text('10 : 00');
		$('#start').css('display','inline-block').prop("disabled",false);
		$('#resume').css('display','none');
		hours = 0;
		minutes = 0;
		seconds = 0;
		stoppedValue = 0;
		$('#result').text('0 : 25 : 00');
		
		// Set current time
		var current = new Date();
		
		// Add minutes to the current time
		current.setMinutes(current.getMinutes() + 5);
		
		// Set the time we're counting down to
		var countDownDate = current;
					
		// Update the count down every 1 second
		x = setInterval(function() {

			// Get now time
			var now = new Date().getTime();
			
			// Find the distance between now and the countdown time
			var distance = countDownDate - now;

			// Time calculations for minutes and seconds
			minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Display the result in the element with id="result"
			$('#short_result').text('0' + minutes + ' : ' + seconds);

			// If the count down is finished, write some text 
			if (distance === 0) {
				clearInterval(x);
				times_up();
			}
		}, 1000);
	});
	
	/////////////******LONG BREAK BUTTON FUNCTIONS******////////////
	$('#long_btn').click(function(){
		
		clearInterval(x);
		$('#pomodoro').css('display','none');
		$('#short_break').css('display','none');
		$('#long_break').css('display','block');		
		$('body').css({'background-color':'rgb(174, 255, 203)','transition':'background-color 0.5s ease'});
		$('#controls').fadeOut();
		$('#pomodoro_btn').removeClass('active');
		$('#short_btn').removeClass('active');
		$(this).addClass('active');
		$('#short_result').text('05 : 00');
		$('#start').css('display','inline-block').prop("disabled",false);
		$('#resume').css('display','none');
		hours = 0;
		minutes = 0;
		seconds = 0;
		stoppedValue = 0;
		$('#result').text('0 : 25 : 00');
		
		// Set current time
		var current = new Date();
		
		// Add minutes to the current time
		current.setMinutes(current.getMinutes() + 10);
		
		// Set the time we're counting down to
		var countDownDate = current;
					
		// Update the count down every 1 second
		x = setInterval(function() {

			// Get now time
			var now = new Date().getTime();
			
			// Find the distance between now and the countdown time
			var distance = countDownDate - now;

			// Time calculations for minutes and seconds
			minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Display the result in the element with id="result"
			$('#long_result').text('0' + minutes + ' : ' + seconds);

			// If the count down is finished, write some text 
			if (distance === 0) {
				clearInterval(x);
				times_up();
			}
		}, 1000);
	});
	
	
	////TIME'S UP FUNCTION////
	function times_up(){
		$( "#times_up" ).animate({
			width: 'linear',
			height: 'toggle'
		}, { 
			duration: 1000,
			specialEasing: {
				width: "linear",
				height: "easeOutBounce"
		},
		});		
	}
	
	$('#times_up').click(function(){
		$(this).slideUp();
	});
	
});