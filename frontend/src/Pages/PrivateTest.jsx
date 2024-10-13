import React, { useState } from 'react'
import NavBar from '../Layout/NavBar'
import Answers from '../Components/Answers';
import QuizQuestion from '../Components/QuizQuestion';

export default function PrivateTest() {
	const [questionNumber, setQuestionNumber] = useState(1);
	const [locked, setLocked] = useState(false);

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

	// Passed into QuizQuestion to handle question submission
	// Returns submitted question index from [0-3]
	const submitAnswer = (index) => {
		setLocked(true);
		console.log(index)
	}

	return (
		<div>
			<NavBar/>
			<QuizQuestion 
				questionNumber={questionNumber} 
				question={getQuestion()} 
				answerChoices={getAnswerChoices()}
				locked={locked}
				submitAnswer={submitAnswer} />
		</div>
	)
}
