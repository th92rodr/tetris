import React from 'react';

import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => {
  if (TETROMINOS[type] === undefined) {
    type = 0;
  }
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
};

// React.memo makes sure we only re-render the changed cells
export default React.memo(Cell);
