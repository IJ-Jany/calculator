var result =document.getElementById("result")
function calculate(){
    var final_number = result.value;
    var final_result = eval(final_number)
    result.value= final_result;
}