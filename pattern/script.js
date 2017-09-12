
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

var space = ' ';
var addSpace = ' ';
var shoot = '';
var addShoot = '  .*   ';
var star = '';
var addStar = '* ';


var css1 = "text-shadow:  1px 1px hsl(5.4, 100%, 50%), 3px 2px hsl(10.8, 100%, 50%), 5px 3px hsl(16.2, 100%, 50%), 7px 4px hsl(21.6, 100%, 50%), 9px 5px hsl(27, 100%, 50%), 11px 6px hsl(32.4, 100%, 50%), 13px 7px hsl(37.8, 100%, 50%), 14px 8px hsl(43.2, 100%, 50%), 16px 9px hsl(48.6, 100%, 50%); color: #FFF; background-color: #000; font-size: 24px;";

var css2 = "text-shadow: -1px 1px hsl(5.4, 100%, 50%), -3px 2px hsl(10.8, 100%, 50%), -5px 3px hsl(16.2, 100%, 50%), -7px 4px hsl(21.6, 100%, 50%), -9px 5px hsl(27, 100%, 50%), -11px 6px hsl(32.4, 100%, 50%), -13px 7px hsl(37.8, 100%, 50%), -14px 8px hsl(43.2, 100%, 50%), -16px 9px hsl(48.6, 100%, 50%); color: #FFF; background-color: #000; font-size: 17px;";

var css3 = "color: #FFF; background-color: #000; font-size: 14px;";


for (var i = 0; i < array.length; i++) {
	space = space + addSpace;
	shoot = shoot  + addShoot;
	star = star + addStar + space;

	if (array[i] % 3 == 2) {
		console.log( '%c' + shoot + space, css1)
	} else if (array[i] % 2 ==1) {
		console.log( '%c        ' + shoot + space, css2)
	} else {
		console.log('%c  ' + star + '  ', css3)
	}
}




