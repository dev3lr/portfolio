const question=document.getElementById('question');
const choices=Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion= {};
let acceptAnswers={};
let score=0;

let questionCounter=0;
let availableQuestions={};

let questions = [
    {
        question: "Who is the protagonist of attack on titan?",
        choice1: "Levi Ackerman",
        choice2: "Armin Arlert",
        choice3: "Eren Yeager",
        choice4: "Sasha Braus",
        answer: 3
    },

    {

        question: "Who has the highest iq in death note",
        choice1: "Light Yagami",
        choice2: "Near",
        choice3: "Watari",
        choice4: "L Lawliet",
        answer: 4
    },

    {
        question: "What is the name of the village where Naruto Uzumaki grows up?",
        choice1: "Konohagakure",
        choice2: "Sunagakure",
        choice3: "Kirigakure",
        choice4: "Kusagakure",
        answer: 1
        },

        { question: "Who is the successor of L?",
        choice1: "Near",
        choice2: "Mello",
        choice3: "Light Yagami",
        choice4: "Watari",
        answer: 1},

           {
            question: "What is the name of Sakura Haruno's signature jutsu?",
            choice1: "Healing Jutsu",
            choice2: "Cherry Blossom Impact",
            choice3: "Mystical Lotus",
            choice4: "Deadly Lily",
            answer: 2
            },

           {
                question: "What is the name of the strongest demon in the series?",
                choice1: "Muzan Kibutsuji",
                choice2: "Yoriichi Tsugikuni",
                choice3: "Tengen Uzui",
                choice4: "Gyutaro",
                answer: 1
                },
                {
                question: "What is the name of Saitama's disciple?",
                choice1: "Genos",
                choice2: "Mumen Rider",
                choice3: "Tatsumaki",
                choice4: "King",
                answer: 1
                },

                {
                    question: "What is the name of the demon that killed Tanjiro's family?",
                    choice1: "Muzan Kibutsuji",
                    choice2: "Rui",
                    choice3: "Enmu",
                    choice4: "Slamming Demon",
                    answer: 1
                    },

                    {
                        question: "What is the name of the tailed beast sealed within Naruto?",
                        choice1: "One-Tail",
                        choice2: "Two-Tails",
                        choice3: "Three-Tails",
                        choice4: "Nine-Tails",
                        answer: 4
                        },
                    
                        {
                            question: "What is the name of Twilight's daughter?",
                            choice1: "Any Forger",
                            choice2: "Yor Briar",
                            choice3: "Sylvia Sherwood",
                            choice4: "Emile Elman",
                            answer: 1
                            },

                            {
                                question: "Who is the leader of the Ostanian spy agency?",
                                choice1: "Sylvia Sherwood",
                                choice2: "Henry Henderson",
                                choice3: "Nightshade",
                                choice4: "Fiona Frost",
                                answer: 4
                                }
                                
]

const CORRECT_BONUS=10;
const MAX_QUESTIONS=9;
startGame=()=> {
    questionCounter=0;
    score=0;
    availableQuestions=[...questions];
    

    getNewQuestion();
};


getNewQuestion = () => {
    if(availableQuestions.length==0 ||questionCounter>=MAX_QUESTIONS){
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
      const number = choice.dataset['number'];
      choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionIndex,1);
    acceptingAnswers=true;

  };

  choices.forEach(choice => {
    choice.addEventListener("click",e=> {
       if(!acceptingAnswers) return;

       acceptingAnswers=false;
       const selectedChoice=e.target;
       const selectedAnswer=selectedChoice.dataset['number'];

       const classToApply=
       selectedAnswer==currentQuestion.answer?'correct':'incorrect';
       selectedChoice.parentElement.classList.add(classToApply);
       setTimeout(()=>{
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
    },1000);
       
       

    });
});
  
 startGame();