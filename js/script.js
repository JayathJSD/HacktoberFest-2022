function submitAnswers(){
    var total = 5; //total number of questions 
    var score = 0; //score


    //get user input
     
    var q1 = document.forms["quizFrom"]["q1"].value; //this will grab the "quizFrom" document on the page and grab the input name on "q1"
    var q2 = document.forms["quizFrom"]["q2"].value;
    var q3 = document.forms["quizFrom"]["q3"].value;
    var q4 = document.forms["quizFrom"]["q4"].value;
    var q5 = document.forms["quizFrom"]["q5"].value;

    //validation


    for(i=1; i<=total;i++){
        /*eval function

        if(q1==null || q1 == ''){
            alert("You miss question 1 ");
            return false
        }
        */

        if(eval('q'+i)==null || eval('q'+i) == ''){
            alert("You miss question "+ i);
            return false
        }

    }

    //Set Correct Answers

    //using an array to store answers
    var answer = ["b","a","a","b","d"];

    //check the answers
     if(q1==answer[0]){
        score++;
    }


    for(var j=0;j<total;j++)
    {
        if(eval('q'+(j+1))==answer[j]){
            score++;
        } 
    }

    
    //Display Result
    var result = document.getElementById('result');
    result.innerHTML = '<h3>You scored <span>'+ score +'</span> out of <span>'+total+'</span></h3>';
    
    alert("You scored "+ score + " out of " +total );


    return false;
}
