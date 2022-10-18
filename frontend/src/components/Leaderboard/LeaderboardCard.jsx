import React from 'react'
import styles from './LeaderboardCard.module.css';

const LeaderboardCard = ({ rank, teamName, score }) => {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardRank}>
            <span>{rank}</span>
        </div>
        <div className={styles.teamName}>
            <span>{teamName}</span>
        </div>
        <div className={styles.score}>
            <span>{score}</span>
        </div>
    </div>
  )
}

export default LeaderboardCard