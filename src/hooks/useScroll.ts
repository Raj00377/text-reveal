import { useEffect, useState, useMemo, useCallback } from 'react'

type ParentElementType = HTMLElement | Window | null;

const getScrollParent = (node: HTMLElement | null): ParentElementType => {
  const isElement = node instanceof HTMLElement;
  const overflowY = isElement && window.getComputedStyle(node).overflowY;
  const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';

  if (!node) {
    return null;
  } else if (isScrollable && node.scrollHeight >= node.clientHeight) {
    return node;
  }

  return getScrollParent(node.parentElement) || window;
}

const getParentProps = (parentElement: ParentElementType, ref: React.MutableRefObject<HTMLDivElement | null>) => {
  return parentElement instanceof Window ?
    {
      parentHeight: parentElement?.innerHeight || 0,
      elementTop: ref.current?.offsetTop || 0
    } :
    {
      parentHeight: parentElement?.clientHeight || 0,
      elementTop: (ref?.current?.offsetTop || 0) - (parentElement?.offsetTop || 0)
    };
}

const useScroll = (ref: React.MutableRefObject<HTMLDivElement | null>) => {

  const [scrollY, setScrollY] = useState(0);

  const [parentElement, setParentElement] = useState<ParentElementType>(null);

  const { parentHeight, elementTop } = useMemo(() => getParentProps(parentElement, ref), [parentElement])

  useEffect(() => {
    setParentElement(getScrollParent(ref.current))
  }, [ref?.current])

  const onScroll = useCallback(() => {
    setScrollY(() => {
      return parentElement instanceof Window ? parentElement.scrollY : (parentElement?.scrollTop || 0);
    });
  },[parentElement, ref?.current]);

  useEffect(() => {
    //add eventlistener to window
    parentElement?.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      parentElement?.removeEventListener("scroll", onScroll);
    }
  }, [ref?.current, parentElement]);

  return { scrollY, parentElement, parentHeight, elementTop };

}

export default useScroll