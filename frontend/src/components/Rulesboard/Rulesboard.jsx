import React from 'react'
import styles from './Rulesboard.module.css';

const Rulesboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Rules</span>
      </div>
      <div>
        <hr />
      </div>
      <div>
        <ul>
          <li>Jangan <b style={{color: 'red'}}>Menyontek</b></li>
          <li>Jangan <b style={{color: 'red'}}>Membuka google</b></li>
          <li>Jangan <b style={{color: 'red'}}>Bekerja sama dengan kelompok lain</b></li>
          <li>Jangan <b style={{color: 'red'}}>Pacaran</b></li>
          <li>Jangan <b style={{color: 'red'}}>Bucin</b></li>
        </ul>
      </div>
      <div><hr/></div>
      <div style={{marginTop: '3rem'}} className={styles.header}>
        <span>Cara menang</span>
      </div>
      <div><hr/></div>
      <div>
        <ul>
          <li>Jawab pertanyaan dengan <b style={{color: 'blue'}}>cepat</b></li>
          <li>Jika jawaban salah akan minus <b style={{color: 'red'}}>poin</b></li>
        </ul>
      </div>
    </div>
  )
}

export default Rulesboard