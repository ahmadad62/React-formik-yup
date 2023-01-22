import React, { useState } from 'react';
import { useFormik } from 'formik';

export default function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        }
    });

    console.log(formik.values)


    return (
        <form>
            <div className='input-container'>
                <input
                    id='firstName'
                    name='firstName'
                    type="text"
                    placeholder='First Name'
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                <input
                    id='lastName'
                    name='lastName'
                    type="text"
                    placeholder='Last Name'
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                <input
                    id='email'
                    name='email'
                    type="email"
                    placeholder='E-Mail'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
        </form>
    )
}
