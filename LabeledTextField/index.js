import React from 'react';

import Input from '../Input';
import InputGroup from '../InputGroup';
import InputError from '../InputError';
import InputLabel from '../InputLabel';

/**
 * @class TextField
 */
// TODO: Replace current Textfield
const TextField = ({
  autoFocus,
  backgroundColor,
  disabled,
  error,
  errorClassName,
  id,
  input: { onBlur, onChange, onKeyDown, value },
  label,
  placeholder,
  required,
  type,
  wrapperClassName,
}) => (
  <InputGroup className={wrapperClassName}>
    <Input
      autoFocus={autoFocus}
      backgroundColor={backgroundColor}
      disabled={disabled}
      hasError={error}
      hasLabel={label ? true : false}
      id={id}
      input={{
        onBlur,
        onChange: e => {
          e?.preventDefault();

          if (!disabled) onChange?.(e.target.value, e);
        },
        onKeyDown,
        value,
      }}
      placeholder={placeholder || label}
      required={required}
      type={type}
    />
    {label && (
      <InputLabel backgroundColor={backgroundColor}>{label}</InputLabel>
    )}
    {error && <InputError className={errorClassName}>{error}</InputError>}
  </InputGroup>
);

TextField.defaultProps = {
  autoFocus: false,
  backgroundColor: '#ffffff',
  disabled: false,
  errorMessage: '',
  required: false,
  type: 'text',
};

export default TextField;
