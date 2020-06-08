import React from 'react';
import debounce from 'helpers/debounce';

const Form = ({ children, className, id, onSubmit }) => {
  const handleSubmit = debounce(
    () => onSubmit?.(),
    200,
    true // Trigger function on leading edge, instead of trailing edge
  );

  return (
    <form
      className={className}
      id={id}
      onSubmit={e => {
        e?.preventDefault();

        handleSubmit();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
