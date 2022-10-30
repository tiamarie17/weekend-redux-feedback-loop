import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useState} from 'react';


function Support() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [support, setSupport] = useState(0)


    const storeSupport= () => {
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
    
    <label className = "label">Support?</label>
    <input 
        required 
        type = "number" 
        min ="1" 
        max = "5"
        onChange = {(event) =>{
            setSupport(event.target.value)
        }} 
        />
    <button type = "submit" onClick ={storeSupport} value = {support}>Next</button>
    </>
    
    );
}

export default Support;