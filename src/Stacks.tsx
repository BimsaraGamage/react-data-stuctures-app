import './Stacks.css';

export default function Stacks(){
    return (
        <div>
            <Numbers numbers={[1, 2, 3, 4, 5, 6, 8]}/>
            <IO />
        </div>
    )
}

function Numbers(props: any){
    return props.numbers.map((n:any) => <p key={n}>{n}, </p>)
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