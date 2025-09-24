import { useState } from 'react'

export default function Child() {
    console.log("rendering child")
    
    const [count, setCount] = useState(0) // initialize state

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    )
}
