import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useState} from 'react';
import Button from '@mui/material/Button';

function Understanding() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [understanding, setUnderstanding] = useState('')


    const storeUnderstanding= (event) => {
        event.preventDefault();
        
        console.log('in storeUnderstanding');

        dispatch({
            type: 'STORE_UNDERSTANDING',
            payload: understanding
        })

        
        history.push('/support');
    }

    // const backToFeeling = (event) => {
    //     event.preventDefault();
    //     console.log('in backToFeeling');

    //     history.push('/');
    // }

    return(
    <>
    <h1>How well are you understanding the content?</h1>
    
            
    <form onSubmit = {storeUnderstanding}>
            <label className = "label">Understanding?</label>
            <input 
                required 
                type = "number" 
                min ="1" 
                max = "5"
                onChange = {(event) =>{
                    setUnderstanding(event.target.value)
                
                }} 
                value = {understanding}
                />
            <Button variant="outlined" type = "submit" onClick={storeUnderstanding}>Next</Button>
            {/* <button type="submit" onClick={backToFeeling}>Back</button> */}
    </form>
    
    </>
    
    );
  
}

export default Understanding;