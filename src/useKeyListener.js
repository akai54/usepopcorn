import { useEffect, useRef, useState } from "react";

export function useKeyListener(query, setQuery, key) {
  const [inputValue, setInputValue] = useState(query);
  const inputEl = useRef(null);

  useEffect(() => {
    function keyListener(e) {
      if (document.activeElement !== inputEl.current) {
        if (e.key.toLowerCase() === key.toLowerCase()) inputEl.current.focus();
      }
      if (e.key.toLowerCase() === key.toLowerCase()) {
        setQuery(inputValue);
      }
    }

    document.addEventListener("keydown", keyListener);

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", keyListener);
    };
  }, [setQuery, inputValue, key]);

  return { inputValue, setInputValue, inputEl };
}
