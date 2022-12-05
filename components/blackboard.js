function show(){
  document.getElementById('black-dropdown').classList.toggle("active");
  return;
}

$("#blackboard").click(show);
$("#orange").click(function(){
  show();
});

$("#silver").click(function(){
  show();
});

$("#tuxedo").click(function(){
  show();
});

$("#black").click(function(){
  show();
});

$("#siamese").click(function(){
  show();
});
