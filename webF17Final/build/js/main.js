

//face detection

 	window.onload = function() {
        var video = document.getElementById('video');
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');

        var hide = document.getElementById('hide');

        var tracker = new tracking.ObjectTracker('face');
        tracker.setInitialScale(4);
        tracker.setStepSize(2);
        tracker.setEdgesDensity(0.1);

        tracking.track('#video', tracker, {camera:true});

        tracker.on('track', function(event) {
            context.clearRect(0, 0, canvas.width, canvas.height);

            event.data.forEach(function(rect) {
                context.strokeStyle = '#fff';
                context.strokeRect((-rect.x) + 100 + (canvas.width/2), rect.y, rect.width, rect.height);


                console.log(rect.x)

                hide.style.position = 'absolute';

                hide.style.left = ((-1 * rect.x) + (canvas.width/2) + 400 + "px");
                hide.style.top = (rect.y + 300) + "px";

            });
        });

        var gui = new dat.GUI();
        gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
        gui.add(tracker, 'initialScale', 1.0, 1.0).step(0.1);
        gui.add(tracker, 'stepSize', 10, 10).step(1);
    }


var mic;
function setup(){
  mic = new p5.AudioIn()
  mic.start();
}
function draw(){
  background(0);
  micLevel = mic.getLevel();
  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
}



//$("body").mousemove(function() {
	// var xPos = event.pageX;
	// 	console.log(xPos);
		


//tween

	$('#block').click(function() {

		var block = document.getElementById ('block');
		TweenMax.to(block, 0, {opacity:0, ease:Linear.easeNone});

		var hide = document.getElementById ('hide');
		TweenMax.to(hide, 2, {opacity: 1, ease:Linear.easeNone});

		var fBase = document.getElementById ('fBase');
		TweenMax.to(fBase, 3, {scale: 2, opacity: 1, ease:Linear.easeNone});

		var rectFO1 = document.getElementById('rectFO1');
		TweenMax.to(rectFO1, 1, {delay: 0, top:-233, left:-95, rotation:-15, ease:Linear.easeNone});

		var rectFO2 = document.getElementById('rectFO2');
		TweenMax.to(rectFO2, 1.2, {delay: 0, top:-233, left:-178, rotation:-30, ease:Linear.easeNone});
		
		var rectFO3 = document.getElementById('rectFO3');
		TweenMax.to(rectFO3, 1.4, {delay: 0, top:-130, left:-222, rotation:30, ease:Linear.easeNone});

		var rectFO4 = document.getElementById('rectFO4');
		TweenMax.to(rectFO4, 1.6, {delay: 0, top:-52, left:-240, rotation:-10, ease:Linear.easeNone});
		
		var rectFO5 = document.getElementById('rectFO5');
		TweenMax.to(rectFO5, 1.8, {delay: 0, top:52, left:-230, rotation:10, ease:Linear.easeNone});
		
		var rectFO6 = document.getElementById('rectFO6');
		TweenMax.to(rectFO6, 2, {delay: 0, top:130, left:-206, rotation:-30, ease:Linear.easeNone});
		
		var rectFO7 = document.getElementById('rectFO7');
		TweenMax.to(rectFO7, 2.2, {delay: 0, top:185, left:-130, rotation:10, ease:Linear.easeNone});

		var rectFO8 = document.getElementById('rectFO8');
		TweenMax.to(rectFO8, 2.4, {delay: 0, top:210, left:-65, rotation:35, ease:Linear.easeNone});

		var rectFO9 = document.getElementById('rectFO9');
		TweenMax.to(rectFO9, 2.6, {delay: 0, top:220, left:-30, rotation:-2, ease:Linear.easeNone});

		var rectF10 = document.getElementById('rectF10');
		TweenMax.to(rectF10, 2.8, {delay: 0, top:220, left:-10, rotation:-10, ease:Linear.easeNone});

		var rectF11 = document.getElementById('rectF11');
		TweenMax.to(rectF11, 3, {delay: 0, top:190, left:125, rotation:-28, ease:Linear.easeNone});

		var rectF12 = document.getElementById('rectF12');
		TweenMax.to(rectF12, 3.2, {delay: 0, top:90, left:190, rotation:-3, ease:Linear.easeNone});

		var rectF13 = document.getElementById('rectF13');
		TweenMax.to(rectF13, 3.4, {delay: 0, top:-35, left:170, rotation:15, ease:Linear.easeNone});


		var rectFEL01 = document.getElementById('rectFEL01');
		TweenMax.to(rectFEL01, 2.7, {delay: 0, top:10, left:-210, rotation:30, ease:Linear.easeNone});

		var rectFEL02 = document.getElementById('rectFEL02');
		TweenMax.to(rectFEL02, 2.7, {delay: 0, top:-20, left:-180, rotation:-10, ease:Linear.easeNone});

		var rectFEL03 = document.getElementById('rectFEL03');
		TweenMax.to(rectFEL03, 2.7, {delay: 0, top:-30, left:-105, rotation:25, ease:Linear.easeNone});

		var rectFEL04 = document.getElementById('rectFEL04');
		TweenMax.to(rectFEL04, 2.7, {delay: 0, top:30, left:-60, rotation:-5, ease:Linear.easeNone});

		var rectFEL05 = document.getElementById('rectFEL05');
		TweenMax.to(rectFEL05, 2.7, {delay: 0, top:10, left:-100, rotation:20, ease:Linear.easeNone});

		var rectFEL06 = document.getElementById('rectFEL06');
		TweenMax.to(rectFEL06, 2.7, {delay: 0, top:0, left:-120, rotation:10, ease:Linear.easeNone});

		var rectFEL07 = document.getElementById('rectFEL07');
		TweenMax.to(rectFEL07, 2.7, {delay: 0, top:20, left:-122, rotation:-20, ease:Linear.easeNone});

		var rectFEL08 = document.getElementById('rectFEL08');
		TweenMax.to(rectFEL08, 2.7, {delay: 0, top:10, left:-175, rotation:20, ease:Linear.easeNone});


		var rectFER01 = document.getElementById('rectFER01');
		TweenMax.to(rectFER01, 2.7, {delay: 0, top:-20, left:60, rotation:-25, ease:Linear.easeNone});

		var rectFER02 = document.getElementById('rectFER02');
		TweenMax.to(rectFER02, 2.7, {delay: 0, top:-20, left:120, rotation:17, ease:Linear.easeNone});

		var rectFER03 = document.getElementById('rectFER03');
		TweenMax.to(rectFER03, 2.7, {delay: 0, top:0, left:125, rotation:12, ease:Linear.easeNone});

		var rectFER04 = document.getElementById('rectFER04');
		TweenMax.to(rectFER04, 2.7, {delay: 0, top:-10, left:75, rotation:-10, ease:Linear.easeNone});

		var rectFER05 = document.getElementById('rectFER05');
		TweenMax.to(rectFER05, 2.7, {delay: 0, top: 0, left:55, rotation:-18, ease:Linear.easeNone});

		var rectFER06 = document.getElementById('rectFER06');
		TweenMax.to(rectFER06, 2.7, {delay: 0, top:15, left:70, rotation:25, ease:Linear.easeNone});

		var rectFER07 = document.getElementById('rectFER07');
		TweenMax.to(rectFER07, 2.7, {delay: 0, top:20, left:140, rotation:-15, ease:Linear.easeNone});



		var rectFN01 = document.getElementById('rectFN01');
		TweenMax.to(rectFN01, 2.7, {delay: 0, top:90, left:-75, rotation:-45, ease:Linear.easeNone});

		var rectFN02 = document.getElementById('rectFN02');
		TweenMax.to(rectFN02, 2.7, {delay: 0, top:105, left:-85, rotation:-7, ease:Linear.easeNone});

		var rectFN03 = document.getElementById('rectFN03');
		TweenMax.to(rectFN03, 2.7, {delay: 0, top:115, left:-72, rotation:8, ease:Linear.easeNone});

		var rectFN04 = document.getElementById('rectFN04');
		TweenMax.to(rectFN04, 2.7, {delay: 0, top:123, left:-45, rotation:10, ease:Linear.easeNone});

		// var rectFN05 = document.getElementById('rectFN05');
		// TweenMax.to(rectFN05, 2.7, {delay: 0, top:-20, left:200, rotation:10, ease:Linear.easeNone});

		// var rectFN06 = document.getElementById('rectFN06');
		// TweenMax.to(rectFN06, 2.7, {delay: 0, top:-20, left:200, rotation:10, ease:Linear.easeNone});

		var rectFN07 = document.getElementById('rectFN07');
		TweenMax.to(rectFN07, 2.7, {delay: 0, top:130, left:-35, rotation:-2, ease:Linear.easeNone});

		var rectFN08 = document.getElementById('rectFN08');
		TweenMax.to(rectFN08, 2.7, {delay: 0, top:130, left:-10, rotation:2, ease:Linear.easeNone});

		var rectFN09 = document.getElementById('rectFN09');
		TweenMax.to(rectFN09, 2.7, {delay: 0, top:120, left:5, rotation:-13, ease:Linear.easeNone});

		var rectFN10 = document.getElementById('rectFN10');
		TweenMax.to(rectFN10, 2.7, {delay: 0, top:115, left:22, rotation:-15, ease:Linear.easeNone});

		var rectFN11 = document.getElementById('rectFN11');
		TweenMax.to(rectFN11, 2.7, {delay: 0, top:100, left:28, rotation:10, ease:Linear.easeNone});

		var rectFN12 = document.getElementById('rectFN12');
		TweenMax.to(rectFN12, 2.7, {delay: 0, top:90, left:25, rotation:40, ease:Linear.easeNone});

		
			 // if (xPos > 300 && xPos <400 ) {

			
		
		 //}
		});

	//});


















