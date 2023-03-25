import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './resultScreen.css';

function ResultScreen({ score, totalScore, timeTaken }) {

    const navigate = useNavigate();

    const percentage = Math.floor(score / totalScore * 100);

    // -----------------------function date format-----------------------
    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }

    return (
        <div className='result-container'>
            <Header />
            <div className='result-wrapper'>
                <h1>The Daily MS Excel Quiz</h1>
                <div className='result-card'>
                    <h4>You Scored:</h4>
                    <h2>{percentage} %</h2>
                    <h4>Oh Snap, You can do better!</h4>
                    <p>Success is not final, failure is not fatal; It is the courage to continue that counts.</p>
                </div>
                <div className="result-detail">
                    <div>
                        <h4>Your Score</h4>
                        <h2>{score} / {totalScore}</h2>
                        {/* <h5>Avg: {score} marks</h5> */}
                    </div>
                    <div>
                        <h4>Time Taken</h4>
                        <h2>{formatTime(timeTaken)} min</h2>
                        {/* <h5>Avg: 1:59 mins</h5> */}
                    </div>
                </div>
                <div className="result-share">
                    <h2>Quiz App</h2>
                    <h4><span>Icon</span>Share it with your friends!</h4>
                </div>
            </div>
            <Footer name ="Restart" onClick = {() => {navigate('/')}} />
        </div>
    )
};
export default ResultScreen;