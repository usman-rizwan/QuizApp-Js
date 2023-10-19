var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        option1: '<script>',
        option2: '<javascript>',
        option3: '<js>',
        correctOption: '<script>'
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        option1: 'The <head> section',
        option2: 'The <body> section',
        option3: 'Both the <head> and "body" section are correct',
        correctOption: 'The <body> section'
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: '<scripr href="xxx.js">',
        option2: '<scripr name="xxx.js">',
        option3: '<scripr src="xxx.js">',
        correctOption: '<scripr src="xxx.js">'
    },
    {
        question: 'The external JavaScript file must contain the script tag.',
        option1: 'False',
        option2: 'True',
        option3: 'idk',
        correctOption: 'False'
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        option1: 'msg("Hello World");',
        option2: 'alert("Hello World");',
        option3: 'alertBox("Hello World");',
        correctOption: 'alert("Hello World");'
    },
    {
        question: 'How do you create a function in JavaScript?',
        option1: 'function = myFunction()',
        option2: 'function myFunction()',
        option3: 'function:myFunction()',
        correctOption: 'function myFunction()'
    },
    {
        question: 'How do you call a function named "myFunction"?',
        option1: 'call function myFunction()',
        option2: 'myFunction()',
        option3: 'call myFunction()',
        correctOption: 'myFunction()'
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        option1: 'if i = 5',
        option2: 'if(i == 5)',
        option3: 'if i == 5 then',
        correctOption: 'if(i == 5)'
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        option1: 'if =! 5 then',
        option2: 'if(i != 5)',
        option3: 'if i <> 5',
        correctOption: 'if(i != 5)'
    },
]
var ques = document.getElementById("ques")
var opt1 = document.getElementById("opt1")
var opt2 = document.getElementById("opt2")
var opt3 = document.getElementById("opt3")
var button = document.getElementById("btn")
var opt = document.getElementsByName("opt")
var timer = document.getElementById("timer")
var timeInterval ;

// console.log(opt);
var index = 0;
var score = 0;
var sec = 59;
var min = 1
var timerInterval;

// console.log(questions.length);
function myTimer() {
    timer.innerHTML = ` <i class="fa-solid fa-stopwatch "></i> ${min} : ${sec}`
    sec--
    if (sec < 0) {
        sec = 59;
        min--;
    }
    if (min == 0 && sec == 0) {
        nextQuestion()
    }
}
timerInterval = setInterval(myTimer, 1000);

function nextQuestion() {
    for (let i = 0; i < opt.length; i++) {
        // console.log(opt[i]);
        if (opt[i].checked) {
            // console.log(opt[i].value);

            var currentQues = questions[index - 1].question
            var selectedAns = questions[index - 1][`option${opt[i].value}`]
            var correctOpt = questions[index - 1].correctOption
            // console.log(correctOpt);
            // console.log(currentQues);
            // console.log(selectedAns);
            if (selectedAns == correctOpt) {
                score++
            }
        }

        opt[i].checked = false
    }

    if (index > questions.length - 1) {
        Swal.fire({
            icon: 'success',
            title: 'Questions Ended!!',
            text: `Your score is ${score} out of ${questions.length}   `,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }

        })
        index = 0;
        score = 0;
        min = 0;
        sec = 0;
        clearInterval(timerInterval);
       
        var myBtn = document.querySelector(".swal2-confirm")
        // console.log(myBtn);
        myBtn.addEventListener('click', function () {
            location.reload();
            window.location.href = "./index.html"
        });


    } else {
        ques.innerHTML = ` <h1 class="accordion-button txt"  type="button">
      Q${index + 1}) ${questions[index].question}
         </h1>`
        opt1.innerText = questions[index].option1
        opt2.innerText = questions[index].option2
        opt3.innerText = questions[index].option3
        index++
        // console.log(score);
        btn.disabled = true;
        sec = 59;
        min = 1

    }
}
nextQuestion()




function clicked() {
    btn.disabled = false
}


