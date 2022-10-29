import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todo }) => {
  return (
    <li className={todo.completed ? `flex justify-between bg-slate-400 p-4 my-2 capitalize` : `flex justify-between bg-slate-200 p-4 my-2 capitalize`}>
      <div className="flex">
        <input type="checkbox" checked={todo.completed ? 'checked' : ''} />
        <p className={todo.completed ? `ml-2 cursor-pointer line-through` : `ml-2 cursor-pointer`}>{todo.text}</p>
      </div>
      <button>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default Todo;
