import Stacks from './Stacks'
import Counter from './Counter'
import { useState } from 'react'

export default function Selector(){
    const [selection, setSelection] = useState(<Stacks />)
    return (
        <div>
            <label>Please select an option: </label>
            <select onChange={(e) => e.target.value==="Stacks"?setSelection(<Stacks />): e.target.value==="Counter"?setSelection(<Counter />): console.log('Invalid Selection')}>
                <option>Stacks</option>
                <option>Counter</option>
            </select>
            <br/>
            <br/>
            {selection}
        </div>
    )
}