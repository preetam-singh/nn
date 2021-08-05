import { useState, useEffect } from 'react';

 const useDetectOutsideClick = (el: any, initialState:any) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e: any) => {
        console.log('hi', e)
      // If the active element exists and is clicked outside of
        setIsActive(!isActive);
    
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    }

  }, [isActive, el]);

  return [isActive, setIsActive];
};

export default useDetectOutsideClick;