import Stacks from './Stacks'
import Sample from './Sample'
import { useState } from 'react'

export default function Selector(){
    const [selection, setSelection] = useState(<Stacks />)
    return (
        <div>
            <label>Please select an option: </label>
            <select onChange={(e) => e.target.value==="Stacks"?setSelection(<Stacks />): e.target.value==="Sample"?setSelection(<Sample />):console.log('Invalid Selection')}>
                <option>Stacks</option>
                <option>Sample</option>
            </select>
            <br/>
            <br/>
            {selection}
        </div>
    )
}