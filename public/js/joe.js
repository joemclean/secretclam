$(document).ready(function(){
    $("#joe_button").click(function(){
      var underground = document.getElementById('underground')
    underground.currentTime = 0;
    underground.play();
    $("#joe_image").animate({width:"+=20000px", marginTop:"+=-10000px", marginLeft:"+=-10000"},200000);
  });
});