const btnCheck = document.querySelector("#btn-check");
const quizForm = document.querySelector(".form-quiz");
const message = document.querySelector("#message");
const correctAnswers =["90°","right angled","Equilateral","3"]

function calculateScore(){
    var score = 0;
    var index = 0;
    var formData = new FormData(quizForm);
    for (let value of formData.values()){
        if (value === correctAnswers[index])
            score = score+1;
        index = index+1;
    }
    message.innerHTML = "You have scored " + score +"/4";
}
btnCheck.addEventListener('click',calculateScore);