import React, { ComponentProps } from 'react';

export interface TimeRemainingProps extends ComponentProps<'p'> {
  setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;
  timeRemaining: number;
  timeRemainingColor: string;
}
