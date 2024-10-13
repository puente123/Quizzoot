import React, { useState } from 'react'

export default function Answers(props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    function safeSetSelectedIndex(index) {
        if(!props.locked)
            setSelectedIndex(index);
    }

    // Submits only if an answer has been selected (default is -1)
    function safeSubmit() {
        if(selectedIndex <= 0 || selectedIndex >= 3)
            return;
        props.submitAnswer(selectedIndex);
    }

    return (
        <>
            {props.answerChoices.map((answerChoice, index) => (
                <div key={index} className={selectedIndex===index ? "bg-info p-4 m-2 rounded-4 container-md" : "bg-white p-4 m-2 rounded-4 container-md"} style={{cursor: "pointer"}} onClick={() => safeSetSelectedIndex(index)}>
                    <h1 className="text-black fs-5">{answerChoice}</h1>
                </div>
            ))}
            <div className="bg-white p-4 m-2 mt-3 rounded-4 container" style={{cursor: "pointer"}} onClick={() => safeSubmit()}>
                <h1 className="text-black fs-3 text-center">Submit</h1>
            </div>
        </>
    )
}