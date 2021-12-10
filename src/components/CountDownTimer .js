import React from 'react';
import { useHistory } from 'react-router';
import QuizService from "../services/QuizService";
import Assessment from './Assessment';

const CountDownTimer = ({ hoursMinSecs },props) => {


    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    
    let history=useHistory();

    const tick = () => {

        if (hrs === 0 && mins === 0 && secs === 0)
        {

            QuizService.submitQuiz(JSON.parse(localStorage.question));
            history.push("/quiz_submit_response");

        }
            
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);


    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);

        return () => clearInterval(timerId);
    });


    return (

        <div>
            <p>{`${hrs.toString().padStart(2, '0')}:${mins
                .toString()
                .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
        </div>
    );
}

export default CountDownTimer;