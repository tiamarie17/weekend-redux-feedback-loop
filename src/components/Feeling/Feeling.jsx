import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useState} from 'react';


function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState('')


    const storeFeeling= (event) => {
        event.preventDefault();

        console.log('in storeFeeling, feeling is' , feeling);
       
       //Sending feeling to the redux store
        dispatch({
            type: 'STORE_FEELING',
            payload: feeling
        })

        
        history.push('/understanding');
    }

    return(
    <>
    
            <h1>How are you feeling today?</h1>
            
            <label className = "label">Feeling?</label>

    <form onSubmit = {storeFeeling}>
            <input 
                required 
                type = "number" 
                min ="1" 
                max = "5"
                onChange = {(event) =>{
                    setFeeling(event.target.value)
                
                }} 
                value = {feeling}
                />
            <button type = "submit">Next</button>
    </form>
    </>
    
    );
}

export default Feeling;