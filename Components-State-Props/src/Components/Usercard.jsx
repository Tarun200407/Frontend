import React from 'react'

export default function Usercard({name,age,salary}) {
  return (
    <div className='container'>
        <p>name is {name} <br /><br />
        age is {age}<br></br>
        salary is {salary}<br></br> </p>
    </div>
  )
}
