import { useState } from "react";

function App() {
  const [color, setColor] = useState("green");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="flex fixed flex-wrap justify-center bottom-10 inset-x-0 ">
        <div className="flex justify-center flex-wrap bg-white p-5 rounded-full gap-4 ">
          <button
            onClick={() => setColor("red")}
            className="bg-pink-400 px-8 py-2 rounded-full inset-y-0"
          >
            pink
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-600 px-8 py-2 rounded-full inset-y-0"
          >
            Green
          </button>
          <button
            onClick={() => setColor("black")}
            className=" bg-black text-white px-8 py-2 rounded-full inset-y-0"
          >
            Black
          </button>
          <button
            onClick={() => setColor("white")}
            className="bg-white-400 px-8 py-2 rounded-full inset-y-0"
          >
            White
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-400 px-8 py-2 rounded-full inset-y-0"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="bg-purple-400 px-8 py-2 rounded-full inset-y-0"
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
