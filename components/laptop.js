function show2(){
  document.getElementById('laptop-dropdown').classList.toggle("active");
  return;
}

$("#laptop").click(show2);
$("#audio").click(function(){
  show2();
});

$("#music").click(function(){
  show2();
});
