function show1(){
  document.getElementById('black-dropdown').classList.toggle("active");
  return;
}

function changeScr(img) {
document.getElementById("cat").src=img;
  }

$("#blackboard").click(show1);
$("#lights").click(show1);
$("#orange").click(function(){
  show1();
  changeScr("img/cats/orange-cat.gif");
});

$("#silver").click(function(){
  show1();
  changeScr("img/cats/silver.gif");
});

$("#tuxedo").click(function(){
  show1();
  changeScr("img/cats/tuxedo.gif");
});

$("#black").click(function(){
  show1();
  changeScr("img/cats/black-cat.gif");
});

$("#siamese").click(function(){
  show1();
  changeScr("img/cats/siamese.gif");
});
