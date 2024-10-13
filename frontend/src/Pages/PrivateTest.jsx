import React, { useState } from 'react'
import NavBar from '../Layout/NavBar'
import Answers from '../Components/Answers';
import Quiz from '../Components/Quiz';

export default function PrivateTest() {
	// Passed into QuizQuestion to handle question submission
	// Returns submitted question index from [0-3]
	const submitAnswer = (index) => {
		console.log(index)
	}

	return (
		<div>
			<NavBar/>
			<Quiz submitAnswer={submitAnswer} />
		</div>
	)
}
