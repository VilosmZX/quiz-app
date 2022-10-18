import React from 'react'
import styles from './Leaderboard.module.css';
import LeaderboardCard from './LeaderboardCard';

const Leaderboard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <span>Leaderboard</span>
          <small>Di update 1 menit yang lalu</small>
        </div>
        <hr />
        <div className={styles.content}>
          <LeaderboardCard rank={1} teamName={'Team 1'} score={300}/>
          <LeaderboardCard rank={1} teamName={'Team 1'} score={300}/>
          <LeaderboardCard rank={1} teamName={'Team 1'} score={300}/>
          <LeaderboardCard rank={1} teamName={'Team 1'} score={300}/>
          <LeaderboardCard rank={1} teamName={'Team 1'} score={300}/>
          <LeaderboardCard rank={1} teamName={'Team 1'} score={300}/>
          <LeaderboardCard rank={1} teamName={'Team 1'} score={300}/>
          <LeaderboardCard rank={1} teamName={'Team 1'} score={300}/>
          <LeaderboardCard rank={1} teamName={'Team 1'} score={300}/>
          <LeaderboardCard rank={1} teamName={'Team 1'} score={300}/>
          <LeaderboardCard rank={1} teamName={'Team 1'} score={300}/>
          <LeaderboardCard rank={1} teamName={'Team 1'} score={300}/>
        </div>
    </div>
  )
}

export default Leaderboard