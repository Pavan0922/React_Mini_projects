import React from "react";
import "./index.css";

function CurrencyConvertor() {
  return (
    <div className="currency-convertor">
      <h2>Currency Convertor</h2>
      <div className="input-section">
        <input type="number" placeholder="Enter amount" />
        <select>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          {/* Add more currency options as needed */}
        </select>
        <span>to</span>
        <select>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          {/* Add more currency options as needed */}
        </select>
      </div>
      <button>Convert</button>
      <div className="result"></div>
    </div>
  );
}

export default CurrencyConvertor;
