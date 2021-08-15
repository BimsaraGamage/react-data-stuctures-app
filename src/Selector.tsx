import Stacks from './Stacks'
import Counter from './Counter'
import { useState } from 'react'

export default function Selector(){
    const [selection, setSelection] = useState(<Stacks />)
    return (
        <div>
            <label>Please select an option: </label>
            <select onChange={(e) => sampleFunction(e, setSelection)}>
                <option>Stacks</option>
                <option>Counter</option>
            </select>
            <br/>
            <br/>
            {selection}
        </div>
    )
}

function sampleFunction(e:any, funct:any){
    e.target.value==="Stacks"?funct(<Stacks />): e.target.value==="Counter"?funct(<Counter />): console.log('Invalid Selection')
}