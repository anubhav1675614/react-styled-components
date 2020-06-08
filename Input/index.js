import React, { useContext } from 'react';

import { ThemeContext, css } from 'styled-components';

import vars from 'styles/variables';

const Input = ({
  autoComplete,
  autoFocus,
  backgroundColor,
  disabled,
  hasError,
  id,
  input: { onBlur, onChange, onFocus, onKeyDown, value },
  placeholder,
  required,
  type,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <input
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      css={css`
        border: 1px solid ${theme.linkWater};
        border-radius: 3px;
        padding: 12px 16px;
        background-color: ${backgroundColor};
        box-sizing: border-box;
        width: 100%;
        font-size: 18px;
        font-family: Avenir, sans-serif;
        line-height: 25px;
        touch-action: manipulation;

        :disabled {
          font-style: italic;
        }

        :focus {
          outline: 0;
          border: 2px solid ${vars.blue};
          margin: -1px;
        }
        :placeholder-shown + label {
          color: transparent;
          background-color: transparent;
          cursor: text;
          font-weight: 200;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transform-origin: left bottom;
          transform: translate(0.5rem, 1.1rem) scale(calc(16 / 12));
          box-sizing: border-box;
        }

        :not(:placeholder-shown) + label,
        :focus + label {
          font-weight: 500;

          transform: translate(10px, -12px) scale(1);
          cursor: pointer;
          background-color: ${backgroundColor};

          width: fit-content;
        }
        :focus + label {
          color: ${vars.blue};
          background-color: ${backgroundColor};
        }
        ::placeholder {
          color: #bfc4d1;
          font-weight: 500;
        }
        ${hasError &&
          css`
            border: 2px solid ${vars.red};
            margin: -1px;
          `}
      `}
      disabled={disabled}
      id={id}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
    />
  );
};

export default Input;
