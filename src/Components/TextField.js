import React from 'react'
import { ErrorMessage, useField } from 'formik';

function TextField ({ id, label, ...props}) {
  const [field, meta] = useField(props);


  return (
    <div className='mb-2'>
        <label htmlFor={field.id}>{label}</label>
        <input 
            className={`form-control shadow-none ${meta.touched && 'is-invalid'}`}
            {...field} {...props}
            autoComplete='off'
        />
        <ErrorMessage component="div" name={field.id} 
            className='error'
        />
    </div>
  );
}

export default TextField