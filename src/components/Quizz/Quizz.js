import React, { useEffect, useState } from "react";
import './Quizz.css';
import { questions } from './Questions.js';


export default function Quizz () {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [totalGryffindor, setTotalGryffindor] = useState(0);
    const [totalSlytherin, setTotalSlytherin] = useState(0);
    const [totalRavenclaw, setTotalRavenclaw] = useState(0);
    const [totalHufflepuff, setTotalHufflepuff] = useState(0);

    const [house, setHouse] = useState("Muggle");

    const [showQuiz, setShowQuiz] = useState(false);
    const [showHouse, setSHowHouse] = useState(false);

    const answerHandler = (gryffindor, slytherin, ravenclaw, hufflepuff) => {
        setTotalGryffindor(totalGryffindor + gryffindor);
        setTotalSlytherin(totalSlytherin + slytherin);
        setTotalRavenclaw(totalRavenclaw + ravenclaw);
        setTotalHufflepuff(totalHufflepuff + hufflepuff);

        switch (Math.max(totalGryffindor, totalSlytherin, totalRavenclaw, totalHufflepuff)) {
            case totalGryffindor: setHouse("Gryffindor")
            break;
            case totalSlytherin: setHouse("Slytherin")
            break;
            case totalRavenclaw: setHouse("Ravenclaw")
            break;
            case totalHufflepuff: setHouse("Hufflepuff")
            break;
            default:
                break;
        };

        const nextQuestion = currentQuestion +1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setSHowHouse(true);
        }
    };

    const [background, setBackground] = useState("")
    const changeBackground = () => {
        if (house === "Gryffindor" && showHouse === true) {
            setBackground(require("./gryffindor.jpg"));
        }
        if (house === "Slytherin" && showHouse === true) {
            setBackground(require("./slytherin.jpg"));
        }
        if (house === "Ravenclaw" && showHouse ===  true) {
            setBackground(require("./ravenclaw.jpg"));
        }
        if (house === "Hufflepuff" && showHouse === true) {
            setBackground(require("./hufflepuff.jpg"));
        }
    };

    useEffect(() => {
        changeBackground()
    });

    return (
        <div>
        <div className='main-title'>The Sorting Hat</div>
        <div className='main' style={{
            borderRadius:'7px', 
            backgroundPosition: '50%', 
            backgroundBlendMode:'normal', 
            backgroundImage: `url(${background})`
            }}>
            {showQuiz ? (
            <div>
            {showHouse ? (
                <div className='score-section'>
                    You belong in 
                    <br/>
                    <p className='house'>{house}</p> 
                </div>
                
            ) : (
                <>
                <div className='part-two'>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].options.map((option) => (
                            <button onClick={() => {answerHandler(option.gryffindor, option.slytherin, option.ravenclaw, option.hufflepuff);}}>{option.optionText}</button>
                        ))}
                    </div>
                </div>
                    
                </>
            )} </div>
        ) : (
        <>
                <div className='intro-part'>
                    <div className='intro-text'>
                    There's nothing hidden in your head The Sorting Hat can't see, So try me on and I will tell you where you ought to be.
                    </div>
                    <button className='start-button button-loader'
                    onClick={() => setShowQuiz(true)}>Start</button>
                </div>
        </>
        )}
        </div>
        </div>
    );
}
