import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App-v1";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="green" onSetRating={setMovieRating} />
      <p>{movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
