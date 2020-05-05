//Initialise

var Iterate = {};
var Display = {};

Display.fullrender = 0;

Iterate.number = 1;
Iterate.nps = 1;
Iterate.loopsps = 10;
Iterate.shop = [{},{}];

	Iterate.shop[0].text = "<button onclick=\"Iterate.buy1()\">Iterated counting</button> Add 1 to how many number you gain per second";
	Iterate.shop[0].ammount = 1;
	
	Iterate.shop[1].text = "<button onclick=\"Iterate.buy2()\">Iterated addition</button> Increase the multiplier to your number per second by 1"
	Iterate.shop[1].ammount = 1;
	
Iterate.buy1 = function() {
	
	Display.fullrender = 1;
	
	Iterate.shop[0].ammount += 1;
}

Iterate.buy2 = function() {
	
	Display.fullrender = 1;
	
	Iterate.shop[1].ammount += 1;
}

//Mechanics
Iterate.loop = function() {
	Iterate.number += Iterate.nps;
	
	if (Iterate.number > 4) {
		Display.joke = 0;
		setTimeout(function () {Iterate.loop()}, 1000/Iterate.loopsps);
	}
	
	if (Iterate.number == 10) {
		Display.formula = 1;
		Display.shop = 1;
		Display.number = 1;
		Display.addition = 0;
		Display.fullrender = 1;
	}
	
	Iterate.nps = 1 * Iterate.shop[0].ammount;
	Iterate.nps = Iterate.nps * Iterate.shop[1].ammount;
	
	Display.rendernumber();
	
	if (Display.fullrender == 1) {
		Display.render();
	}
}

//Display

Display.joke = 1;
Display.formula = 0;
Display.shop = 0;
Display.number = 0;
Display.addition = 1;

Display.opacity = [];
Display.opacity["joke"] = 1;
Display.opacity["formula"] = 0;
Display.opacity["shop"] = 0;
Display.opacity["number"] = 0;
Display.opacity["addition"] = 1;

Display.div = [];

Display.div["number"] = document.getElementById('number');
Display.div["addition"] = document.getElementById('addition');
Display.div["joke"] = document.getElementById('joke');
Display.div["formula"] = document.getElementById('formula');
Display.div["shop"] = document.getElementById('shop');

Display.rendernumber = function() {
	
	if (Display.opacity["addition"] > 0) {
		Display.div["addition"].innerHTML = "1";
		for (i=1;i<Iterate.number;i++) {
			Display.div["addition"].innerHTML += " + 1";
		}
		if (Display.addition == 0) {
			Display.opacity["addition"] -= 0.1;
			Display.div["addition"].style.opacity = Display.opacity["addition"];
		}
	}
	
	if (Display.number) {
		
		Display.div["number"].innerHTML = Iterate.number;
		
		if (Display.opacity["number"] < 1) {
			Display.div["number"].style.opacity = Display.opacity["number"];
			Display.opacity["number"] += 0.1;
		}
	}
	
	disjoke = Display.div["joke"];
	
	if (Display.joke) {
		disjoke.innerHTML = "<button onclick=\"Iterate.loop()\">Click Me!</button>"
	} else if (Display.opacity["joke"] > 0) {
		disjoke.innerHTML = "You know what? Clicking is a stupid mechanic. Now autoclicking once a second.";
		disjoke.style.opacity = Display.opacity["joke"];
		Display.opacity["joke"] -= 0.1;
	}
}

Display.render = function() {
	
	Display.fullrender = 0;
	
	disformula = Display.div["formula"];
	
	if (Display.formula) {
		string = "Earning 1"
		if (Iterate.shop[0].ammount < 20) {
			for (i=1;i<Iterate.shop[0].ammount;i++) {
				string += " + 1"
			}
		} else {
			string += " + ... " + (Iterate.nps - 2) + " ... + 1";
		}
		string += " number per second";
		
		if (Iterate.shop[1].ammount > 1) {
			string += "<br>Or,   " + Iterate.shop[0].ammount;
			for (i=1;i<Iterate.shop[1].ammount;i++){
				string += " + " + Iterate.shop[0].ammount;
			}
			Iterate.shop[0].ammount;
		}
		
		disformula.innerHTML = string;
		
		if (Display.opacity["formula"] < 1) {
			disformula.style.opacity = Display.opacity["formula"];
			Display.opacity["formula"] += 0.1;
			Display.fullrender = 1;
		}
	}
	
	disshop = Display.div["shop"];
	
	if (Display.shop) {
		
		string = "Shop:<br>"
		
		string += Iterate.shop[0].text + "<br>";
		string += Iterate.shop[1].text;
		disshop.innerHTML = string;
		
		if (Display.opacity["shop"] < 1) {
			disshop.style.opacity = Display.opacity["shop"];
			Display.opacity["shop"] += 0.1;
			Display.fullrender = 1;
		}
	}
	
}
Display.rendernumber();
Display.render();