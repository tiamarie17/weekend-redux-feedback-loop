import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Button from '@mui/material/Button';

function Success() {

    let history = useHistory();
    let dispatch = useDispatch();

    const clearInput = () =>{
        dispatch({
            type: 'CLEAR_FEELING',
            payload: ''
        });
        dispatch({
            type: 'CLEAR_UNDERSTANDING',
            payload: ''
        });
        dispatch({
            type: 'CLEAR_SUPPORT',
            payload: ''
        });
        dispatch({
            type: 'CLEAR_COMMENT',
            payload: ''
        });

        history.push('/');

    }

    return (
        <>
        <h1>Feedback Submitted!</h1>
        <h1>Thank you!</h1>

        <Button variant="contained" type ="submit" onClick ={clearInput}>Take the Survey Again!</Button>
        </>


    );

    history.push('/');
}


export default Success;