
var app = document.getElementById('app');


function box(){
  var textDiv = [];
  for(var i=0; i<45; i++){
   textDiv += '<div class="floating-box"></div>';
  };
  return textDiv
};

function wrapper(){
  return '<div class="heading">'+ box() +'</div>';
};

app.innerHTML =  wrapper();
