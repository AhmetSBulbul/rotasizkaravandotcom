import {
  useRef,
  useState,
  useEffect,
} from "react";

export default function useSlide(
  delay = 3000,
  length = 0
) {
  const [currentIndex, setCurrentIndex] =
    useState(0);
  const sliderInterval = useRef();

  useEffect(() => {
    sliderInterval.current = setInterval(() => {
      setCurrentIndex(
        (currentIndex + 1) % length
      ); //Change current index to next after delay
    }, delay);
    return () => {
      clearInterval(sliderInterval.current);
    };
  });

  return [currentIndex];
}
