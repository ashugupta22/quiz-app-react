import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './home.css';

function Home(){

    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    return(
        <>
        <div className='home-wrapper'>
           <Header />
            <main className='container'>
                <div className='quiz-overview'>
                    <div className='quiz-image'>
                        <img src='images/excel-bg.jpeg' alt='quiz'></img>
                    </div>
                    <h2 className='hide-heading-lg'>The Daily MS Excel Quiz</h2>
                    <div className='quiz-comment-share'>
                        <ul>
                            <li><a href='test'><img src='images/comment.png' alt='comment'></img> Leave a Comment</a></li>
                            <li><a href='test'><img src='images/bookmark.png' alt='save'></img> Save Quiz</a></li>
                            <li><a href='test'><img src='images/network.png' alt='invite-friend'></img> Invite Friend</a></li>
                        </ul>
                        <div>
                        <p>are completing</p>
                        <p><img src='images/star.png' alt='star'></img> <img src='images/star.png' alt='star'></img> <img src='images/star.png' alt='star'></img> <img src='images/star.png' alt='star'></img> <img src='images/star.png' alt='star'></img></p>
                        <p>3 Ratings (5)</p>
                    </div>
                    </div>
                    <p className='pt-2'>The Microsoft Excel Proficiency Test is a comprehensive evaluation of an individual's knowledge and skills in using Microsoft Excel. The test covers a wide range of topics, including data manipulation, formatting, functions, and more</p>
                </div>
                <div className='quiz-details'>
                <h2 className='hide-heading'>The Daily MS Excel Quiz</h2>
                    <h3>This Quiz includes</h3>
                    <p><img src='images/page.png' alt='weitage'></img> 50% Passing Percentage</p>
                    <p><img src='images/help.png' alt='question'></img> 5 Questions</p>
                    <p><img src='images/clock.png' alt='time'></img> 05 Minutes</p>
                    <p><img src='images/file.png' alt='attempt'></img> 1 Attempt daily</p>
                    <button className='btn hide-btn' onClick={() => {setOpenModal(true);}}>Take Quiz</button>
                </div>            
            </main>
            <div className='hide-footer'><Footer onClick={() => {setOpenModal(true);}} name ="Take Quiz"/></div>
            

                        {/* --------------------Modal Quiz Rules Upward-------------- */}
            {openModal && <><div className='modal-wrapper' onClick={() =>{setOpenModal(false);}}></div>
            <div className='modal-quiz-rules'>
                <h2>Quiz Rules</h2>
                <div>
                    <div><img className='circle-quiz-rule' src='images/clock.png' alt='timer'></img></div> 
                    <div><h4>10 MINS</h4><p>Keep in mind that it's a time-bound quiz</p></div>
                </div>
                <div>
                    <div><img className='circle-quiz-rule' src='images/help.png' alt='question'></img></div> 
                    <div><h4>5 Questions</h4><p>We believe that you will ace it!</p></div>
                </div>
                <div>
                    <div><img className='circle-quiz-rule' src='images/page.png' alt='weitage'></img></div> 
                    <div><h4>50% Passing Criteria</h4><p>All the best! See you on the other side.</p></div>
                </div>
                <p className='alert-msg'><span>!</span> This quiz can only be attempted once daily.</p>
                <div className='modal-quiz-btn'><button className='btn' onClick={() =>{setOpenModal(false); navigate('/question');}}>Start</button></div>
                
            </div>
                
                </>}

        </div>
        </>
    )
};
export default Home;