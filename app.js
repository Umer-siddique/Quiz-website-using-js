let quizQuestion = [
    {
        question: "Q1: When speed and direction of motion of a body do not change then the body will have?",
        a: "uniform velocity",
        b: "variable velocity",
        c: "uniform acceleration ",
        d: "variable acceleration",
        ans: "ans1"
    },
    {
        question: "Q2: The quantity of motion in a body is called?",
        a: "Weight",
        b: "Torque",
        c: "Force",
        d: "Momentum",
        ans: "ans4"
    },
    {
        question: "Q3: A force of 100 N is acting vertically on a body. Find the horizontal component Fx?",
        a: "Zero",
        b: "45 N",
        c: "90 N",
        d: "150N",
        ans: "ans1"
    },
    {
        question: "Q4:The value of gravitational constant is determined by?",
        a: "Einstein",
        b: "cavendish",
        c: "Newton",
        d: "none of them",
        ans: "ans2"
    }
];

const questions = document.querySelector('.questions');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const next = document.querySelector('#next');
const allRadioBtns = document.querySelectorAll('.answer');
const scoreArea=document.querySelector('#score-div');

let questionIndex = 0;
let scoreCount = 0;



const uploadQuestions = () => {
    let QuesandAns = quizQuestion[questionIndex];
    questions.innerHTML = QuesandAns.question;
    option1.innerHTML = QuesandAns.a;
    option2.innerHTML = QuesandAns.b;
    option3.innerHTML = QuesandAns.c;
    option4.innerHTML = QuesandAns.d;

}
uploadQuestions();

const getAnswer = () => {
    let answer;
    allRadioBtns.forEach((currentELement) => {
        if (currentELement.checked) {
            answer = currentELement.id;
        }
    })
    return answer;
}

   const unChecked=()=>{
       allRadioBtns.forEach((currentELement)=>{
           currentELement.checked=false;
       })
   }

next.addEventListener('click', () => {
    const checkAnswer = getAnswer();
    if(checkAnswer===quizQuestion[questionIndex].ans){
        scoreCount++;
    }
    
    unChecked();
   
    questionIndex++;
    if(questionIndex < quizQuestion.length){
    uploadQuestions();
    }
    else{

        alert("Questions has End please submit your Answers to check your score...");
        next.classList.add('show-div');
    }
});

const submitAnswers=()=>{
   if(scoreCount==0||scoreCount==quizQuestion.length-(quizQuestion.length-1) || scoreCount==quizQuestion.length-(quizQuestion.length-2)){
  scoreArea.innerHTML=`<h4 class="text"> Poor you scored  ${scoreCount} / ${quizQuestion.length}  &#128078</h4>`;
}
else if(scoreCount==quizQuestion.length){
    scoreArea.innerHTML=`<h4 class="text"> Excellent!  you scored  ${scoreCount} / ${quizQuestion.length} &#128077 </h4`;    
}
else if(scoreCount==quizQuestion.length-1 ||scoreCount==quizQuestion.length-2 ||scoreCount==quizQuestion.length-3){
    scoreArea.innerHTML=`<h4 class="text"> good attempt!  you scored  ${scoreCount} / ${quizQuestion.length} &#128077 </h4>`; 
}
else{
    scoreArea.innerHTML=`<h4 class="text"> Well tried!  you scored  ${scoreCount} / ${quizQuestion.length} &#128077 </h4>`; 
}
  scoreArea.classList.remove('show-div');
}

submit.addEventListener('click',()=>{
submitAnswers();
});


