import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/Context';
import styles from './Room.module.css';

const Room = () => {
  const { setGameStart, teamName, setTeamName } = useContext(UserContext);
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game', {replace: true});
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Play</span>
      </div>
      <div>
        <hr />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <input 
            className={styles.teamInput}
            type={'text'}
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
          <span className={styles.label} >Team Name</span>
          <button className={styles.startButton} disabled={!teamName} onClick={startGame}>Mulai!</button>
        </div>
      </div>
    </div>
  )
}

export default Room