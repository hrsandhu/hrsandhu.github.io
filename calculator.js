$(document).ready(function(){
    expression = "";
    answer="";
    $(".num").click(function(event) {
        expression = expression + this.innerHTML;
        document.getElementById("display").innerText = expression;

    });
    $(".clear").click(function(event) {
        expression = "";
        document.getElementById("display").innerText = expression;
    });
    $(".eq").click(function(event) {
        try {
            expression = eval(expression);
        }catch(e){
            if(e instanceof SyntaxError){
                alert("Invalid Syntax")
                expression=""
            }
        }
        document.getElementById("display").innerText = expression;
        answer=expression;
    });
    $(".answer").click(function(event) {
        expression = expression+answer;
        document.getElementById("display").innerText = expression;
    });

});