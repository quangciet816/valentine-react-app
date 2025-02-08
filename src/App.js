import React, { useState } from "react";
import "./App.css";

function App() {
  const [size, setSize] = useState(1);
  const [showLove, setShowLove] = useState(false);

  const handleNoClick = () => {
    setSize(size * 2); // Mỗi lần bấm "No", nút "Yes" sẽ to gấp đôi
  };

  const handleYesClick = () => {
    setShowLove(true);
  };

  return (
    <div className="container">
      {!showLove ? (
        <div className="question-box">
          <img src="https://i.postimg.cc/fTz66wbL/6adfc4f2-e2c6-4c9b-9688-cc4c19ec6c50.jpg" alt="Valentine" className="valentine-img" />
          <h1>Will you be my Valentine? ❤️</h1>
          <div className="buttons">
            <button className="yes-btn" style={{ fontSize: `${size}em` }} onClick={handleYesClick}>
              Yes
            </button>
            <button className="no-btn" onClick={handleNoClick}>
              No
            </button>
          </div>
        </div>
      ) : (
        <div className="love-box">
          <img src="https://i.postimg.cc/j5ypr2NW/3906dab0-d8d3-4b6f-b8f3-3a7f6f31230c.jpg" alt="Love" className="love-img" />
          <h1>Luv U 😘💖</h1>
        </div>
      )}
    </div>
  );
}

export default App;
