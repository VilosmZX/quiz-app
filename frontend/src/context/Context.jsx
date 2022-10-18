import React, { createContext, useCallback, useEffect, useState } from "react";
import axios from '../api';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [gameStart, setGameStart] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [timer, setTimer] = useState(30);
    const [teamName, setTeamName] = useState('');
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get('/api/questions')
            .then(response => setQuestions(response.data))
            .catch(err => console.log(err));
    }, []);

    const data = {
        gameStart,
        setGameStart,
        countdown,
        setCountdown,
        timer,
        setTimer,
        teamName,
        setTeamName,
        score,
        setScore,
        questions,
        setQuestions
    }
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContextProvider;