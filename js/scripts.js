//back end logic





//front end logic
$(function(){
  $("#pingPong").submit(function(){
    event.preventDefault();
    var inputNum = $("input#numInput").val();
    console.log(inputNum);

    $("#output").text(inputNum);
  });
});
