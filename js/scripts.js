//back end logic

var divisible = function(number) {
  if (number % 3 === 0) {
    number = "ping";
    console.log(number);
  } else if (number % 5 === 0) {
    number = "pong";
    console.log(number);
  } else if (number % 15 === 0){
    number = "ping-pong";
  }
};


//front end logic
$(function(){
  $("#pingPong").submit(function(){
    event.preventDefault();
    var inputNum = $("input#numInput").val();
    var result = divisible(inputNum);
    $("#output").text(inputNum);
  });
});
