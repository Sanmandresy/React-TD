import React,{useState} from "react";
import './App.css';

function App() {
    return(<>
        <FunctionalComponent/>
        <ClassComponent/>
    
    </>);
}


const FunctionalComponent = () => {
    const [initial,setInitial] = useState(0);
    return(<>
        <span className="box">
            <h1>FunctionalComponent</h1>
            <p className="box__text">{initial}</p>
            <button
                className="incremental__button"
                onClick={() => setInitial(initial + 1) }>
                    Increment
            </button>
        </span>
    </>);
}

class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value : 0
        }
    }

    render() {
        return(
            <span className="box">
                <h1>ClassComponent</h1>
                <p className="box__text">{this.state.value}</p>
                <button
                    className="incremental__button" 
                    onClick={() => this.setState((prev) => {
                     return {value: prev.value + 1}
                    })}>
                    Increment
                </button>
            </span>
        );
    }
}

export default App;