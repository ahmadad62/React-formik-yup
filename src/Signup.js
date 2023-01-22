import React, { useState } from 'react'

export default function Signup() {
    const [firstName, setFirstName] = useState('')
    console.log(firstName)
    return (
        <form>
            <div className='input-container'>
                <input
                    id='firstName'
                    name='firstNam'
                    type="text"
                    placeholder='First Name'
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
        </form>
    )
}
