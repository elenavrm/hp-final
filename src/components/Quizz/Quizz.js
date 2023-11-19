import React, { useEffect, useState, useCallback } from "react";
import './styles.css';
import { data } from "./data";
import hogwarts from './hogwarts.png';

function Quizz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalGryffindor, setTotalGryffindor] = useState(0);
    const [totalSlytherin, setTotalSlytherin] = useState(0);
    const [totalRavenclaw, setTotalRavenclaw] = useState(0);
    const [totalHufflepuff, setTotalHufflepuff] = useState(0);
    const [house, setHouse] = useState("Muggle");
    const [showQuiz, setShowQuiz] = useState(false);
    const [showHouse, setSHowHouse] = useState(false);
    const [background, setBackground] = useState("");

    const answerHandler = (gryffindor, slytherin, ravenclaw, hufflepuff) => {
        setTotalGryffindor(totalGryffindor + gryffindor);
        setTotalSlytherin(totalSlytherin + slytherin);
        setTotalRavenclaw(totalRavenclaw + ravenclaw);
        setTotalHufflepuff(totalHufflepuff + hufflepuff);

    switch (Math.max(totalGryffindor, totalSlytherin, totalRavenclaw, totalHufflepuff)) {
        case totalGryffindor: setHouse("Gryffindor"); 
        break;
        case totalSlytherin: setHouse("Slytherin");
        break;
        case totalRavenclaw: setHouse("Ravenclaw"); 
        break;
        case totalHufflepuff: setHouse("Hufflepuff"); 
        break;
        default: break;
}

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < data.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setSHowHouse(true);
        }
    };

    const changeBackground = useCallback(() => {
        if (showHouse) {
            let houseImage = "";
            switch (house) {
                case "Gryffindor": houseImage = "gryffindor.png"; 
                break;
                case "Slytherin": houseImage = "slytherin.png"; 
                break;
                case "Ravenclaw": houseImage = "ravenclaw.png"; 
                break;
                case "Hufflepuff": houseImage = "hufflepuff.png";
                break;
                default: break;
            }
            setBackground(require(`./${houseImage}`));
        }
    }, [showHouse, house]);

    useEffect(() => {
        const handleBackgroundChange = () => {
            changeBackground();
    };

    handleBackgroundChange();
    document.body.style.backgroundColor = '#000';

    return () => {
    document.body.style.backgroundColor = '';
    };
    }, [house, showHouse, changeBackground]);

    return (
        <div>
            <div className="main-container">
            <h1>The Sorting Hat</h1>
            </div>
            <div className="main-container">
            <div className='main' style={{
                borderRadius: '10px',
                backgroundPosition: '50%',
                backgroundBlendMode: 'normal',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${background})`
            }}>
                {showQuiz ? (
                    <div className="main-container">
                        {showHouse ? (
                            <div className='score-section'>
                                You belong in
                                <br />
                                <p className='house'>{house}</p>
                            </div>
                    ) : (
                            <div className="main-container">
                                <div className='part-two'>
                                    <div className='question-section'>
                                        <div className='question-count'>
                                            <span>Question {currentQuestion + 1}</span>/{data.length}
                                        </div>
                                        <div className='question-text'>{data[currentQuestion].questionText}</div>
                                    </div>
                                    <div className='answer-section'>
                                        {data[currentQuestion].options.map((option) => (
                                            <button className="btnAnswer" onClick={() => { answerHandler(option.gryffindor, option.slytherin, option.ravenclaw, option.hufflepuff); }}>{option.optionText}</button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )} </div>
                ) : (
                <div className="main-container">
            <img src={hogwarts} className="main-img" alt='hogwarts' width='300px'/>
        <div className='intro-part'>
        <p className='intro-text'>
        There's nothing hidden in your head <br />
        The Sorting Hat can't see, <br />
        So try me on and I will tell you <br />
        Where you ought to be...
        </p>
        <p className="intro-text">
        Don't be afraid!<br />
        And don't get in a flap!<br />
        You're in safe hands, though I have none<br />
        For I'm a Thinking Cap!<br />
        </p>
        <button className='start-button' onClick={() => setShowQuiz(true)}>Start</button>
</div>
    </div>
)}
    </div>
</div>
</div>
);
}

export default Quizz;