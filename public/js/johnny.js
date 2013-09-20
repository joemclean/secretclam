$(document).ready(function(){
  $("#johnny_button").click(function(){
    document.getElementById('hallway').pause();
    $("#johnny_image").animate({marginTop:"+=1000px"});
    document.getElementById('aah').currentTime = 0;
    document.getElementById('aah').play();
  });

  $("#johnny_image").click(function(){
    document.getElementById('hallway').currentTime = 0;
    document.getElementById('hallway').play();
  });
});