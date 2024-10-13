import React from 'react'
import Answers from './Answers'

export default function QuizQuestion({ questionNumber, question, answerChoices, correctAnswer, locked, setLocked, submitAnswer, nextQuestion }) {
       
    return (
        <div className="d-flex justify-content-center flex-column vh-100 vw-100 align-items-center">
            <h1 className="text-black fs-3 bg-white p-4 rounded-4">Question {questionNumber}</h1>
            <div className="bg-white fs-3 p-4 mt-4 mb-3 rounded-4 container-sm text-center">
                <h1 className="text-black fs-3">{question}</h1>
            </div>
            <Answers 
                answerChoices={answerChoices} 
                correctAnswer={correctAnswer} 
                locked={locked}
                setLocked={setLocked}
                submitAnswer={submitAnswer}
                nextQuestion={nextQuestion} />
        </div>
    )
}