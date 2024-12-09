import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, setStart } from "../../features/TodoSlice/TodoSlice";
import Items from "../Items/Items";
import { RiAddLargeLine, RiAddLine } from "react-icons/ri";

function AddItem() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleText = (e) => {
    e.preventDefault();
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };
  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("todos"));
    console.log(items);
    if (items?.length > 0) dispatch(setStart(items));
  }, []);
  return (
    <div className="max-w-md mx-auto bg-indigo-500 p-6 md:rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-100 mb-4 text-center">
        TODO LIST
      </h1>
      <form className="mb-4 flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-indigo-50 text-gray-800"
        />
        <button
          onClick={handleText}
          className="bg-cyan-500 hover:bg-cyan-600 text-white text-xl px-2.5 rounded-full transition duration-200"
          type="submit"
        >
          <RiAddLine />
        </button>
      </form>
      <Items />
    </div>
  );
}

export default AddItem;
