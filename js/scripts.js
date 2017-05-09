var content = document.getElementById('content');
var catDiv = document.getElementById('cat-div');
var catList = document.getElementById('cat-list');
var selected = 0;
var cats = [
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
];

// var elem = document.getElementById(cat.name +'-pic');
// elem.addEventListener('click', function(){
// 	++cats[selected].clicks;
// 	document.getElementById(cat.name +'-numclicks').innerHTML = cat.clicks;
// }, false);
function changeSelected (newsel){
	document.getElementById(selected).classList.remove('active');
	selected = newsel;
	document.getElementById(selected).classList.add('active');
	showcat(newsel);
}

function showcat(sel){
	catDiv.innerHTML = '<img id="'+ cats[sel].name +'-pic" class="cat-pic" src="img/'+ cats[sel].name +'.jpg">'+
		'<h2 id="'+ cats[sel].name +'-click-header" class="click-header">'+ cats[sel].name +' Clicks: </h2>'+
		'<h2 id="'+ cats[sel].name +'-numclicks" class="num-header">'+ cats[sel].clicks +'</h2>';
	content.appendChild(catDiv);
	var elem = document.getElementById(cats[sel].name +'-pic');
	elem.addEventListener('click', function(){
		++ cats[sel].clicks;
		document.getElementById(cats[sel].name +'-numclicks').innerHTML = cats[sel].clicks;
	}, false);
};

function showlist(){
	console.log(cats);
	for (i=0; i<cats.length; ++i){
		var thiscat = document.createElement("a");
		thiscat.id = i;
		thiscat.className = 'cat-item list-group-item';
		// thiscat.href='#';
		thiscat.onclick = function(){changeSelected(this.id)};
		thiscat.innerHTML = cats[i].name;
		if (i==selected){thiscat.classList.add('active')};
		catList.appendChild(thiscat);
	};

};

function init(sel){
	showlist();
	showcat(sel);
}

window.onload = init(selected);