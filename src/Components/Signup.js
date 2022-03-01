import React from 'react'
import { useField, useFormik } from 'formik';
import * as Yup from 'yup';
import { FormControl, InputLabel, Input } from '@mui/material';
import { Button, Box, TextField } from '@mui/material';
import "./Signup.css"

//NB: If Rewrite the TextField component, it won't be able to take all
// its props like the mui <TextField/> component its self !!!!!

function Signup() {

  const CustomTextInput = ({ label, ...props}) => {
    const [field, meta] = useField(props);

    return (
      <>
        <label htmlFor={field.name || field.id}>{label}</label>
        <TextField 
            {...field} {...props}
            autoComplete='off'
        />
        {meta.touched && meta.error ? (
          <div className='error'>{meta.error}</div>
        ) : null}
      </>
    );
  } 

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
    password: Yup.string()
      .min(6, 'Atleast 6 characters')
      .required('Password is required'),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm Password is required')
})

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },

    validationSchema : validate, 
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
      >
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className='inputs'>
            <TextField
              required
              name="firstName" label="First Name" defaultValue="John" variant="standard"
              onChange={formik.handleChange} value={formik.values.firstName}
            />
            <TextField
              required
              name="lastName" label="Last Name" defaultValue="Doe" variant="standard"
              onChange={formik.handleChange} value={formik.values.lastName}
            />
            <TextField
              required
              name="email" label="Email" type="email" defaultValue="John" variant="standard"
              onChange={formik.handleChange} value={formik.values.email}
            />
            <TextField
              required
              name="password" label="Password" type="password" autoComplete="current-password" variant="standard"
              onChange={formik.handleChange} value={formik.values.confirm_password}
            />l
          </div>
          <div className="buttons">
            <Button variant="contained" type='submit'>Register</Button>
            <Button variant="outlined" onClick={formik.values} color="error" type="reset">Reset</Button>
          </div>
        </form>
      </div>  
      </Box>   

  );
}

export default Signup;