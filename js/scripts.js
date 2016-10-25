var countBy = function (countTo, countBy){//countTo, countBy){

	var numTimes = countTo / countBy;
  var answer;
  var countArray = [];

  for (var increment = 1; increment <= numTimes; increment++){
     answer = countBy * increment;
     countArray.push(answer);
  }
  return countArray;

}

var validate = function (num1, num2){

   if (num1 <=0 || num2<=0){
		 return false;
	 }else if (num1<num2){
		 return false;
	 }else if (isNaN(num1) || isNaN(num2)){
		 return false;

	 }
	 return true;
}



$(document).ready(function(){
	$("form#number-count").submit(function(event){
		$("#answerList").text("");

    var input1 = parseInt($("#number1").val());
    var input2 = parseInt($("#number2").val());

		console.log(validate(input1, input2));

		if(validate(input1, input2)){
			var outputs = countBy(input1, input2);

			outputs.forEach(function(output){
				$("#answerList").append("<li>" + output + "</li>");
			});
		}
		else{
			$("#answerList").text("Please enter a valid number");
		}

    event.preventDefault();
  });
});
