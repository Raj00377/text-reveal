import { useEffect, useMemo } from "react";
import { useCounter, useScroll } from "../index";
import { GenerateClipPathProps, GetPointsProps, DirectionFunctionProps } from "../types";

const getClipPathForDirection = ({ fillDirection, clipProgress }: DirectionFunctionProps) => {
  switch (fillDirection) {
    case 'left-right':
      return `polygon(0% 0%, ${clipProgress}% 0%, ${clipProgress}% 100%, 0% 100%)`;
    case 'top-bottom':
      return `polygon(100% 0%, 0%  0%, 0%  ${clipProgress}%, 100% ${clipProgress}%)`;
    case 'slant-top-bottom':
      return `polygon(${clipProgress * 2}% 0%, 0%  0%, 0%  100%, ${clipProgress}% 100%)`;
    case 'slant-bottom-top':
      return `polygon(${clipProgress}% 0%, 0%  0%, 0%  100%, ${clipProgress * 2}% 100%)`;
    default:
      return `polygon(0% 0%, ${clipProgress}% 0%, ${clipProgress}% 100%, 0% 100%)`;
  }
}

const getPoints = ({ ref, elementTop, parentHeight, fillDelay, textLength }: GetPointsProps) => {
  let startHeight = 0;
  let stopHeight = 0;
  let breakPoint = 0;
  if (ref && ref.current) {
    startHeight = (elementTop - parentHeight) + (parentHeight * (fillDelay / 100));
    stopHeight = (parentHeight + startHeight) - (parentHeight * (fillDelay / 100));
    breakPoint = (stopHeight - startHeight) / textLength;
  }
  return { startHeight, stopHeight, breakPoint }
}

const DEFAULT_CLIP_PATH = 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)';

const generateClipPath = ({ fillType, ref, fillDelay, fillDirection, fillSpeed, fillDuration, textLength }: GenerateClipPathProps) => {

  const { scrollY, parentElement, parentHeight, elementTop } = useScroll(ref);

  const { startHeight, breakPoint } = useMemo(() => getPoints({ ref, elementTop, parentHeight, fillDelay, textLength }), [ref, parentElement, parentHeight])

  const { count, startCounter, stopCounter } = useCounter({ initialValue: 0, targetValue: 100, duration: fillDuration > 999 ? Math.abs(fillDuration - 1000) : fillDuration });

  useEffect(() => {
    if (fillType === 'timer') {
      if (scrollY > startHeight)
        !count && startCounter();
      else stopCounter();
    }
  }, [scrollY > startHeight])

  switch (fillType) {
    case 'scroll':
      const generateClipPathForScroll = (index: number) => {
        if (scrollY >= startHeight) {
          const clipProgress = (((scrollY - startHeight) - (breakPoint * (index))) / (breakPoint)) * fillSpeed;
          return clipProgress ? getClipPathForDirection({ fillDirection, clipProgress }) : DEFAULT_CLIP_PATH;
        }
        else return DEFAULT_CLIP_PATH;
      }
      return { generateClipPathFunction: generateClipPathForScroll }
    case 'timer':
      const generateClipPathForTimer = (index: number) => {
        if (scrollY > startHeight) {
          const clipProgress = ((count - ((100 / textLength) * (index))) / (100 / textLength)) * fillSpeed;
          return clipProgress ? getClipPathForDirection({ fillDirection, clipProgress: clipProgress }) : DEFAULT_CLIP_PATH;
        }
        else return DEFAULT_CLIP_PATH
      }
      return { generateClipPathFunction: generateClipPathForTimer }
    default:
      return { generateClipPathFunction: () => { return DEFAULT_CLIP_PATH } }
  }
}

export default generateClipPath