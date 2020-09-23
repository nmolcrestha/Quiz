let questions = [
    {
      id: 1,
      question: "What is the full form of RAM ?",
      answer: ["Random Access Memory", "None of these"],
      options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "What is the full form of CPU?",
      answer: ["Central Processing Unit"],
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail",
      answer: ["Electronic Mail"],
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    }
  ];

let questionCount = 0;
let points = 0;

window.onload = () => showQuestion(questionCount);

  
const onSubmit = (event) => {
    event.preventDefault();
    let name = document.querySelector('.userName').value;
    sessionStorage.setItem('name', name);
    location.href = 'quiz.html';
}

const showQuestion = (count) => {
    let question = document.getElementById('question');
    question.innerHTML = `
    <h2>Q${questionCount+1}. ${questions[count].question}</h2>`;
    let output = '';
    if(questions[count].answer.length > 1){
      questions[count].options.map( item => output += `
    <label class="option">
				<input type="checkbox" name="quiz" class="quiz-option" value='${item}'> ${item}
		</label>` );
    } else{
      questions[count].options.map( item => output += `
    <label class="option">
				<input type="radio" name="quiz" class="quiz-option" value='${item}'> ${item}
		</label>` );
    }

    question.innerHTML += output;
   
}

const nextQuestion = () => {
  const userAnswer = [];
  let selectedAnswer = document.querySelectorAll('input:checked');
  
  for (let i = 0; i < selectedAnswer.length; i++) {
  userAnswer.push(selectedAnswer[i].value)
}
    
    
    //   console.log(userAnswer);
      

    // let list = [].slice.call(userAnswer);
    // let innertext = list.map(function(e) { return e.innerText; }).sort();
    // questions[questionCount].question;
    // console.log(JSON.stringify(userAnswer.sort()));
    // console.log(JSON.stringify(questions[questionCount].answer.sort()));

    const valid = JSON.stringify(userAnswer.sort()) === JSON.stringify(questions[questionCount].answer.sort());

    if(valid){
        points += 10;
        sessionStorage.setItem('points', points);
        console.log('YESS');
    }else{
        console.log('NOOOOOOOOO');
    }

    if(questionCount == questions.length - 1){
        location.href = 'end.html';
        return;
    }
    questionCount++;
   showQuestion(questionCount);
}


document.querySelector('.btn-next').addEventListener('click', nextQuestion);