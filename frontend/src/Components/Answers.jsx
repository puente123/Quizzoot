import React, { useState } from 'react'

export default function Answers({ locked, setLocked, submitAnswer, nextQuestion, answerChoices, correctAnswer }) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    function safeSetSelectedIndex(index) {
        if(!locked)
            setSelectedIndex(index);
    }

    // Submits only if an answer has been selected (default is -1)
    function safeSubmit() {
        if(selectedIndex < 0 || selectedIndex > 3)
            return;
        setLocked(true);
        submitAnswer(selectedIndex === correctAnswer);
    }

    function safeNextQuestion() {
        nextQuestion();
        setSelectedIndex(-1);
    }

    function SubmitButton() {
        return (
            <div className="bg-white p-4 m-2 mt-3 rounded-4 container" style={{cursor: "pointer"}} onClick={() => safeSubmit()}>
                <h1 className="text-black fs-3 text-center">Submit</h1>
            </div>
        )
    }

    function NextQuestionButton() {
        return (
            <div className="bg-white p-4 m-2 mt-3 rounded-4 container" style={{cursor: "pointer"}} onClick={() => safeNextQuestion()}>
                <h1 className="text-black fs-3 text-center">Next Question</h1>
            </div>
        )
    }

    function answerColor(index) {
        let output = "bg-white"
        if(correctAnswer === index && locked)
            output = "bg-success";
        if(selectedIndex === index && !locked)
            output = "bg-info";
        if(selectedIndex === index && locked && correctAnswer !== index)
            output = "bg-danger";
        output += " p-4 m-2 rounded-4 container-md";
        return output
    }

    return (
        <>
            {answerChoices.map((answerChoice, index) => (
                <div key={index} className={answerColor(index)} style={{cursor: "pointer"}} onClick={() => safeSetSelectedIndex(index)}>
                    <h1 className="text-black fs-5">{answerChoice}</h1>
                </div>
            ))}
            {locked ? <NextQuestionButton /> : <SubmitButton />}
        </>
    )
}