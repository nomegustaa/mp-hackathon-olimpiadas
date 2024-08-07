import { useEffect } from 'react';
import { TimeRemainingProps } from './types';

const TimeRemaining = ({
  setTimeRemaining,
  timeRemaining,
  timeRemainingColor,
}: TimeRemainingProps) => {
  useEffect(() => {
    if (timeRemaining <= 0) return;

    const intervalId = setInterval(() => {
      setTimeRemaining((time) => {
        if (time <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return time - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return <p className={timeRemainingColor}>{timeRemaining}</p>;
};

export default TimeRemaining;
