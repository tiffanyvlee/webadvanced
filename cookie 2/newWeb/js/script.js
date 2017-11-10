 var targetDate = new Date();
	 var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60;

	var xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://maps.googleapis.com/maps/api/timezone/json?location=38.908133,-77.047119&timestamp=1458000000&key=AIzaSyALT1_zHTwONdtDCMvrfMLMDFztYsfFqvc') // open GET request
	xhr.onload = function(){
	    if (xhr.status === 200){ 
	        var output = JSON.parse(xhr.responseText)
	        console.log(output.status) 
	        if (output.status == 'OK'){ 
	            var offsets = output.dstOffset * 1000 + output.rawOffset * 1000 
	            var localdate = new Date(timestamp * 1000 + offsets) 
	            console.log(localdate.toLocaleString())
	        }
	    }
	    
	}
	xhr.send()

//clock 

	var $hands = $('#liveclock div.hand')

	window.requestAnimationFrame = window.requestAnimationFrame
	                               || window.mozRequestAnimationFrame
	                               || window.webkitRequestAnimationFrame
	                               || window.msRequestAnimationFrame
	                               || function(f){setTimeout(f, 60)}


	function updateclock(){
		var curdate = new Date()
		var hour_as_degree = ( curdate.getHours() + curdate.getMinutes()/60 ) / 12 * 360
		var minute_as_degree = curdate.getMinutes() / 60 * 360
		var second_as_degree = ( curdate.getSeconds() + curdate.getMilliseconds()/1000 ) /60 * 360
		$hands.filter('.hour').css({transform: 'rotate(' + hour_as_degree + 'deg)' })
		$hands.filter('.minute').css({transform: 'rotate(' + minute_as_degree + 'deg)' })
		$hands.filter('.second').css({transform: 'rotate(' + second_as_degree + 'deg)' })
		requestAnimationFrame(updateclock)
	}

	requestAnimationFrame(updateclock)





//canvas 

	function setup() {

	  var canvas = createCanvas(1600,1050);
	  canvas.parent('canvas');

	}

	function draw() {

		fill(map(mouseY, 0, height, 190, 120), map(mouseY, 0, height, 120, 60), map(mouseY, 0, height, 120, 60), 9);  
	    rect(0, 0, width, height);

	    stroke(map(mouseX, 0, height, 250, 255), map(mouseX, 0, height, 220, 255), map(mouseX, 0, height, 220, 255), 80);
	    line(width/2, height/2, mouseX, mouseY);
	  
	    var r = map(mouseY, 0, height, 220, 200);
	    var g = map(mouseX, 0, width, 130, 120);
	    var b = 120;
	 
	    var d = dist(mouseX, mouseY, pmouseX, pmouseY);	  
	    var s = map(d, 0, 100, 40, 250);
	  
	    noStroke();

	    fill(r, g, b, 100);
	    ellipse(mouseX, mouseY, s, s);

	    fill(r, g, b);
	    ellipse(mouseX, mouseY, 0, 30);
	 
	}



// $ ("#test1").click(function () {
	//css
// 	createCookie('cookie', 'black', 7);
// });


	$(document).ready(function() {

		//updateResult();




		// document.getElementById("test").appendChild(elem);
		// elem.src = "../media/svg/donut.svg";

//cookie
		var allCircles =  [],
    	circle = '<div class="circle" />';

		if(Cookies.getJSON('circles')){ 

    		var existingCircles = Cookies.getJSON('circles');

    		for (var i = 0; i < existingCircles.length; i++) { 
    
        		$(".circle-container").append(existingCircles[i]); 
    
    		}

    		existingCircles.push(circle);

    		Cookies.set('circles', existingCircles, { expires: 10});

		}else{ 

    		allCircles.push(circle);

    		Cookies.set('circles', allCircles, {expires: 10});

		}




// function updateResult() {
// 	var cookieValue = getCookie('cookie');
// 	if (cookieValue.length) {
// 		$('#test').attr("href", "assets/css/" + cookieValue + ".css");
// 	}
// }




//body

		var hill01 = document.getElementById('hill01');
		TweenMax.to(hill01, 30, {delay: 0, scale: 2, opacity: 0.7, ease: Linear.easeNone, yoyo: true, repeat: -1});

		var hill02 = document.getElementById('hill02');
		TweenMax.to(hill02, 30, {delay: 0, scale: 0.5, ease: Linear.easeNone, yoyo: true, repeat: -1});

		$('#sect00').mouseenter(function() {
			$('#body_00').show();
		});
		$('#sect00').mouseout(function() {
			$('#body_00').hide();
		});

		$('#sect01').mouseenter(function() {
			$('#body_01').show();
		});
		$('#sect01').mouseout(function() {
			$('#body_01').hide();
		});

		$('#sect02').mouseenter(function() {
			$('#body_02').show();
		});
		$('#sect02').mouseout(function() {
			$('#body_02').hide();
		});

		$('#sect03').mouseenter(function() {
			$('#body_03').show();
		});
		$('#sect03').mouseout(function() {
			$('#body_03').hide();
		});

		$('#sect04').mouseenter(function() {
			$('#body_04').show();
		});
		$('#sect04').mouseout(function() {
			$('#body_04').hide();
		});

		$('#sect05').mouseenter(function() {
			$('#body_05').show();
		});
		$('#sect05').mouseout(function() {
			$('#body_05').hide();
		});

		$('#sect06').mouseenter(function() {
			$('#body_06').show();
		});
		$('#sect06').mouseout(function() {
			$('#body_06').hide();
		});

		$('#sect07').mouseenter(function() {
			$('#body_07').show();
		});
		$('#sect07').mouseout(function() {
			$('#body_07').hide();
		});

		$('#sect08').mouseenter(function() {
			$('#body_08').show();
		});
		$('#sect08').mouseout(function() {
			$('#body_08').hide();
		});

		$('#sect09').mouseenter(function() {
			$('#body_09').show();
		});
		$('#sect09').mouseout(function() {
			$('#body_09').hide();
		});

		$('#sect10').mouseenter(function() {
			$('#body_10').show();
		});
		$('#sect10').mouseout(function() {
			$('#body_10').hide();
		});

		$('#sect11').mouseenter(function() {
			$('#body_11').show();
		});
		$('#sect11').mouseout(function() {
			$('#body_11').hide();
		});

		$('#sect12').mouseenter(function() {
			$('#body_12').show();
		});
		$('#sect12').mouseout(function() {
			$('#body_12').hide();
		});

		$('#sect13').mouseenter(function() {
			$('#body_13').show();
		});
		$('#sect13').mouseout(function() {
			$('#body_13').hide();
		});

		$('#sect14').mouseenter(function() {
			$('#body_14').show();
		});
		$('#sect14').mouseout(function() {
			$('#body_14').hide();
		});


//$(".body").hide();


	 });


// var imgArray = new Array();
// 	imgArray[0] = new Image(),
// 	imgArray[1] = new Image();
// 	imgArray[0].src = 'media/svg/body/body_00.svg',
// 	imgArray[1].src = 'media/svg/body/body_01.svg';






 // $( "body" ).mousemove(function(){


 // 	var xPosition = event.pageX;
 // 	var windowWidth = $(window).outerWidth();

 // 	var percentage = (xPosition/windowWidth);
 // 	percentage = (percentage.toFixed(2)) * 100;

 // 	//console.log(percentage);

 // 		$(".body").children("#body_" + percentage).show();
 // 		console.log('asdf');


 // });





// var tap = new Audio ('media/audio/tap.wav');

//fingers
	$('.fingers').click(function() {

		// var tapTimer00 = 0,
		// 	tapTimer01 = 0,
		// 	tapTimer02 = 0,
		// 	tapTimer03 = 0;
		// for (var i = 0; i < 10; i++) {
		// 	setTimeout(function() {
		// 		tap.play();
		// 		console.log("yes");
		// 	}, tapTimer00);
		// 	tapTimer00 += 800;
		// }

		// for (var i = 0; i < 10; i++) {
		// 	setTimeout(function() {
		// 		tap.play();
		// 		console.log("yes2");
		// 	}, tapTimer01);
		// 	tapTimer01 += 1000;
		// }

		var index = document.getElementById('index');
		TweenMax.to(index, 0.15, {delay: 0.3, top: 50, ease: Linear.easeNone, yoyo: true, repeat: -1, repeatDelay:0.25});

		var middle = document.getElementById('middle');
		TweenMax.to(middle, 0.15, {delay: 0.2, top: 50, ease: Linear.easeNone, yoyo: true, repeat: -1, repeatDelay:0.25});

		var ring = document.getElementById('ring');
		TweenMax.to(ring, 0.15, {delay: 0.1, top: 50, ease: Linear.easeNone, yoyo: true, repeat: -1, repeatDelay:0.25});

		var pinky = document.getElementById('pinky');
		TweenMax.to(pinky, 0.15, {delay: 0, top: 50, ease: Linear.easeNone, yoyo: true, repeat: -1, repeatDelay:0.25});


	});


// });










