import React, { useState } from 'react'
import NavBar from '../Layout/NavBar'
import Quiz from '../Components/Quiz';
import Loading from '../Components/Loading';

export default function PrivateTest() {
	const [finished, setFinished] = useState(false);
	const [score, setScore] = useState(0);

	// PLACEHOLDER
	let dummyDeck = {
        "id": 3,
        "name": "cse3318",
        "subject": "algorithms",
        "private": 0,
        "flashcards": [
            {
                "id": 1,
                "question": "algo1",
                "answer": "a1"
            },
            {
                "id": 2,
                "question": "algo2",
                "answer": "a2"
            },
            {
                "id": 3,
                "question": "algo3",
                "answer": "a3"
            }
        ]
    };

	// pull score from Quiz after test is done
	function returnScore(quizScore) {
		setScore(quizScore);
		setFinished(true);
	}

	// TODO: replace <h1>Finished</h1> with handling for finishing the quiz
	return (
		<div>
			<NavBar/>
			{!finished ?
				<Quiz deck={dummyDeck} returnScore={returnScore} /> :
				<h1>Finished</h1>}
		</div>
	)
}
