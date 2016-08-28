// business logic
function validate(userInput){
  if(userInput < 1){
    alert("No zeroes please!");
  }
  return;
}
function pingPong(userInput){
  var result = [];
  for (var i = 1; userInput >= i; i++){
    if (i % 15 === 0){
      result.push("ping-pong!");
    }
    else if (i % 3 === 0){
      result.push("ping");
    }
    else if (i % 5 === 0){
      result.push("pong");
    }
    else {
      result.push(i);
    }
  }
  return result;
}
// ui logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#output").empty();
    var userInput = parseInt($("input").val());
    var output = pingPong(userInput);
    validate(userInput);
    output.forEach(function(item){
    $("#output").append("<li>" + item + "</li>");
    });
  });
});
