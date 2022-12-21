
$(document).ready(function(){
$('#gallery img').css('opacity', 0.6)
   $("#gallery img").mouseenter(function(){
      $(this).css("opacity", 1);
   });
   $("#gallery img").mouseleave(function(){
      $(this).css("opacity", 0.6);
   });
});

   $("#btnReadMore").click(function(){
      if ($(this).text() == "Read Less About This Project") {
         $(this).text("Read More About This Project");
      } else {
         $(this).text("Read Less About This Project");
      }
      $(".more").fadeToggle();
   });
     
var button = document.getElementById("my-button");
$(document).ready(() => {
    button.addEventListener("click", function() {
  $('#txt').html(`Initial Amount Of Projects ${$('#projects ul').length}`)
  $('#projects').append(`<ul>Built in Web Development</ul>`)
  $('#txt').append(`<br>Amount Of Projects After Editing ${$('#projects ul').length}`)
})
})