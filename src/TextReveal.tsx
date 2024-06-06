import { useMemo, useRef } from "react";
import { generateClipPath, getColor } from "./index";
import { TextRevealProps } from "./types";

/**
 * @description Smooth Color change animation in every characters in a text while scroll
 * @prop text - Array of text.
 * @prop textColor - Initial color of the text before fill
 * @prop fillColor - Color which is going to fill the character while scroll
 * @prop fillSpeed - Speed to fill/show the text (default 100 means 100%)
 * @prop fillDelay - Delay to fill/show the text - Give value between (0-99) (default 30, means after 30% of viewpoint the transition starts)
 * @prop fillDirection - Direction to fill/show the text
 * @prop fillType - 'scroll' | 'timer' 1)scroll - on mouse scroll transtion happens. 2) timer - automatically transtion starts, when the text is in viewpoint.
 * @prop fillDuration - Works when fillType='timer',How much duration to fill/show the text Default 2000 (milliseconds)
*/

const TextReveal = ({ text, textColor = '#3d3d3d', fillColor = '#f47979', fillSpeed = 100, fillDelay = 30, fillDirection = 'left-right', fillType = 'scroll', fillDuration = 2000, freeScroll = false }: TextRevealProps) => {

  const ref = useRef<HTMLDivElement | null>(null);

  const initialColorStyle = useMemo(() => getColor(textColor), [textColor])
  const fillColorStyle = useMemo(() => getColor(fillColor), [fillColor])

  const { generateClipPathFunction } = generateClipPath({ fillType, ref, fillDelay, fillDirection, fillSpeed, fillDuration, textLength: text.length, freeScroll })

  return (
    <div ref={ref}>
      {
        text.map((individualText, index) => <div key={individualText + '-' + index}
          style={{ position: 'relative', width: 'fit-content', whiteSpace: 'nowrap' }}
        >
          <div style={initialColorStyle}>{individualText}</div>
          <div
            style={{ clipPath: generateClipPathFunction(index), position: 'absolute', color: fillColor, top: 0, left: 0, ...fillColorStyle }}
          >
            {individualText}
          </div>
        </div>)
      }
    </div>
  )
}

export default TextReveal;