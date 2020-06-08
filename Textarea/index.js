import React from 'react';
import { css } from 'styled-components';

const Textarea = ({ id, onBlur, onChange, value }) => (
  <textarea
    css={css`
      resize: vertical;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.gainsboro};
      padding: 12px 16px;

      font-weight: 400;
      font-family: inherit;
      font-size: 16px;
      width: 100%;
      min-height: 80px;

      box-sizing: border-box;

      &:focus {
        padding: 11px 15px;

        border: 2px solid ${({ theme }) => theme.malibu};
        outline: none;
      }

      &::placeholder {
        color: ${({ theme }) => theme.placeholder};
        font-weight: 300;
      }
    `}
    id={id}
    onBlur={onBlur}
    onChange={e => {
      e.preventDefault();
      onChange(e.target.value);
    }}
    type="text"
    value={value}
  />
);

export default Textarea;
