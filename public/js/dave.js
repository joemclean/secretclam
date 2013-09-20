  $(document).ready(function(){
    $("#dave_button").click(function(){
      var rain = document.getElementById('rain');
      rain.loop = true;
      rain.currentTime = 0;
      rain.play();
      $('#dave_image').animate({opacity:"0.7"}, 2000);


      $(function () {
        function rain1() {
          $('#rain1').show(0)
          .animate({"top":"3000px"},6050)
          .hide(0)
          .animate({"top":"-50px"}, rain1);
        }

        function rain2() {
          $('#rain2').show(0)
          .animate({"top":"3000px"},6100)
          .hide(0)
          .animate({"top":"-50px"}, rain2);
        }

        function rain3() {
          $('#rain3').show(0)
          .animate({"top":"3000px"},5800)
          .hide(0)
          .animate({"top":"-50px"}, rain3);
        }

        function rain4() {
          $('#rain4').show(0)
          .animate({"top":"3000px"},5900)
          .hide(0)
          .animate({"top":"-50px"}, rain4);
        }

        function rain5() {
          $('#rain5').show(0)
          .animate({"top":"3000px"},6200)
          .hide(0)
          .animate({"top":"-50px"}, rain5);
        }
        
        function rain6() {
          $('#rain6').show(0)
          .animate({"top":"3000px"},6000)
          .hide(0)
          .animate({"top":"-50px"}, rain6);
        }

        function rain7() {
          $('#rain7').show(0)
          .animate({"top":"3000px"},5400)
          .hide(0)
          .animate({"top":"-50px"}, rain7);
        }

        setTimeout(rain1, 2000);
        setTimeout(rain2, 8513);
        setTimeout(rain3, 4745);
        setTimeout(rain4, 6004);
        setTimeout(rain5, 3151);
        setTimeout(rain6, 7478);
        setTimeout(rain7, 5012);
      });
    });

    $('#dave_image').click(function(){
      var drum = document.getElementById('drum');
      drum.currentTime = 0;
      drum.play();
    });
  });
