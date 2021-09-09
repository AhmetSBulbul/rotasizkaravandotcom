import { useEffect } from "react";

export default function useLockBodyScroll(
  toggle
) {
  useEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(
      document.body
    ).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = toggle
      ? "hidden"
      : originalStyle;
    // Re-enable scrolling when component unmounts
    return () =>
      (document.body.style.overflow =
        originalStyle);
  }, [toggle]); // Empty array ensures effect is only run on mount and unmount
}
