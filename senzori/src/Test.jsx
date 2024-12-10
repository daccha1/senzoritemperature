import React, { useState } from "react";

export default function Test() {
  const [buttons, setButtons] = useState([
    false,
    true,
    true,
    true,
    true,
    false,
  ]);

  const handleVrednosti = (index) => {
    const newButtons = buttons;

    buttons[index] = true;

    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === true && i !== index) {
        newButtons[i] = false;
      }
    }

    setButtons(newButtons);
    console.log(buttons);
  };

  return (
    <div>
      <button onClick={() => handleVrednosti(1)}>Klikni me</button>
    </div>
  );
}
