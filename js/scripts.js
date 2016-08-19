// ui logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input").val());
    $("#output").append(pingPong(userInput));
  });
});
// business logic
function pingPong(userInput){
  $("#output").empty();
  if (userInput === 0){
    $("#output").append("No zeroes please!");
  }
  else {
    for (var i = 1; userInput >= i; i++){
      if (i % 15 === 0){
        $("#output").append("<li>" + "ping-pong!" + "</li>");
      }
      else if (i % 3 === 0){
        $("#output").append("<li>" + "ping" + "</li>");
      }
      else if (i % 5 === 0){
        $("#output").append("<li>" + "pong" + "</li>");
      }
      else {
      $("#output").append("<li>" + i + "</li>");
      }
    }
  }
}
