import React, { useState } from "react";
function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItem] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function handleClick() {}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;
