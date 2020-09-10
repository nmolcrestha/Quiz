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
    questions[count].options.map( item => output += `<li class="option">${item}</li>` );
    question.innerHTML = output;
    questions[count].answer.length > 1 ? toggleManyActive() : toggleActiveOne();
}

const nextQuestion = () => {
    
    let userAnswer = document.querySelectorAll('li.option.active');

    let list = [].slice.call(userAnswer);
    let innertext = list.map(function(e) { return e.innerText; }).sort();
    console.log(questions[questionCount].question);
    console.log(JSON.stringify(innertext));
    console.log(JSON.stringify(questions[questionCount].answer.sort()));

    const valid = JSON.stringify(innertext) === JSON.stringify(questions[questionCount].answer.sort());

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


const toggleManyActive = () => {
    const  option = document.querySelectorAll('.option');
   for(let i = 0; i < option.length; i++){

       option[i].addEventListener('click', () => {
          //  for(let j = 0; j < option.length; j++){
          //      if(option[j].classList.contains('active')){
          //       option[j].classList.remove('active')
          //      }
          //  }
           option[i].classList.toggle('active');
          //  console.log(questions[questionCount].answer.length > 1);
        })
   }
}

const toggleActiveOne = () => {
  const  option = document.querySelectorAll('.option');
 for(let i = 0; i < option.length; i++){

     option[i].addEventListener('click', () => {
         for(let j = 0; j < option.length; j++){
             if(option[j].classList.contains('active')){
              option[j].classList.remove('active')
             }
         }
         option[i].classList.add('active');
        //  console.log(questions[questionCount].answer.length > 1);
      })
 }
}