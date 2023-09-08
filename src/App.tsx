import React, { useState } from "react";
import "./App.css";

interface KeystrokeDataFormat {
  timestamp: number;
  key: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<KeystrokeDataFormat[]>([]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == " ") {
      setData((prevData) => [...prevData, { timestamp: Math.floor(Date.now() / 1000), key: "Spacebar" }]);
    } else {
      setData((prevData) => [...prevData, { timestamp: Math.floor(Date.now() / 1000), key: e.key }]);
    }
  };

  return (
    <div>
      <p className="text-center text-5xl p-10">Keystroke Logging</p>
      <input
        className="border border-black w-full h-96 p-1 break-all"
        type="text"
        onKeyDown={handleKeyPress}
        placeholder="Enter Text Here!"
      />
      <br></br>
      <br></br>

      <p>
        <ul className="p-1">
          {data.map((record, index) => (
            <li key={index}>
              Pressed {record.key} at {record.timestamp}
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default App;
