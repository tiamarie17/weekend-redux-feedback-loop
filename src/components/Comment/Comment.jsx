import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useState} from 'react';
import Button from '@mui/material/Button';


function comment() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');


    const storeComment= (event) => {
        event.preventDefault();
    
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

    <form onSubmit = {storeComment}>
            <input 
                type = "text" 
                placeholder="comments"
                onChange = {(event) =>{
                    setComment(event.target.value)
                
                }} 
                value = {comment}
                />
            <Button type = "submit" variant="outlined">Next</Button>
    </form>
    
    </>
    
    );
}

export default comment;