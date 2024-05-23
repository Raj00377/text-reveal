import { useMemo, useRef } from "react";
import useScroll from "./hooks/useScroll";

interface Props {
  /**
  * Array of text.
  */
  text: string[],
  /**
   * Initial color of the text before fill.
   */
  textColor?: string,
  /**
   * Color which is going to fill the character while scroll.
   * 
   * Gradients supported:
   * Syntax : linear-gradient(/value/)
   * E.g. linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)
   */
  fillColor?: string,
  /**
   * Speed to fill/show the text (default 100 means 100%)
   * 
   * Gradients supported:
   * Syntax : linear-gradient(/value/)
   * E.g. linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)
   */
  fillSpeed?: number,
  /**
   * Delay to fill/show the text (default 3.5, give more than 1)
   */
  fillDelay?: number,
  /**
   * Direction to fill/show the text
   */
  fillDirection?: 'left-right' | 'top-bottom' | 'slant-top-bottom' | 'slant-bottom-top'
}

interface DirectionFunctionProps {
  fillDirection: string,
  clipProgress: number
}

/**
 * @description Smooth Color change animation in every characters in a text while scroll
 * @prop text - Array of text.
 * @prop textColor - Initial color of the text before fill
 * @prop fillColor - Color which is going to fill the character while scroll
 * @prop fillSpeed - Speed to fill/show the text (default 100 means 100%)
 * @prop fillDelay - Delay to fill/show the text (default 3.5, give more than 1)
 * @prop fillDirection - Direction to fill/show the text
 */

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

const getColor = (color: string) => {
  return color.includes('linear-gradient') ? {
    'background': color,
    'backgroundClip': 'text',
    'WebkitTextFillColor': 'transparent'
  } : { color }
}

const DEFAULT_CLIP_PATH = 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)';

const TextReveal = ({ text, textColor = '#3d3d3d', fillColor = '#f47979', fillSpeed = 100, fillDelay = 3.5, fillDirection = 'left-right' }: Props) => {

  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY, parentElement, parentHeight, elementTop } = useScroll(ref);

  const getPoints = () => {
    let startHeight = 0;
    let stopHeight = 0;
    let breakPoint = 0;
    if (ref && ref.current) {
      startHeight = (elementTop - parentHeight) + (parentHeight / fillDelay);
      stopHeight = (parentHeight + startHeight) - (parentHeight / fillDelay);
      breakPoint = (stopHeight - startHeight) / text.length;
    }
    return { startHeight, stopHeight, breakPoint }
  }

  const { startHeight, breakPoint } = useMemo(() => getPoints(), [parentElement, parentHeight])
  const initialColorStyle = useMemo(() => getColor(textColor), [textColor])
  const fillColorStyle = useMemo(() => getColor(fillColor), [fillColor])

  const generateClipPath = (index: number) => {
    if (scrollY >= startHeight) {
      const clipProgress = (((scrollY - startHeight) - (breakPoint * (index))) / (breakPoint)) * fillSpeed;
      return clipProgress ? getClipPathForDirection({ fillDirection, clipProgress }) : DEFAULT_CLIP_PATH;
    }
    else return DEFAULT_CLIP_PATH;
  }

  return (
    <div ref={ref}>
      {
        text.map((individualText, index) => <div key={individualText + '-' + index}
          style={{ position: 'relative', width: 'fit-content' }}
        >
          <div style={initialColorStyle}>{individualText}</div>
          <div
            style={{ clipPath: generateClipPath(index), position: 'absolute', color: fillColor, top: 0, left: 0, ...fillColorStyle }}
          >
            {individualText}
          </div>
        </div>)
      }
    </div>
  )
}

export default TextReveal;