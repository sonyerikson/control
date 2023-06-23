$(document).ready(function(){
    
    function res(){
        var width = $('html').width();
          $('html').height(width);
     } res();
     
     $( window ).resize(function() {
         res();
     });

// ПОЯВЛЕНИЕ НАДПИСЕЙ
    $(".hov1").hover(function (){
        $(".dop1").toggleClass('dopop');
      });
      $(".hov2").hover(function (){
        $(".dop2").toggleClass('dopop');
      });
      $(".hov3").hover(function (){
        $(".dop3").toggleClass('dopop');
      });
      $(".hov4").hover(function (){
        $(".dop4").toggleClass('dopop');
      });
      $(".hov5").hover(function (){
        $(".dop5").toggleClass('dopop');
      });  
      $(".hov6").hover(function (){
        $(".dop6").toggleClass('dopop');
      });

// МЕНЮ
       $(".men").click(function (){
        $(".menu").css("display","block");
      });
});

