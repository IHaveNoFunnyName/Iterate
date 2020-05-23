//Initialise

var Iterate = {};

Iterate.number = 1;
Iterate.nps = 1;
Iterate.loopsps = 1;
Iterate.shop = [{},{}];

	Iterate.shop[0].text = "<button onclick=\"Iterate.buy1()\">Iterated counting</button> Increase the amount of times you count every second, or, addition.";
	Iterate.shop[0].ammount = 1;
	
	Iterate.shop[1].text = "<button onclick=\"Iterate.buy2()\">Iterated addition</button> Increase the amount of times you add successively, or, multiplication."
	Iterate.shop[1].ammount = 1;
	
Iterate.buy1 = function() {
	
	Iterate.shop[0].ammount += 1;
	
	Iterate.calcnps();
	
	Display.rendernumber();
	Display.render();
	
}

Iterate.buy2 = function() {
	
	Iterate.shop[1].ammount += 1;
	
	Iterate.calcnps();
	
	Display.rendernumber()
	Display.render();
}

//Mechanics
Iterate.loop = function() {
	Iterate.number += Iterate.nps;
	
	if (Iterate.number > 4) {
		Display.joke = 0;
		setTimeout(function () {Iterate.loop()}, 100/Iterate.loopsps);
	}
	
	if (Iterate.number == 10) {
		Display.formula = 1;
		Display.shop = 1;
		Display.number = 1;
		Display.addition = 0;
		Display.fullrender = 1;
	}
	
	Display.rendernumber();
	
	if (Display.fullrender == 1) {
		Display.render();
	}
}

Iterate.calcnps = function() {
	
	Iterate.nps = 1 * Iterate.shop[0].ammount;
	Iterate.nps = Iterate.nps * Iterate.shop[1].ammount;
	
}

//Display

Display.rendernumber();
Display.render();