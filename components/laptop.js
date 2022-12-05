function show2(){
  document.getElementById('laptop-dropdown').classList.toggle("active");
  return;
}

var check;

$("#computer ").click(show2);
$("#audio").click(function(){
  show2();
  if (document.getElementById('rain').paused) {
      document.getElementById('rain').play();
  }
  else {
    document.getElementById('rain').pause();
  }
});

$("#music").click(function(){
  show2();
  if (document.getElementById('lofi').paused) {
      document.getElementById('lofi').play();
  }
  else {
    document.getElementById('lofi').pause();
  }
});
