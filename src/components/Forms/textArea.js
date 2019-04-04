import React from 'react';

const TextArea = ({ input, type, placeholder, 
  // meta:{ touched, error } 
}) => {
  return (
    <div className="form-group" 
    // error={touched && !!error} 
    >

        <textarea 
        className="textarea_wrap"
        {...input} 
        placeholder={placeholder}
        type={type}
          />
        {/* {touched && error && <p style={{ color: 'red' , fontStyle: 'italic' }} >{error}</p> } */}
    </div>
  );
};

export default TextArea;