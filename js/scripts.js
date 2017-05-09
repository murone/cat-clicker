var clicks = 0;
var elem = document.getElementById('cat');
var displayClicks = document.getElementById('numclicks');
elem.addEventListener('click', function(){
  ++ clicks;
  displayClicks.innerHTML = clicks;
}, false);