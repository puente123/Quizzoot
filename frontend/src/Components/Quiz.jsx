import React from 'react'
import QuizQuestion from './QuizQuestion'
import { useState } from 'react';

export default function Quiz({ deck, submitAnswer }) {
	const [questionNumber, setQuestionNumber] = useState(1);
	const [locked, setLocked] = useState(false);

    // PLACEHOLDER
    let correctAnswer = 3;
    
    // PLACEHOLDER
	function getQuestion() {
		return "This is an example question. What is the answer? This is an example question. What is the answer? This is an example question. What is the answer?";
	}

	// PLACEHOLDER
	function getAnswerChoices() {
		return [
			"choice1",
			"choice2",
			"choice3",
			"choice4"
		];
	}

    function nextQuestion() {
        setQuestionNumber(questionNumber + 1);
        setLocked(false);
    }

    return (
        <QuizQuestion 
				questionNumber={questionNumber} 
				question={getQuestion()} 
				answerChoices={getAnswerChoices()}
                correctAnswer={correctAnswer} 
				locked={locked}
                setLocked={setLocked}
				submitAnswer={submitAnswer}
                nextQuestion={nextQuestion} />
    )
}