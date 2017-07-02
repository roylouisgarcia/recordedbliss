$(document).ready(function (){
  $("#titlebar").fadeIn("slow");

 $("#button_1").click(function () {
     $("#lyrics_1").show("slow");
     $("#lyrics_2").hide();
     $("#lyrics_3").hide();
     $("#lyrics_4").hide();

 });

 $("#button_2").click(function () {
     $("#lyrics_1").hide();
     $("#lyrics_2").show("slow");
     $("#lyrics_3").hide();
     $("#lyrics_4").hide();
 });
 $("#button_3").click(function () {
     $("#lyrics_1").hide();
     $("#lyrics_2").hide();
     $("#lyrics_3").show("slow");
     $("#lyrics_4").hide();
 });
 $("#button_4").click(function () {
     $("#lyrics_1").hide();
     $("#lyrics_2").hide();
     $("#lyrics_3").hide();
     $("#lyrics_4").show("slow");

 });


});