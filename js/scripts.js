// ui logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input").val();
    // var result = pingPong(userInput);
    // $("#output").text(result);
    pingPong(userInput);
  });
});

// business logic
function pingPong(userInput){
  // debugger;
  $("#output").empty();
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
    // console.log(i);
    }
  }
  return (i);
}


// function pingPong(userInput){
//   var numberList = "";
//   $("#output").empty();
//   for (var i = 1; userInput >= i; i++){
//     $("#output").append("<li>" + i + "</li>");
//     console.log(i);
//   }
//   return (i);
// }
