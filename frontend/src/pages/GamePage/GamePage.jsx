import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/Context';
import styles from './GamePage.module.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress'
import axios from '../../api';

const GamePage = () => {
  const { questions, setQuestions, gameStart, setGameStart, countdown, timer, setTimer, setCountdown, teamName, score, setScore } = useContext(UserContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameDone, setGameDone] = useState(false);
  const navigate = useNavigate();

  if (!teamName)
    navigate('/');

  useEffect(() => {
    setCountdown(5);
  }, []);

  useEffect(() => {
      const intervalId = setInterval(() => {
        if (countdown <= 0)
          {
            setGameStart(true);
          }
        else
          setCountdown(countdown - 1);
      }, 1000);
      return () => clearInterval(intervalId);
  }, [countdown]);

  useEffect(() => {
    if (!gameDone) {
      const intervalId = setInterval(() => {
        if (!(countdown > 0)) {
          if (timer <= 0) {
            currentQuestion += 1;
            if(currentQuestion == questions.length - 1) 
              setGameDone(true);
          }
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [gameStart, timer]);

  const validateAnswer = (isCorrect) => {
    if (isCorrect)
  }

  return (
    <div>
        {gameStart ? (
          <div className={styles.container}>
            <div className={styles.innerContainer}>
              <LinearProgress variant='determinate' value={Math.round((100 / 30) * timer)}/>
              <span className={styles.question}>{questions[currentQuestion].question}</span>
              <div className={styles.answers}>
                {questions[currentQuestion].answers.map((answer, idx) => (
                  <button onClick={() => validateAnswer(answer.isCorrect)}>{answer.value}</button>
                ))}
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.team}>
                <span>{teamName}</span>
              </div>
              <div className={styles.score}>
                <span>{score}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.loading}>
            <ReactLoading type='spin' color='#FFF' width={'150px'}/>
          </div>  
        )}
    </div>
  )
}

export default GamePage