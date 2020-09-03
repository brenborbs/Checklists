import React from 'react';
import { Label } from 'semantic-ui-react';
import values from '../../../node_modules/redux-form/lib/values';

const TextArea = ({ input, type, placeholder, 
  meta:{ touched, error } 
}) => {
  return (
    <div className="form-group" 
    error={ values.toString(touched && !!error) } 
    >

        <textarea 
        className="textarea_wrap"
        {...input} 
        placeholder={placeholder}
        type={type}
          />
        {touched && error &&  <Label basic color='red' >{error}</Label> }
    </div>
  );
};

export default TextArea;