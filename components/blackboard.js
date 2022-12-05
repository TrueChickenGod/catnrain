function show(){
  document.getElementById('black-dropdown').classList.toggle("active");
  return;
}

function changeScr(img) {
document.getElementById("cat").src=img;
  }

$("#blackboard").click(show);
$("#orange").click(function(){
  show();
  changeScr("img/cats/orange-cat.gif");
});

$("#silver").click(function(){
  show();
  changeScr("img/cats/silver.gif");
});

$("#tuxedo").click(function(){
  show();
  changeScr("img/cats/tuxedo.gif");
});

$("#black").click(function(){
  show();
  changeScr("img/cats/black-cat.gif");
});

$("#siamese").click(function(){
  show();
  changeScr("img/cats/siamese.gif");
});
