import { useState } from 'react';

function Counter(){

    const initialState = {
        count: 0,
        input: ''
    }

    const [state, setState] = useState(initialState);

    // const [count, setCount] = useState(0);
    // const [input, setInput] = useState('');

    // const arr = useState();
    // const count = arr[0]
    // const setCount = arr[1];

    const handleClick = () => {

        // const newState = {...state}
        // newState.count = state.count + 1;
        setState({
            ...state, 
            count: state.count + 1
        });
    }

    return (
        <div>
            <button onClick={() => handleClick()}>Click Me!</button>
            <p>You clicked me {state.count} times</p>
            <input type='text' onChange={({
                target: {
                    value: input
                } = {}
            }) => setState({
                ...state, 
                input
                })} />
            <p>{state.input}</p>
        </div>
    )
}

export default Counter;