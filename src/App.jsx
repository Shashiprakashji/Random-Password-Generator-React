import { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [charAllowed, setCharAllowed] = useState(false);

  // Function to generate password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+=[]{}`";

    // Loop to generate characters for the password
    for (let i = 0; i < length; i++) {
      // Changed 'array.length' to 'length'
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex); // Concatenate generated characters to pass variable
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-black-500">
          <h1 className="text-white text-center my-3">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 p-4">
            <input
              type="text"
              value={password}
              className="outline-none  w-full py-1 px-3"
              placeholder="password"
              readOnly
            />
            <button
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
              onClick={passwordGenerator} // Added onClick handler to trigger password generation
            >
              Generate {/* Added button text */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
