import React from 'react'
import { Formik, Form } from 'formik';
import TextField from './TextField';

function Signup() {
  return (
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }}
    >
        {formik => (
            <div>
                <h1 className='my-4 font weight-bold display-4'>Sign Up</h1>
                {console.log(formik)}
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