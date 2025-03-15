import React, { useState } from "react";
import "./App.css"; // You can keep or remove this line if you don't need default CSS

function App() {
  // Declare a state variable 'inputText' and a function 'setInputText' to update it
  const [inputText, setInputText] = useState("");

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    setInputText(event.target.value); // Update inputText state with the current input value
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Type here..."
          value={inputText} // Bind the input value to the inputText state
          onChange={handleInputChange} // Call handleInputChange on every input change
        />
        <h1>{inputText}</h1>{" "}
        {/* Display the inputText state in the <h1> element */}
      </header>
    </div>
  );
}

export default App;
