import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useState} from 'react';


function Support() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [support, setSupport] = useState('')


    const storeSupport= (event) => {
        event.preventDefault();
        console.log('in storeSupport, support is' , support);
       
       //Sending support to the redux store
        dispatch({
            type: 'STORE_SUPPORT',
            payload: support
        })

        
        history.push('/comment');
    }

    return(
    <>
    <h1>How well are you being supported?</h1>
    
    
    <form onSubmit = {storeSupport}>
            <label className = "label">Support?</label>
            <input 
                required 
                type = "number" 
                min ="1" 
                max = "5"
                onChange = {(event) =>{
                    setSupport(event.target.value)
                
                }} 
                value = {support}
                />
            <button type = "submit">Next</button>
    </form>
    </>
    
    );
}

export default Support;