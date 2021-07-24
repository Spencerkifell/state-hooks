import React, {useState} from 'react'

function HookCounterTwo() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount)

    //Shows why we have to keep track of the previous state... would keep same state...
    // const incrementFive = () => {
    //     for(let i = 0; i < 5; i++){
    //         setCount(count + 1)
    //     }
    // }

    const incrementFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo
