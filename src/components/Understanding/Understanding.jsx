import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useState} from 'react';

function Understanding() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [understanding, setUnderstanding] = useState(0)


    const storeUnderstanding= (event) => {
        console.log('in storeUnderstanding');

        dispatch({
            type: 'STORE_UNDERSTANDING',
            payload: understanding
        })

        
        history.push('/support');
    }

    return(
    <>
    <h1>How well are you understanding the content?</h1>
    

            <label className = "label">Understanding?</label>
            <input 
                required 
                type = "number" 
                min ="1" 
                max = "5"
                onChange = {(event) =>{
                    setUnderstanding(event.target.value)
                }} 
                />
            <button type = "submit" onClick = {storeUnderstanding} value = {understanding}>Next</button>
    
    </>
    
    );
  
}

export default Understanding;