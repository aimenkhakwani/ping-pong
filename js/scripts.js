// ui logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input").val());
    // console.log(userInput);
    var result = pingPong(userInput);
     $("#output").text(result);

  });
});
// business logic
function pingPong(userInput){
  for (var i = 1; userInput >= i; i++){
    console.log(i);
  }
}
