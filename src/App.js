import React from 'react';
import TodoAdd from "./components/TodoAdd";
import TodoInfo from "./components/TodoInfo";
import Todos from "./components/Todos";

function App() {
    return (
       <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen p-1">
           <div className="bg-white max-w-sm mx-auto mt-4 rounded p-4">
               <TodoAdd />
               <Todos />
               <TodoInfo />
           </div>
       </div>
    )
}

export default App
