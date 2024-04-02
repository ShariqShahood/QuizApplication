var courses = {
    course1:{
        C_name:"Python",
        subject: "1 Subjects"
    },
    course2:{
        C_name:"Web and App Crash Course",
        subject: "2 Subjects"
       },
    course3:{
        C_name:"Web & App Development(Madaris)",
        subject: "3 Subjects"
    },
    course4:{
        C_name:"TypeScript",
        subject: "1 Subjects"
    },
    course5:{
        C_name:"Web And Mobile Hybrid App Develpment",
        subject: "4 Subjects"
    }
    ,
    course6:{
        C_name:"Module-1 Exam",
        subject: "3 Subjects"
        },
    course7:{
        C_name:"Web & App Rangers",
        subject: "3 Subjects"
        },
    course8:{
        C_name:"Generative AI & Chatbot Batch-3",
        subject: "1 Subjects"
        },
     course9:{
        C_name:"CCO",
        subject: "1 Subjects"   
    },
    course10:{
        C_name:"Web & Mobile App (ASF)",
        subject: "3 Subjects"  

    } 
}

var main = document.getElementById("main");

function allCourses(){
    quizWindow.style.display = "none"
    resultWindow.style.display  = "none";
    main.innerHTML += `
    <div class="txt">
    <p class="animate__animated animate__backInLeft heading1">Hi, Shariq Shahood 👋</p>
    <p class="animate__animated animate__backInRight para">Welcome to the SMIT's quiz portal. Select your course below to take a quiz.</p>
  </div>
  <center><hr id="line"></center>`
    for (var key in courses){
            var obj = courses[key];
            main.innerHTML += `
            <div id="main-div" class="col-12 col-sm-12 col-md-6 col-lg-4 mb-5">
    <div class="animate__animated animate__lightSpeedInRight card-body">
    <h4 id="card-heading">${obj.C_name}</h4>
    <p id="card-text">${obj.subject}</p>
    <div class="card-btn" onclick = "test()" id="butn">Join</div>
    </div>
    </div>
            `;
        }
        }

function test(){
        main.style.display = "none";
        resultWindow.style.display  = "none";
        quizWindow.style.display = "block"
        document.body.style.backgroundImage = "url(saylani.jpg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style. backgroundAttachment = "fixed";
        document.body.style. backgroundSize = "contain";

        var logins = prompt("Test Key is (shariq15) \n Enter Test Key: ")
        if(logins == "shariq15"){
                        let timerInterval;
            Swal.fire({
            title: "Test Is Going To Start!",
            html: "Test will be Start in<b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
            }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
            });
        }
        else{
            prompt("wrong key \n Please Enter (shariq15)")  
        }
}
var htmlQuiz = [
    { que: 'Who is making the Web standards?    ', opt1: 'GOOGLE', opt2: 'MICROSOFT', opt3: 'MOZILLA', opt4: 'WORLD WIDE WEB', ans: 'WORLD WIDE WEB' },
    { que: 'What is the abbreviation of HTML', opt1: 'HYPER TEXT MARKUP LANGUAGE', opt2: 'HYPER INFO MARKUP LANGUAGE', opt3: 'HYPER TEND MARK LANGUAGE', opt4: 'HYPER TEST MARKS LANGUAGE', ans: 'HYPER TEXT MARKUP LANGUAGE' },
    { que: 'Choose the correct HTML element to define important text', opt1: 'STRONG', opt2: 'I', opt3: 'B', opt4: 'IMPORTANT', ans: 'IMPORTANT' },
    { que: 'Choose the correct HTML element for the largest heading:', opt1: 'h1', opt2: 'h6', opt3: 'heading', opt4: 'head', ans: 'h1' },
    { que: 'What is the correct HTML element for inserting a line break?', opt1: 'br', opt2: 'break', opt3: 'lb', opt4: 'next', ans: 'br' },
    { que: 'What is the correct HTML for adding a background color?', opt1: 'background>yellow</background', opt2: 'body bg="yellow"', opt3: 'body style="background-color:yellow;"', opt4: 'None', ans: 'body style="background-color:yellow;"' },
    { que: 'Choose the correct HTML element to define emphasized text', opt1: 'i', opt2: 'italic', opt3: 'em', opt4: 'all of above', ans: 'em' },
    { que: 'Which character is used to indicate an end tag', opt1: '*', opt2: '/', opt3: '<', opt4: '^', ans: '/' },
    { que: 'How can you make a numbered list?', opt1: 'ul', opt2: 'ol', opt3: 'list', opt4: 'dl', ans: 'ol' },
    { que: 'How can you make a bulleted list?', opt1: 'dl', opt2: 'list', opt3: 'ol', opt4: 'ul', ans: 'ul' },
    { que: 'What does CSS stand for?', opt1: 'colorfull style sheet', opt2: 'cascading style sheet', opt3: 'creative style sheet', opt4: 'computer style sheet', ans: 'cascading style sheet' },
    { que: 'Where in an HTML document is the correct place to refer to an external style sheet?', opt1: 'In the Head section', opt2: 'In the Body section', opt3: 'At the end of the document', opt4: 'none of the above', ans: 'In the Head section' },
    { que: 'Which HTML tag is used to define an internal style sheet?', opt1: 'css', opt2: 'script', opt3: 'style', opt4: 'All of the above', ans: 'style' },
    { que: 'Which HTML attribute is used to define inline styles?', opt1: 'style', opt2: 'font', opt3: 'class', opt4: 'styles', ans: 'style' },
    { que: 'Which is the correct CSS syntax?', opt1: '{body:color=black;}', opt2: 'body:color=black;', opt3: 'body{color:black;}', opt4: '{body;color:black}', ans: 'body{color:black;}' },
    { que: 'How do you insert a comment in a CSS file?', opt1: '//this is comment', opt2: '/*this is comment*/', opt3: '//this is comment//', opt4: 'none', ans: '/*this is comment*/' },
    { que: 'Which property is used to change the background color?', opt1: 'color', opt2: 'bgcolor', opt3: 'background-color', opt4: 'All of the above', ans: 'background-color' },
    { que: 'Which CSS property is used to change the text color of an element?', opt1: 'fgcolor', opt2: 'color', opt3: 'text-color', opt4: 'all of the above', ans: 'color' },
]

var questionCount = 0
var score = 0
var label1 = document.querySelector('#val1')
var label2 = document.querySelector('#val2')
var label3 = document.querySelector('#val3')
var label4 = document.querySelector('#val4')

var opt1 = document.querySelector('#option1')
var opt2 = document.querySelector('#option2')
var opt3 = document.querySelector('#option3')
var opt4 = document.querySelector('#option4')

var quizWindow = document.querySelector('#quizWindow')
var resultWindow = document.querySelector('#result')
var question = document.querySelector('#question')
var announce = document.querySelector('#announce')

var totalQueCount = document.querySelector('#totalQueCount')
var correctQueCount = document.querySelector('#correctQueCount')
var answers = document.getElementsByClassName('optionsCheck')

function renderQuestion() {
    question.innerHTML = htmlQuiz[questionCount].que

    label1.innerHTML = htmlQuiz[questionCount].opt1
    label2.innerHTML = htmlQuiz[questionCount].opt2
    label3.innerHTML = htmlQuiz[questionCount].opt3
    label4.innerHTML = htmlQuiz[questionCount].opt4

    opt1.value = htmlQuiz[questionCount].opt1
    opt2.value = htmlQuiz[questionCount].opt2
    opt3.value = htmlQuiz[questionCount].opt3
    opt4.value = htmlQuiz[questionCount].opt4
}

function deSelect() {
    for (var i = 0; i < answers.length; i++) {
        answers[i].checked = false
    }
}

function next() {
    var checkedAns = false
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            checkedAns = true
            if (answers[i].value === htmlQuiz[questionCount].ans) {
                score++
            }
        }
    }

    if (!checkedAns) {
        alert('Please Select Any Option')
    } else {
        if (questionCount < htmlQuiz.length - 1) {
            questionCount++
            deSelect()
            renderQuestion()
        } else {
            showResult()
        }
    }
}

function showResult() {
    console.log('your score is ' + score)
    quizWindow.style.display = 'none'
    resultWindow.style.display = 'block'
    totalQueCount.innerHTML = htmlQuiz.length
    document.body.style.fontSize = "x-large"
    document.body.style.fontWeight = "Bolder"
    correctQueCount.innerHTML = score

    var percentage = Math.floor((score / htmlQuiz.length) * 100)
    if (percentage < 70) {
        announce.innerHTML = 'SORRY! You Are Failed ☹️'
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Failed! Better Luck Next Time.",
            showConfirmButton: false,
            timer: 1500
          });     
    } else {
        announce.innerHTML = 'CONGRATULATION! You Are Passed🥳 ';
        Swal.fire({
            icon: "success",
            title: "Congratulation, You Passed the Test.",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });        
    }
}
window.onload = renderQuestion()
allCourses();

                            // login
window.onload = function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      showWelcomePage();
    }
  };
  document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'shariq' && password === 'shariq15') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
      showWelcomePage();
    } else {
    //   alert('Invalid username or password. Please try again.');
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong Credentials!",
        footer: '<a href="#">Please Enter Correct Credentials</a>'
      });
    }
  });
  
  function showWelcomePage() {
    resultWindow.style.display = "none"
    quizWindow.style.display = 'none'

    const loginForm = document.getElementById('loginForm');
    const welcomeDiv = document.getElementById('welcome');
    const welcomeUsername = document.getElementById('welcomeUsername');
  
    const username = localStorage.getItem('username');
  
    loginForm.style.display = 'none';
    welcomeDiv.style.display = 'block';
    welcomeUsername.textContent = username;
  }
  
  function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = 'index.html';
  }
  