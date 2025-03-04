import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <div>
        counter value {count} <br /><br />
        <button onClick={()=>setCount(count+1)}>click</button>
    </div>
    </div>
  )
}

export default Counter
