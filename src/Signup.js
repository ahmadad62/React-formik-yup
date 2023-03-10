import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Signup() {


    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 character or less")
                .required("Required"),
            lastName: Yup.string()
                .max(20, "Must be 20 character or less")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required")
        }),


        onSubmit: (values) => {
            console.log(values)
        }
    });
    console.log(formik.touched)

    // console.log(formik.values)


    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='input-container'>
                <div>
                    <input
                        id='firstName'
                        name='firstName'
                        type="text"
                        placeholder='First Name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
                </div>
                <div>
                    <input
                        id='lastName'
                        name='lastName'
                        type="text"
                        placeholder='Last Name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
                </div>

                <div>
                    <input
                        id='email'
                        name='email'
                        type="email"
                        placeholder='E-Mail'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                </div>
            </div>
            <button type='submit'>Send</button>
        </form>
    )
}
