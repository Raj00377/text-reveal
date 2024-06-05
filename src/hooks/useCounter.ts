import { useState, useEffect, useCallback } from 'react'

interface Props {
  initialValue: number,
  targetValue: number,
  duration: number
}

let intervalID: NodeJS.Timeout

const useCounter = ({ initialValue = 0, targetValue = 100, duration = 2000 }: Props) => {
  const [count, setCount] = useState(initialValue);

  const [counterState, setCounterState] = useState<null | boolean>(null);

  const countDownFunction = () => {
    let startValue = initialValue;
    const interval = Math.floor(
      duration / (targetValue - initialValue));

    intervalID = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(intervalID);
      }
    }, interval);
  }

  const startCounter = useCallback(() => {
    clearInterval(intervalID);
    setCounterState(true);
    setCount(initialValue);
  }, [])

  const stopCounter = useCallback(() => {
    setCounterState(false);
    setCount(initialValue);
    clearInterval(intervalID);
  }, [])

  useEffect(() => {
    counterState && countDownFunction();
    return () => {
      clearInterval(intervalID);
    };
  }, [counterState]);

  return { count, startCounter, stopCounter }
}

export default useCounter;