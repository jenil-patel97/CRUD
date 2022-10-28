import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState(["Learn react", "Grind next"]);

  return (
    <div className="h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]">
      <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
        <h3 className="text-2xl font-bold text-center text-gray-800 p-2 cursor-default">
          Todo App
        </h3>
        <form className="flex justify-between">
          <input
            className="border p-2 w-full text-lg"
            type="text"
            placeholder="Add Todo"
          />
          <button className="border p-4 ml-2 bg-purple-500 text-slate-100">
            <AiOutlinePlus size={24} />
          </button>
        </form>

        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <p className="text-center p-2 underline cursor-default">
          You Have 2 Todos
        </p>
      </div>
    </div>
  );
}

export default App;
