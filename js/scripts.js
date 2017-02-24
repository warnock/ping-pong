//back end logic
var resultArray = [];
function divisible(number) {
  for(i = 1; i <= number; i++) {
    if ((i % 3 === 0) && (i %15 != 0)) {
      resultArray.push("ping");
    } else if ((i % 5 === 0) && (i %15 != 0)) {
      resultArray.push("pong");
    } else if (i % 15 === 0) {
      resultArray.push("ping-pong");
    } else {
      resultArray.push(i);
    }
  }
};



//front end logic
$(function(){
  $("#pingPong").submit(function(){
    event.preventDefault();
    var inputNum = $("input#numInput").val();
    console.log(resultArray);
    var result = divisible(inputNum);
    resultArray.forEach(function(number){
      $("#outputUl").append("<li>"+number+"</li>");
    });
  });
});
