import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useState} from 'react';


function comment() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');


    const storeComment= () => {
        console.log('in storeComment, comment is' , comment);
       
       //Sending comment to the redux store
        dispatch({
            type: 'STORE_COMMENT',
            payload: comment
        })

        history.push('/review');
    }

    return(
    <>
    <h1>Any comments you want to leave?</h1>
    
    
    <label className = "label">Comments</label>
    <input 
        type = "text" 
        onChange = {(event) =>{
            setComment(event.target.value)
        }} 
        />
    <button type = "submit" onClick ={storeComment} value = {comment}>Next</button>
    </>
    
    );
}

export default comment;