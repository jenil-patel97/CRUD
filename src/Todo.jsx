import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todo }) => {
  return (
    <li className="flex justify-between bg-slate-200 p-4 my-2 capitalize">
      <div className="flex">
        <input type="checkbox" />
        <p className="ml-2 cursor-pointer">{todo}</p>
      </div>
      <button>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default Todo;
