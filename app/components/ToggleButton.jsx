"use client";

import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>{isOn ? "ON" : "OFF"}</p>

      <button onClick={() => setIsOn(!isOn)}>Switch</button>
    </div>
  );
}

export default ToggleButton;
