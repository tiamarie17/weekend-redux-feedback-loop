import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useState} from 'react';


function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState(0)


    const storeFeeling= () => {
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
    <input 
        required 
        type = "number" 
        min ="1" 
        max = "5"
        onChange = {(event) =>{
            setFeeling(event.target.value)
        }} 
        />
    <button type = "submit" onClick ={storeFeeling} value = {feeling}>Next</button>
    </>
    
    );
}

export default Feeling;