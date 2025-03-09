import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const copyPasswordToClip = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    window.alert("text copied");
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvexyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "~!@#$%^&*()";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      //Here we are appending the pass if we dont append the value it will overwrite the value again and again and it will only give the single value
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className=" flex justify-center flex-col  w-6xl h-56 rounded-2xl text-white p-5 my-20 bg-gray-700">
        <h1 className="text-center text-2xl">Password Generator</h1>
        <div className="flex flex-col justify-center">
          <input
            className="bg-white text-black p-5"
            readOnly
            placeholder="Here is your password"
            value={password}
            type="text"
            ref={passRef}
          />
          <button
            onClick={copyPasswordToClip}
            className="bg-blue-400 p-4 w-fit"
          >
            copy
          </button>
        </div>
        <input
          type="range"
          min={8}
          max={100}
          value={length}
          onChange={(e) => {
            setlength(e.target.value);
          }}
        />
        <label>length:{length}</label>
        <div className="flex justify-end gap-10">
          <div>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setnumberAllowed((val) => !val);
              }}
            />
            <label>Number Allowed</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setcharAllowed((val) => !val);
              }}
            />
            <label>Special character Allowed</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
