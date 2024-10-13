import React from 'react'
import QuizQuestion from './QuizQuestion'
import { useState, useEffect } from 'react';
import Loading from './Loading';

export default function Quiz({ deck, returnScore }) {
	const [questionNumber, setQuestionNumber] = useState(1);
	const [locked, setLocked] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [questions] = useState(generateTestFromDeck());
    const [score, setScore] = useState(0);

    // Passed into QuizQuestion to handle question submission
	const submitAnswer = (isAnswerCorrect) => {
		if(isAnswerCorrect)
            setScore(score+1);
	}

    function nextQuestion() {
        if(questionNumber === deck.length) {
            returnScore(score);
            return;
        }
        setQuestionNumber(questionNumber+1);
    }

    useEffect(() => {
        setLocked(false);
    }, [questionNumber])

    function generateTestFromDeck() {
        let output = [];
        let generatedIndex = 0;
        for(let i = 0; i < deck.length; i++) {
            generatedIndex = Math.floor(Math.random() * 4);
            output.push({
                "question": deck[i].question,
                "answers": [],
                "correctIndex": generatedIndex
            });
            for(let j = 0; j < 4; j++)
                // TODO: generate fake AI answers and add to array
                output[i]["answers"].push(j === generatedIndex ? deck[i].answer : "AI wrong answer");
        }
        return output;
    }

    useEffect(() => {
        setLoaded(true);
    }, [])
    
    function getQuestion() {
        return questions[questionNumber-1].question;
    }

    function getAnswerChoices() {
        return [
            questions[questionNumber-1].answers[0],
            questions[questionNumber-1].answers[1],
            questions[questionNumber-1].answers[2],
            questions[questionNumber-1].answers[3]
        ];
    }

    function getCorrectAnswer() {
        return questions[questionNumber-1].correctIndex;
    }

    return (
        <>
            {!loaded ?
                <Loading /> :
                <QuizQuestion 
                    questionNumber={questionNumber} 
                    question={getQuestion()} 
                    answerChoices={getAnswerChoices()}
                    correctAnswer={getCorrectAnswer()} 
                    locked={locked}
                    setLocked={setLocked}
                    submitAnswer={submitAnswer}
                    nextQuestion={nextQuestion} />}
        </>
    );
}