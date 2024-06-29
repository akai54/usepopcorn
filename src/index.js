import React, { useState } from "react";
import ReactDOM from "react-dom/client";
/* import "./index.css";
import App from "./App";
 */

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
    {/* <App /> */}
    <StarRating
      maxRating={5}
      color="red"
      size={128}
      messages={["Terrible", "Bad", "OK", "Good", "Excellent"]}
    />
    <Test />
  </React.StrictMode>
);
