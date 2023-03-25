import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import QuestionData from './QuestionData';
import './questionScreen.css';
import ResultScreen from './ResultScreen';
function QuestionScreen() {

    const [activeQuestion, setActiveQuestion] = useState(0);
    const { questions } = QuestionData;
    const { question, choices, correctAnswer } = questions[activeQuestion];

    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [result, setResult] = useState(0);

    const [showResult, setShowResult] = useState(false);

    const [timeRemaining, setTimeRemaining] = useState(60);
    const [timeTaken, setTimeTaken] = useState(null);

    // -----------------------------function for leading zero in active queston status---------------------------
    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

    // -----------------------------Get Active question number and question details---------------------------
    const handleClick = () => {
        setTimeTaken((prev) => prev + (60 - timeRemaining));

        setSelectedAnswerIndex(null);
        setResult((prev) => selectedAnswer ? (prev + 1) : prev);
        setTimeRemaining(60);

        if (activeQuestion < questions.length - 1) {
            setActiveQuestion((prev) => prev + 1);
        } else {
            setActiveQuestion(0);
            setShowResult(true);
        }

    }
    // -------------------------------Get selected answer and result data----------------------------
    const handleSelectedAnswer = (option, index) => {
        setSelectedAnswerIndex(index);
        if (option === correctAnswer) {
            setSelectedAnswer(true);
        } else {
            setSelectedAnswer(false);
        }
    };

    // ----------------------------Timer for quiz----------------------------------

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }, [activeQuestion]);

    // -------------------------------Auto submit after 1 min-------------------------

    if (timeRemaining === 0){
        handleClick();
    }


    return (
        <>
        {
            !showResult ? ( <div className='question-wrapper'>
                <Header />
                <div className='container-question'>
                    <div className='question-header'>
                        <h4 className="status-background bg-lgreen"><span>{addLeadingZero(activeQuestion + 1)}</span><span> / </span> <span>{addLeadingZero(questions.length)}</span></h4>
                        <h4><span>Time Left:</span> <span className={timeRemaining <= 20 ? 'time-warning status-background' : 'status-background bg-lblue'}>{timeRemaining}</span></h4>
                    </div>
                    <div className='question'>{question}</div>
                    <ul className='option-container'>
                        {choices.map((option, index) => (
                            <label key={index} onClick={() => handleSelectedAnswer(option, index)} className={index === selectedAnswerIndex ? 'selected-answer-highlight' : null}>
                             <span>{option}</span>   <input name='list' type="radio" id={option} value={option}></input>
                            </label>

                            // <li key={index} onClick={() => handleSelectedAnswer(option, index)} className={index === selectedAnswerIndex ? 'selected-answer-highlight' : null}> {option}</li>
    
                        ))}
                    </ul>
                </div>
                <Footer disabled={selectedAnswerIndex === null}  onClick={handleClick} name = {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'} />
            </div>) :
            (<ResultScreen score = {result} totalScore = {questions.length} timeTaken = {timeTaken}/>)
        }
       
        </>
    )
};
export default QuestionScreen;