var model = {
	init: function(){
		if(!localStorage.cats){
			localStorage.cats = JSON.stringify([
				{
					"name":"Jackson",
					"clicks": 0
				},
				{
					"name":"Ella",
					"clicks": 0
				},
				{
					"name":"Meowseph",
					"clicks": 0
				},
				{
					"name":"Oliver",
					"clicks": 0
				},
				{
					"name":"Princess",
					"clicks": 0
				},
				{
					"name":"Duchess",
					"clicks": 0
				}
			]);
			localStorage.selected = 0;
		}
	},
	increment: function(sel){
		var cats = JSON.parse(localStorage.cats);
		++ cats[sel].clicks;
		localStorage.cats = JSON.stringify(cats);
	},
	getCats: function(){
		return JSON.parse(localStorage.cats);
	},
	getSelected: function(){
		return localStorage.selected;
	},
	setSelected: function(sel){
		localStorage.selected = sel;
	}
};

var controller = {
	changeSelected: function(newsel){
		var oldsel = model.getSelected();
		model.setSelected(newsel);
		view.setActive(oldsel, newsel);
		view.showCat(newsel, model.getCats());
	},
    init: function() {
    	model.init();
        var currentCats = model.getCats();
        var sel = model.getSelected();
        view.showList(sel, currentCats);
        view.showCat(sel, currentCats);
    },
    increment: function(sel) {
    	model.increment(sel);
        var currentCats = model.getCats();
        view.updateCat(currentCats[sel]);
    }
}

var view = {
	// init: function(sel, cats){
	// 	view.showlist(cats);
	// 	view.showCat(sel, cats);
	// },
	showList: function(selected, cats) {
		var catList = document.getElementById('cat-list');
		for (i=0; i<cats.length; ++i){
			var thiscat = document.createElement("a");
			thiscat.id = i;
			thiscat.className = 'cat-item list-group-item';
			// thiscat.href='#';
			thiscat.onclick = function(){controller.changeSelected(this.id)};
			thiscat.innerHTML = cats[i].name;
			if (i==selected){thiscat.classList.add('active')};
			catList.appendChild(thiscat);
		};
	},
	showCat: function(sel, cats){
		var content = document.getElementById('content')
		var catDiv = document.getElementById('cat-div');
		catDiv.innerHTML = '<img id="'+ cats[sel].name +'-pic" class="cat-pic" src="img/'+ cats[sel].name +'.jpg">'+
			'<h2 id="'+ cats[sel].name +'-click-header" class="click-header">'+ cats[sel].name +' Clicks: </h2>'+
			'<h2 id="'+ cats[sel].name +'-numclicks" class="num-header">'+ cats[sel].clicks +'</h2>';
		content.appendChild(catDiv);
		var elem = document.getElementById(cats[sel].name +'-pic');
		elem.addEventListener('click', function(){
			controller.increment(sel);
		}, false);
	},
	updateCat: function(cat) {
		document.getElementById(cat.name +'-numclicks').innerHTML = cat.clicks;
	},
	setActive: function(selected, newsel) {
		document.getElementById(selected).classList.remove('active');
		selected = newsel;
		document.getElementById(selected).classList.add('active');
		view.showCat(newsel, model.getCats());
	}
};

window.onload = controller.init();