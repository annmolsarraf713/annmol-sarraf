const question= [
    {
        question:"which is the largest animal in the world",
        answer:[
            { text:"shark" ,correct: false },
            { text:"blue whale" ,correct: true },
            { text:"elephant" ,correct: false },
            { text:"girraffe" ,correct: false },
        ]
},
{
    question:"which is the smallest continent in the world",
    answer:[
        { text:"asia" ,correct: false },
        { text:"Australia" ,correct: true },
        { text:"Arctic" ,correct: false },
        { text:"Africa" ,correct: false },
    ]
},
{
question:"which is the largest desert  in the world",
answer:[
    { text:"kalahari" ,correct: false },
    { text:"Gobi" ,correct: true },
    { text:"Sahara" ,correct: false },
    { text:"Antractica" ,correct: true },
]
  },
   }
];
const questionElement=document.getelementsbyid("question");
const answerButton=document.getelementsbyid("answer-button");
const nextButton=document.getelementsbyid("next-btn");
let currentquestionindex = 0;
let score = 0;
function start quiz (){
    current questionindex =0;
    score=0;
    nextButton.innerHTML="next";
    showquestion();
}
function showquestion(){
    reset State();
    let currentquestion = question[currentquestionindex];
    let questionNo = currentquestionindex +1;
    questionElement.innerHTML=questionNo + "." +currentquestion.question;
    currentquestion.answers.forEach(answer => {
        const button= document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendchild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",select answer)
 });
}
function reset State(){
    nextButton.style.display=|"none";
    while(answerButtons.first child)
        {
            answerButtons.removechid(answerButtons.first child);
        }

}
function select answer(e)
{
    const selectedbtn = e.target;
    const is correct= selectedbtn.dataset.correct==="true";
    if (is correct){
    selectedbtn.classList.add("correct");}
    else{
        selectedbtn.classList.add("is incorrect");
        
    }
}
start quiz ();