const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
let h2= document.querySelector("h2")
let options=document.querySelectorAll(".options")
let submit=document.querySelector(".btn")
score=0


let optionChange=(n)=>{
h2.innerText=quizData[n].question

let option1=document.querySelector("#option1")
option1.nextElementSibling.innerText=quizData[n].a

let option2=document.querySelector("#option2")
option2.nextElementSibling.innerText=quizData[n].b

let option3=document.querySelector("#option3")
option3.nextElementSibling.innerText=quizData[n].c

let option4=document.querySelector("#option4")
option4.nextElementSibling.innerText=quizData[n].d

options.forEach((option)=>{
    option.checked=false
})
}

optionChange(0)
n=0;
anscheck=[];
box=document.querySelector("#box")
main=document.querySelector(".main")
submit.addEventListener("click",()=>{
    
   let selectedoption=[] 
    options.forEach((option)=>{
        if(option.checked){
            selectedoption=option.value
            console.log(selectedoption)
            if(selectedoption==quizData[n].correct){
                score++;
                console.log(score);
            }
        }
    })
    n=n+1
    if(n<4){
    optionChange(n)
    }
    if(n==4){
        box.innerHTML=`<h1>Score is ${score}`;
        box.style.height="300px";
        box.style.display="flex";
        box.style.alignItems = "center";
         box.style.padding="150px"
    }
})