import React from 'react';

import { css } from 'styled-components';

import { separator } from 'constants/index';

const Separator = ({ className }) => (
  <hr
    className={className}
    css={css`
      width: 95px;
      height: 11px;
      margin: 0 auto;

      border: none;

      background-repeat: no-repeat;
      background-image: url(${separator});
    `}
  />
);

export default Separator;
