import React, { useContext } from 'react'
import styles from './HomePage.module.css';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import Rulesboard from '../../components/Rulesboard/Rulesboard';
import Room from '../../components/Room/Room';
import { UserContext } from '../../context/Context';

const HomePage = () => {
  return (
    <div className={styles.container}>
        <Rulesboard />
        <Leaderboard />
        <Room />
    </div>
  )
}

export default HomePage