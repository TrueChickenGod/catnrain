function show(){
  document.getElementById('black-dropdown').classList.toggle("active");
  return;
}

$("#blackboard").click(show);
$("#orange").click(function(){
  show();
});
