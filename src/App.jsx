import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AddItem, Items } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="w-full pt-10 bg-gradient-to-b from-indigo-300 to-indigo-600 h-screen">
      <AddItem />
    </section>
  );
}

export default App;
