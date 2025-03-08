import { useState, useCallback } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvexyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "~!@#$%^&*()";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  return (
    <>
      <div
        className=" flex justify-center flex-col  w-6xl h-56 rounded-2xl text-white p-5 my-20 bg-gray-700  
        "
      >
        <h1 className="text-center text-2xl">Password Generator</h1>
        <input
          className="bg-white text-black p-5"
          readOnly
          placeholder="Here is your password"
          value={password}
          type="text"
        />
        <button className="bg-blue-400 p-4 w-fit ">copy</button>
        <input
          type="range"
          min={8}
          max={100}
          value={length}
          onChange={(e) => {
            setlength(e.target.value);
          }}
        />
        <labe>length:{length}</labe>
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setnumberAllowed((val) => {
              !val;
            });
          }}
        />
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setcharAllowed((val) => {
              !val;
            });
          }}
        />
      </div>
    </>
  );
}

export default App;
