import './Stacks.css';

export default function Stacks(){
    return (
        <div>
            <Numbers />
            <IO />
        </div>
    )
}

function Numbers(){
    return <h1>[1, 2, 3, 4, 5, 6, 8]</h1>
}

function IO(){
    return (
        <div className="row">
            <div className="column">
                <input type="text" />
                <button>Push</button>
            </div>
            <div className="column">
                <p>10</p>
                <button>Pop</button>  
            </div>
        </div>
    )
}