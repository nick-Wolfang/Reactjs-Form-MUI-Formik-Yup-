import React from 'react'
import { useField } from 'formik';

function TextField ({ label, ...props}) {
  const [field, meta] = useField(props);
  console.log(field, meta)

  return (
    <div>
        <input type="text" />
    </div>
  );
}

export default TextField