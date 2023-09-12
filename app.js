var timeLeft = 75;
document.getElementById("start").addEventListener("click",function(){
    document.getElementById("start-area").style.display = "none"
    document.getElementById("quiz-area").style.display = "block"
    displayQuestion()
    countdown();
})
var question = [
    {
        question:"JavaScript uses what kind of interface to access the DOM structure?",
        choices:["HTML", "API", "CSS", "noSQL"],
        answer:"API"
    },
    {
        question:"How does prompt differ from alert?",
        choices:["Only alert uses parentheses.", "The alert will return a value, prompt does not.", "Only prompt uses parentheses.", "The prompt will return a value, alert does not."],
        answer:"The prompt will return a value, alert does not."
    },
    {
        question:"What does it mean that variables are case-sensitive?",
        choices:["That all variables must use uppercase letters", "That all variables must use lowercase letters", "That the computer does not think that the variables name and Name are the same thing.", "That the computer thinks that the variables name and Name are the same thing."],
        answer:"That the computer does not think that the variables name and Name are the same thing."
    }
]
var questionIndex = 0
function displayQuestion(){
    document.getElementById("question").innerText = question[questionIndex].question
    document.getElementById("answer-1").innerText = question[questionIndex].choices[0]
    document.getElementById("answer-2").innerText = question[questionIndex].choices[1]
    document.getElementById("answer-3").innerText = question[questionIndex].choices[2]
    document.getElementById("answer-4").innerText = question[questionIndex].choices[3]
    
}
document.getElementById("quiz-area").addEventListener("click", function(event){
if(event.target.nodeName === "BUTTON"){
    console.log(event)
    var userChoice = event.target.innerText
    var correctChoice = question[questionIndex].answer
    if(userChoice === correctChoice){
        console.log("correct")
    } else{
        timeLeft = timeLeft-10
        console.log("incorrect")
    }
   if((questionIndex +1) < question.length){
    questionIndex++
    displayQuestion()
   }else{
    console.log("end quiz")
    // end game function then add it to the else 

   }
   

    // if statement to see if question exists
    // else display final results function time left and how many correct 
    }  
    
   
})


var timerEl = document.getElementById('countdown');


function countdown(){

var timerInterval = setInterval(function () {
    
    if (timeLeft > 1){
        timerEl.textContent = timeLeft + ' time left';
        timeLeft--;
    }else{
        clearInterval(timerInterval);
        timerEl.textContent = "";
        // function displayInital(
        document.getElementById("quiz-area").innerHTML = `<h1>${timeLeft}</h1>`
        // document.getElementById("done").style.display = "block"
        // )
        console.log("done")
            if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
    }
    }
    

console.log(countdown)
  }, 1000);
}




