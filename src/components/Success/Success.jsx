import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Success () {

    let history = useHistory();
    let dispatch =useDispatch();

    const clearInput = () =>{
        dispatch({
            type: 'CLEAR_INPUT',
            payload: []
        });

    }

    return (
        <>
        <h1>Feedback Submitted!</h1>
        <h1>Thank you!</h1>

        <button type ="submit" onClick ={clearInput}>Take the Survey Again!</button>

        </>


    );

    history.push('/');
}


export default Success;