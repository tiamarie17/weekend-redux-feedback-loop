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

    <form onSubmit = {storeComment}>
            <label className = "label">Any comments?</label>
            <input 
                type = "number" 
                min ="1" 
                max = "5"
                onChange = {(event) =>{
                    setComment(event.target.value)
                
                }} 
                value = {comment}
                />
            <button type = "submit">Next</button>
    </form>
    
    </>
    
    );
}

export default comment;