import React from 'react';

import { StyledGameOver } from './styles/StyledGameOver';

const StartButton = ({ callback }) => (
  <StyledGameOver onclick={callback}>Start Game</StyledGameOver>
);

export default StartButton;
