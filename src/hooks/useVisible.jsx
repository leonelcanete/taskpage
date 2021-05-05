import { useState, useRef, useEffect } from "react";
 
function useVisible(initialIsVisible) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const refVisible = useRef(null);
 
  const handleClickOutside = (event) => {
    if (refVisible.current && !refVisible.current.contains(event.target)) {
      setIsVisible(false);
    }
  };
 
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
 
  return { refVisible, isVisible, setIsVisible };
}
 
export default useVisible;