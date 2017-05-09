var content = document.getElementById('content');
var cats = [
	{
		"name":"Jackson",
		"clicks": 0
	},
	{
		"name":"Ella",
		"clicks": 0
	}
];



window.onload = function(){
	console.log(cats);
	cats.forEach(function(cat){
		console.log(cat.name);
		var thiscat = document.createElement("div");
		thiscat.id = cat.name +'-div';
		thiscat.className = 'cat-div';
		thiscat.innerHTML = '<img id="'+ cat.name +'-pic" class="cat-pic" src="img/'+ cat.name +'.jpg">'+
			'<h2 id="'+ cat.name +'-click-header" class="click-header">'+ cat.name +' Clicks: </h2>'+
			'<h2 id="'+ cat.name +'-numclicks" class="num-header">'+ cat.clicks +'</h2>';
		content.appendChild(thiscat);
		var elem = document.getElementById(cat.name +'-pic');
		elem.addEventListener('click', function(){
			++ cat.clicks;
			document.getElementById(cat.name +'-numclicks').innerHTML = cat.clicks;
		}, false);
	});
};

