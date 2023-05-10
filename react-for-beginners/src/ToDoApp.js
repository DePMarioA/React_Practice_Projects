import { useState } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo !== "") {
      setToDos((curr) => [...curr, toDo]);
      setToDo((val) => "");
    } else {
      return;
    }
  };
  const onDelete = (val) => {
    setToDos((curr) => [...curr.filter((x, index) => index !== val)]);
  };
  const onDeleteAll = () => {
    setToDos((curr) => []);
  };
  return (
    <div>
      <h1>My To-Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write here for your todo..........."
        />
        <button>Add To Do</button>
        <button onClick={onDeleteAll}>Clear</button>
      </form>
      <hr />
      <ul>
        {toDos.map((curr, index) => (
          <li key={index}>
            <span>{curr} </span>
            <button onClick={() => onDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
