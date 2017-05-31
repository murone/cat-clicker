var initialCats = [
	{
		"name":"Jackson",
		"clickCount": 0,
		"imgSrc":"img/jackson.jpg",
		"nicknames": ['Jack', 'Jack Attack','Brudder', 'Flopper']
	},
	{
		"name":"Ella",
		"clickCount": 0,
		"imgSrc":"img/ella.jpg",
		"nicknames": ['Ellers', 'Babygirl', 'Princess', 'Seester']
	},
	{
		"name":"Meowseph",
		"clickCount": 0,
		"imgSrc":"img/meowseph.jpg",
		"nicknames": ['Stalin', 'Hitler']
	},
	{
		"name":"Oliver",
		"clickCount": 0,
		"imgSrc":"img/oliver.jpg",
		"nicknames": ['Oscar']
	},
	{
		"name":"Princess",
		"clickCount": 0,
		"imgSrc":"img/princess.jpg",
		"nicknames": ['P']
	},
	{
		"name":"Duchess",
		"clickCount": 0,
		"imgSrc":"img/duchess.jpg",
		"nicknames": ['D']
	}
]

var Cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);

	this.title = ko.computed(function(){
		var clicks = this.clickCount();
		if (clicks < 10){return "Newborn"};
        if (clicks < 20){return "Kitten"};
        if (clicks < 30){return "Infant"};
        if (clicks < 40){return "Child"};
        if (clicks < 50){return "Teen"};
        if (clicks < 60){return "Cat"};
        if (clicks < 70){return "Ninja"};
        return "Alien";
	}, this);
};

var ViewModel = function() {
	var self = this;
	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	} 
	this.selectCat = function(cat) {
		self.currentCat(cat);
	} 
};

// window.onload = controller.init();
ko.applyBindings(ViewModel);