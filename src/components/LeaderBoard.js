import React, { useState } from 'react'
import HeaderComponent from './HeaderComponent'
import { fetchUserData } from '../api/authenticationService';
import QuizService from '../services/QuizService';
import { ToastContainer, toast } from 'react-toastify';
import style from 'radium/lib/components/style';



export default function LeaderBoard(props) {
    const [userData, setUserData] = useState({});
    const [leaderBoard, setLeaderBoard] = useState([]);

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setUserData(response.data);
        }).catch((e) => {
            localStorage.clear();
            props.history.push('/');
        })
        getAllScore();
    }, [])


    const getAllScore = () => {
        QuizService.getTopScore().then((response) => {
            setLeaderBoard(response.data);
        },
            (error) => {
                console.log(error);
            }
        )
    }

    function deleteResult(id) {
        QuizService.deleteUserScore(id).then(
            res => {
                toast.success("candidate removed successfully");
                setLeaderBoard(leaderBoard.filter(lb => lb.id !== id));
            }
        )
    }
  


    return (
        <>
            <HeaderComponent />
            <div className='container'>

                <h3 className='text-center mt-2 mb-2'>LeaderBoard</h3>

                <div className='row mt-3'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <td><b>Result ID</b></td>
                                <td><b>User Name</b></td>
                                <td><b>Total Score</b></td>
                                <td><b>Actions</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                leaderBoard.map(
                                    leaderboard =>
                                        <tr key={leaderboard.id}>
                                            <td>{leaderboard.id}</td>
                                            <td>{leaderboard.username}</td>
                                            <td>{leaderboard.totalCorrect}</td>
                                            <td>
                                                <button className='btn btn-success'>Contact</button>
                                                <br />
                                                <button className='btn btn-danger mt-2' onClick={() => deleteResult(leaderboard.id)}>Remove</button>
                                            </td>

                                        </tr>
                                )
                            }
                        </tbody>
                        <ToastContainer
                            position="top-right"
                            autoClose={1500}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />


                    </table>


                </div>

            </div>

        </>
    )
}
