import React, { useState } from "react";

export default function App () {

    const questions = [
        {
            questionText: 'First question test 01. Hello this is a test!',
            quizChoices: [
                {answerText: 'Answer 01', isCorrect: true},
                {answerText: 'Answer 02', isCorrect: false},
                {answerText: 'Answer 03', isCorrect: false},
                {answerText: 'Answer 04', isCorrect: false},
            ], 
        },
        {
            questionText: 'First question test 02. TEst 02?',
            quizChoices: [
                {answerText: 'Answer 01', isCorrect: false},
                {answerText: 'Answer 02', isCorrect: true},
                {answerText: 'Answer 03', isCorrect: false},
                {answerText: 'Answer 04', isCorrect: false},
            ],
        },
        {
            questionText: 'First question test 03. Answer 03?',
            quizChoices: [
                {answerText: 'Answer 01', isCorrect: false},
                {answerText: 'Answer 02', isCorrect: false},
                {answerText: 'Answer 03', isCorrect: true},
                {answerText: 'Answer 04', isCorrect: false},
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

  
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score +1);
        }

        const nextQuestion = currentQuestion +1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className='app'>
            {showScore ? (
                <div className="score-area">
                    You scored {score} out of {questions.length}
                </div>
            ) : ( 
                <>
                    <div className='question-area'>
                        <div className='question-counter'>
                            <span>Question {currentQuestion +1 }</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>

                    <div className="answer-area">
                        {questions[currentQuestion].quizChoices.map((quizChoices) => (
                            <button onClick={() => handleAnswerOptionClick(quizChoices.isCorrect)}>{quizChoices.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );

}
