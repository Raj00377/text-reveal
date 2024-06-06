export interface TextRevealProps {
  /**
  * Array of text.
  */
  text: string[],
  /**
   * Initial color of the text before fill.
   * 
   * Gradients supported:
   * Syntax : linear-gradient(/value/)
   * 
   * E.g. linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)
   */
  textColor?: string,
  /**
   * Color which is going to fill the character while scroll.
   * 
   * Gradients supported:
   * Syntax : linear-gradient(/value/)
   * 
   * E.g. linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)
   */
  fillColor?: string,
  /**
   * Speed to fill/show the text (default 100 means 100%)
   */
  fillSpeed?: number,
  /**
   * Delay to fill/show the text 
   * 
   * Give value between (0-99) 
   * 
   * Default = 30, means after 30% of viewpoint, transition starts.
   */
  fillDelay?: number,
  /**
   * Direction to fill/show the text
   */
  fillDirection?: 'left-right' | 'top-bottom' | 'slant-top-bottom' | 'slant-bottom-top',
  /**
   * Depends upon the type the transition work.
   * 
   * scroll - on mouse scroll transtion happens.
   * 
   * timer - automatically transtion starts, when the text is in viewpoint.
   */
  fillType?: 'scroll' | 'timer',
  /**
   * Works when fillType='timer'
   * 
   * How much duration to fill/show the text
   * 
   * Default 2000 (milliseconds)
   */
  fillDuration?: number,
  /**
   * Having a paragraph?
   * Set freeScroll = true,
   * 
   * It takes relative content height and makes transition accordingly
   * 
   * Default value = false
   *
   */
  freeScroll?: boolean
}

export interface GenerateClipPathProps {
  ref: React.MutableRefObject<HTMLDivElement | null>,
  fillType: 'scroll' | 'timer',
  fillSpeed: number,
  fillDelay: number,
  fillDirection: 'left-right' | 'top-bottom' | 'slant-top-bottom' | 'slant-bottom-top',
  fillDuration: number,
  textLength: number,
  freeScroll: boolean
}


export interface GetPointsProps {
  ref: React.MutableRefObject<HTMLDivElement | null>,
  elementTop: number,
  parentHeight: number,
  fillDelay: number,
  textLength: number,
  freeScroll: boolean
}

export interface DirectionFunctionProps {
  fillDirection: string,
  clipProgress: number
}

export interface CounterProps {
  initialValue: number,
  targetValue: number,
  duration: number
}

export type ParentElementType = HTMLElement | Window | null;
