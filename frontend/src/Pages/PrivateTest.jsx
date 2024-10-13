import React, { useState } from 'react'
import NavBar from '../Layout/NavBar'
import Quiz from '../Components/Quiz';
import Loading from '../Components/Loading';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function PrivateTest({username}) {
	const [finished, setFinished] = useState(false);
	const [score, setScore] = useState(0);

	const location = useLocation();
	const { deck } = location.state || dummyDeck;

	console.log(deck);

	// PLACEHOLDER
	let dummyDeck = [
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
	];

	// pull score from Quiz after test is done
	function returnScore(quizScore) {
		setScore(quizScore);
		setFinished(true);
	}

	const navigate = useNavigate();
	const handleExit = () => {
		navigate('/view', {state:{deck:deck}})
	}

	function Results() {
		return (
			<>
				<div className="d-flex justify-content-center flex-column vh-100 vw-100 align-items-center">
					<h2 className="text-white fs-1">You scored a {score}/{deck.length}</h2>
					<h2 className="text-white fs-1">{score/deck.length*100}%</h2>
					<Button className="fs-2" onClick={handleExit}>Exit</Button>
				</div>
			</>
		)
	}

	// TODO: replace <h1>Finished</h1> with handling for finishing the quiz
	return (
		<div>
			<NavBar username={username} />
			{!finished ?
				<Quiz deck={deck} returnScore={returnScore} /> :
				<Results deck={deck} />}
		</div>
	)
}
