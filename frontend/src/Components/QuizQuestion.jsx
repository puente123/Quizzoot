import React from 'react'
import Answers from './Answers'

export default function QuizQuestion(props) {
    return (
        <div className="d-flex justify-content-center flex-column vh-100 vw-100 align-items-center">
            <h1 className="text-black fs-3 bg-white p-4 mb-4 rounded-4">Question {props.questionNumber}</h1>
            <div className="bg-white fs-3 p-4 mt-4 mb-3 rounded-4 container-sm text-center">
                <h1 className="text-black fs-3">{props.question}</h1>
            </div>
            <Answers 
                answerChoices={props.answerChoices} 
                locked={props.locked}
                submitAnswer={props.submitAnswer} />
        </div>
    )
}