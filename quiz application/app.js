
function quizApp(){
    
    var score=0 ;
  
    var right_answer_q1= document.getElementById('q1-a2');
    var q1_answer_2 = document.getElementById('q1-a1');
    var q1_answer_3 = document.getElementById('q1-a3');
    var q1_answer_4 = document.getElementById('q1-a4');

    if(right_answer_q1.checked==true){
        score++;
        alert("Q1: Right Answer");
    }
    else{
        alert("Q1: Wrong Answer");
    }

    var right_answer_q2= document.getElementById('q2-b1');
    var q2_answer_2 = document.getElementById('q2-b2');
    var q2_answer_3 = document.getElementById('q2-b3');
    var q2_answer_4 = document.getElementById('q2-b4');

    if(right_answer_q2.checked==true){
        score++;
        alert("Q2: Right Answer");
    }
    else{
        alert("Q2: Wrong Answer");
    }

    var right_answer_q3= document.getElementById('q3-c2');
    var q3_answer_2 = document.getElementById('q3-c1');
    var q3_answer_3 = document.getElementById('q3-c3');
    var q3_answer_4 = document.getElementById('q3-c4');

    if(right_answer_q3.checked==true){
        score++;
        alert("Q3: Right Answer");
    }
    else{
        alert("Q3: Wrong Answer");
    }

    var right_answer_q4= document.getElementById('q4-d1');
    var q4_answer_2 = document.getElementById('q4-d2');
    var q4_answer_3 = document.getElementById('q4-d3');
    var q4_answer_4 = document.getElementById('q4-d4');

    if(right_answer_q4.checked==true){
        score++;
        alert("Q4: Right Answer");
    }
    else{
        alert("Q4: Wrong Answer");
    }

    var right_answer_q5= document.getElementById('q5-e2');
    var q5_answer_2 = document.getElementById('q5-e1');
    var q5_answer_3 = document.getElementById('q5-e3');
    var q5_answer_4 = document.getElementById('q5-e4');

    if(right_answer_q5.checked==true){
        score++;
        alert("Q5:Right Answer");
    }
    else{
        alert("Q5:Wrong Answer");
    }
    alert("Your Score is " + score++);
}


