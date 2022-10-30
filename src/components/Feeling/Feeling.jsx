import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useState} from 'react';


function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState(0)


    const storeFeeling= (event) => {
        console.log('in storeFeeling');

        //setFeeling({feeling: event.target.value})
    
        console.log('feeling is,',feeling);
       
       

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
            console.log("On Chnage is being called")
            setFeeling(event.target.value)
        }} 
        />
    <button type = "submit" onClick ={storeFeeling} value = {feeling}>Next</button>
    </>
    
    );
}

export default Feeling;