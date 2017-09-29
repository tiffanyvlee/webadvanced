var space = '',
	shoot = '.',
	addShoot = '🔥',
	fire = '',
	addFire = '.🔥.';

var bass01 = new Audio('media/audio/bass01.wav'),
	bass02 = new Audio('media/audio/bass02.wav'),
	bowbeep= new Audio('media/audio/bowbeep.wav'),
	kick01= new Audio('media/audio/kick01.wav'),
	kick02= new Audio('media/audio/kick02.wav'),
	kick03= new Audio('media/audio/kick03.wav'),
	kick04= new Audio('media/audio/kick04.wav'),
	doublekick = new Audio('media/audio/doublekick.wav'),
	yeah= new Audio('media/audio/yeah.wav');


var css1 = "text-shadow:  1px 1px hsl(5.4, 100%, 50%), 3px 2px hsl(10.8, 100%, 50%), 5px 3px hsl(16.2, 100%, 50%), 7px 4px hsl(21.6, 100%, 50%), 9px 5px hsl(27, 100%, 50%), 11px 6px hsl(32.4, 100%, 50%), 13px 7px hsl(37.8, 100%, 50%), 14px 8px hsl(43.2, 100%, 50%), 16px 9px hsl(48.6, 100%, 50%); color: #FFF; font-size: 32px;";

var css2 = "text-shadow: -1px 1px hsl(5.4, 100%, 50%), -3px 2px hsl(10.8, 100%, 50%), -5px 3px hsl(16.2, 100%, 50%), -7px 4px hsl(21.6, 100%, 50%), -9px 5px hsl(27, 100%, 50%), -11px 6px hsl(32.4, 100%, 50%), -13px 7px hsl(37.8, 100%, 50%), -14px 8px hsl(43.2, 100%, 50%), -16px 9px hsl(48.6, 100%, 50%); color: #FFF; font-size: 10px;";

var css3 = "text-shadow:  1px 1px hsl(5.4, 100%, 50%), 3px 2px hsl(10.8, 100%, 50%), 5px 3px hsl(16.2, 100%, 50%), 7px 4px hsl(21.6, 100%, 50%), 9px 5px hsl(27, 100%, 50%), 11px 6px hsl(32.4, 100%, 50%), 13px 7px hsl(37.8, 100%, 50%), 14px 8px hsl(43.2, 100%, 50%), 16px 9px hsl(48.6, 100%, 50%); color: #FFF; font-size: 12px;";

var css4 = "text-shadow: -1px 1px hsl(5.4, 100%, 50%), -3px 2px hsl(10.8, 100%, 50%), -5px 3px hsl(16.2, 100%, 50%), -7px 4px hsl(21.6, 100%, 50%), -9px 5px hsl(27, 100%, 50%), -11px 6px hsl(32.4, 100%, 50%), -13px 7px hsl(37.8, 100%, 50%), -14px 8px hsl(43.2, 100%, 50%), -16px 9px hsl(48.6, 100%, 50%); color: #FFF; font-size: 2px;";



$(function () { 

	$('.remove').click(function() {
		yeah.play();
		$(".remove").remove();


	});

	$('.face').mousedown(function() {
		var fireTimer00 = 0;

			for (var i = 0; i < 60; i++) {

			    setTimeout(function() { 

			        var fire = "";

			        for (var j = 0; j < 3; j++) { 

			            var fireOrspace = Math.random()*100; 

			            if (fireOrspace < 90) {
			                fire+= addFire; 
			            }else if (fireOrspace > 2 && fireOrspace < 2){
			                fire += ""; 
			            }else {
			                fire += ""; 
			            }

			        }
			       
			        var hue = "rgb(" + (Math.floor(Math.random() * 200)) + "," + (Math.floor(Math.random(100, 200) )) + "," + (Math.floor(Math.random(100, 200))) + ")";
			        $('.face').css("background-color", hue)

			        yeah.play();
			        console.log('%c' + fire, css1);

			    }, fireTimer00); 

			    fireTimer00 += 6000; 

			} 

	});


	$('.circle01').mousedown(function() {

		var fireTimer01 = 0;

		for (var i = 0; i < 60; i++) {

		    setTimeout(function() {

		        var fire = " "; 

		        for (var j = 0; j < 22; j++) {

		            var fireOrspace = Math.random()*100; 

		            if (fireOrspace < 50) {
		                fire+= addShoot;
		            }else if (fireOrspace > 100 && fireOrspace < 50){
		                fire += "   ";
		            }else {
		                fire += "    ";
		            }

		        }

		         var hue = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random(200, 256) )) + "," + (Math.floor(Math.random(100, 200))) + ")";
			        $('.circle01').css("background-color", hue)

		        kick02.play();
		        console.log('%c' + fire, css2);

		    }, fireTimer01); 

		    fireTimer01 += 1000;

		} 
	});



	$('.circle02').mousedown(function() {

		var fireTimer02 = 0;

		for (var i = 0; i < 60; i++) {

		    setTimeout(function() {

		        var fire = " "; 

		        for (var j = 0; j < 22; j++) {

		            var fireOrspace = Math.random()*100; 

		            if (fireOrspace < 50) {
		                fire+= addShoot;
		            }else if (fireOrspace > 100 && fireOrspace < 50){
		                fire += " ";
		            }else {
		                fire += "    ";
		            }

		        }

		         var hue = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random(200, 256) )) + "," + (Math.floor(Math.random(100, 200))) + ")";
			        $('.circle02').css("background-color", hue)

		        bass02.play();
		        console.log('%c' + fire, css2);

		    }, fireTimer02); 

		    fireTimer02 += 4000;

		} 
	});


	$('.circle03').click(function() {

		var fireTimer03 = 0;

		for (var i = 0; i <100; i++) {

		    setTimeout(function() {

		        var fire = " ";

		        for (var j = 0; j < 10; j++) { 

		            var fireOrspace = Math.random()*100; 

		            if (fireOrspace < 90) {
		                fire+= addShoot;
		            }else if (fireOrspace > 2 && fireOrspace < 1){
		                fire += "";
		            }else {
		                fire += " ";
		            }

		        }

		        var hue = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random(200, 256) )) + "," + (Math.floor(Math.random(100, 200))) + ")";
			        $('.circle03').css("background-color", hue)

		        bowbeep.play();
		        console.log(fire);

		    }, fireTimer03);

		    fireTimer03 += 1000;

		} 
	});

	$('.circle04').mousedown(function() {

		var fireTimer04 = 0;

		for (var i = 0; i < 60; i++) {

		    setTimeout(function() {

		        var fire = " "; 

		        for (var j = 0; j < 120; j++) {

		            var fireOrspace = Math.random()*100; 

		            if (fireOrspace < 50) {
		                fire+= addShoot;
		            }else if (fireOrspace > 100 && fireOrspace < 50){
		                fire += "";
		            }else {
		                fire += " ";
		            }

		        }

		         var hue = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random(200, 256) )) + "," + (Math.floor(Math.random(100, 200))) + ")";
			        $('.circle04').css("background-color", hue)

		        kick01.play();
		        console.log('%c' + fire, css4);

		    }, fireTimer04); 

		    fireTimer04 += 4000;

		} 
	});


$('.circle05').mousedown(function() {

		var fireTimer05 = 0;

		for (var i = 0; i < 60; i++) {

		    setTimeout(function() {

		        var fire = " "; 

		        for (var j = 0; j < 52; j++) {

		            var fireOrspace = Math.random()*100; 

		            if (fireOrspace < 50) {
		                fire+= shoot;
		            }else if (fireOrspace > 100 && fireOrspace < 50){
		                fire += "      ";
		            }else {
		                fire += "";
		            }

		        }

		         var hue = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random(200, 256) )) + "," + (Math.floor(Math.random(100, 200))) + ")";
			        $('.circle05').css("background-color", hue)

		        kick03.play();
		        console.log('%c' + fire, css4);

		    }, fireTimer05); 

		    fireTimer05 += 1000;

		} 
	});


$('.circle06').mousedown(function() {

		var fireTimer06 = 0;

		for (var i = 0; i < 60; i++) {

		    setTimeout(function() {

		        var fire = " "; 

		        for (var j = 0; j < 22; j++) {

		            var fireOrspace = Math.random()*100; 

		            if (fireOrspace < 50) {
		                fire+= addShoot;
		            }else if (fireOrspace > 100 && fireOrspace < 50){
		                fire += "...";
		            }else {
		                fire += " . ";
		            }

		        }

		         var hue = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random(200, 256) )) + "," + (Math.floor(Math.random(100, 200))) + ")";
			        $('.circle06').css("background-color", hue)

		        kick04.play();
		        console.log('%c' + fire, css2);

		    }, fireTimer06); 

		    fireTimer06 += 2000;

		} 
	});



	$('.circle07').mousedown(function() {

		var fireTimer07 = 0;

		for (var i = 0; i < 60; i++) {

		    setTimeout(function() {

		        var fire = " "; 

		        for (var j = 0; j < 22; j++) {

		            var fireOrspace = Math.random()*100; 

		            if (fireOrspace < 50) {
		                fire+= addShoot;
		            }else if (fireOrspace > 100 && fireOrspace < 50){
		                fire += " ";
		            }else {
		                fire += "    ";
		            }

		        }

		         var hue = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random(200, 256) )) + "," + (Math.floor(Math.random(100, 200))) + ")";
			        $('.circle07').css("background-color", hue)

		        bass01.play();
		        console.log('%c' + fire, css2);

		    }, fireTimer07); 

		    fireTimer07 += 2000;

		} 
	});


	$('.circle08').click(function() {

		var fireTimer08 = 0;

		for (var i = 0; i <100; i++) {

		    setTimeout(function() {

		        var fire = " ";

		        for (var j = 0; j < 10; j++) { 

		            var fireOrspace = Math.random()*100; 

		            if (fireOrspace < 90) {
		                fire+= addShoot;
		            }else if (fireOrspace > 2 && fireOrspace < 1){
		                fire += "";
		            }else {
		                fire += " ";
		            }

		        }

		        var hue = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random(200, 256) )) + "," + (Math.floor(Math.random(100, 200))) + ")";
			        $('.circle08').css("background-color", hue)

		        doublekick.play();
		        console.log(fire);

		    }, fireTimer08);

		    fireTimer08 += 2000;

		} 
	});

	$('.circle09').mousedown(function() {

		var fireTimer09 = 0;

		for (var i = 0; i < 60; i++) {

		    setTimeout(function() {

		        var fire = " "; 

		        for (var j = 0; j < 120; j++) {

		            var fireOrspace = Math.random()*100; 

		            if (fireOrspace < 50) {
		                fire+= addShoot;
		            }else if (fireOrspace > 100 && fireOrspace < 50){
		                fire += "";
		            }else {
		                fire += " ";
		            }

		        }

		         var hue = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random(200, 256) )) + "," + (Math.floor(Math.random(100, 200))) + ")";
			        $('.circle09').css("background-color", hue)

		        kick01.play();
		        console.log('%c' + fire, css4);

		    }, fireTimer09); 

		    fireTimer09 += 4000;

		} 
	});


$('.circle10').mousedown(function() {

		var fireTimer10 = 0;

		for (var i = 0; i < 60; i++) {

		    setTimeout(function() {

		        var fire = " "; 

		        for (var j = 0; j < 52; j++) {

		            var fireOrspace = Math.random()*100; 

		            if (fireOrspace < 50) {
		                fire+= shoot;
		            }else if (fireOrspace > 100 && fireOrspace < 50){
		                fire += "      ";
		            }else {
		                fire += "";
		            }

		        }

		         var hue = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random(200, 256) )) + "," + (Math.floor(Math.random(100, 200))) + ")";
			        $('.circle10').css("background-color", hue)

		        kick03.play();
		        console.log('%c' + fire, css4);

		    }, fireTimer10); 

		    fireTimer10 += 1000;

		} 
	});


$('.circle11').mousedown(function() {

		var fireTimer11 = 0;

		for (var i = 0; i < 60; i++) {

		    setTimeout(function() {

		        var fire = " "; 

		        for (var j = 0; j < 22; j++) {

		            var fireOrspace = Math.random()*100; 

		            if (fireOrspace < 50) {
		                fire+= addShoot;
		            }else if (fireOrspace > 100 && fireOrspace < 50){
		                fire += "...";
		            }else {
		                fire += " . ";
		            }

		        }

		         var hue = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random(200, 256) )) + "," + (Math.floor(Math.random(100, 200))) + ")";
			        $('.circle11').css("background-color", hue)

		        kick04.play();
		        console.log('%c' + fire, css2);

		    }, fireTimer11); 

		    fireTimer11 += 2000;

		} 
	});


});





 