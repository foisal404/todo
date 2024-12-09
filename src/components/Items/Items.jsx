import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../features/TodoSlice/TodoSlice";

function Items() {
  const items = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between my-2 py-2 px-2 border-b  text-gray-800 bg-slate-100 hover:bg-indigo-100 rounded-md"
        >
          <h2 className="text-base font-medium mx-2">{item.text}</h2>{" "}
          <button
            className="p-0 m-0 bg-transparent hover:bg-indigo-100"
            onClick={() => handleDelete(item.id)}
          >
            <AiOutlineDelete className="text-red-500 bg-slate-100  text-2xl" />
          </button>
        </li>
      ))}
    </div>
  );
}

export default Items;
