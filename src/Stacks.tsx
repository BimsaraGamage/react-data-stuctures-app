import './Stacks.css';
import { useState } from 'react';

export default function Stacks(){
    let arr = [1, 3, 4, 8, 26, 6]
    const [state, setState] = useState(arr)
    const [lastItem, setLastItem] = useState(NaN)
    return (
        <div>
            {state.map((value:number, key:number) => <p key={"prg"+key}>{value}, </p>)}
            <div className="row">
                <div className="column">
                    <input type="text" id="inputField"/>
                    <button onClick={()=>{let temp_arr = Object.assign([], state); let val = document.getElementsByTagName('input')[0].value; val===""?alert("Please enter an number"):isNaN(+val)?alert("Not a number"):temp_arr.push(+val);setState(temp_arr);}}>Push</button>
                </div>
                <div className="column">
                    <p>{String(lastItem)}</p>
                    <button onClick={()=>{let temp_arr = Object.assign([], state); let lastElement = temp_arr.pop(); setLastItem( lastElement===undefined?NaN:lastElement); setState(temp_arr);}}>Pop</button>  
                </div>
            </div>   
        </div>
    )
}