import React from 'react'
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

function Signup() {
  const validate = Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Not more than 20 characters')
        .required('Required'),
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      Password: Yup.string()
        .min(6, 'Atleast 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm Password is required')
  })
  return (
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }}
        validationSchema={validate}
        onSubmit={
            values => {
                console.log(values)
            }
        }
    >
        {formik => (
            <div>
                <h1 className='my-4 font weight-bold display-4'>Sign Up</h1>
                {console.log(formik.values)}
                <Form>
                    <TextField label="First Name"  name="firstname" type="text" />
                    <TextField label="Last Name"  name="lasttname" type="text" />
                    <TextField label="Email"  name="email" type="email" />
                    <TextField label="Password"  name="password" type="password" />
                    <TextField label="Confirm Password"  name="password" type="password" />
                    <button className="btn btn-dark mt-3" type='submit'>Register</button>
                    <button className="btn btn-danger mt-3 ml-3" type='reset'>Reset</button>
                </Form>
            </div>

        )}
    </Formik>
  );
}

export default Signup