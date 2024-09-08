import { useEffect, useRef, useState } from "react";

export function useKeyListener(query, setQuery, key) {
  const [inputValue, setInputValue] = useState(query);
  const inputEl = useRef(null);

  useEffect(() => {
    function keyListener(e) {
      if (e.key.toLowerCase() === key.toLowerCase()) {
        if (document.activeElement !== inputEl.current) {
          inputEl.current.focus();
        } else setQuery(inputValue);
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
