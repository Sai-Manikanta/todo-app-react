import React, { useState } from 'react';
import TodoAdd from "./components/TodoAdd";
import TodoInfo from "./components/TodoInfo";
import Todos from "./components/Todos";

function App() {
    const [todos, setTodos] = useState([
        {
            _id: 1,
            todo: 'Todo content 1',
            completed: false
        },
        {
            _id: 2,
            todo: 'Todo content 2',
            completed: false
        },
        {
            _id: 3,
            todo: 'Todo content 3',
            completed: false
        },
    ]);

    return (
       <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen p-1">
           <div className="bg-white max-w-sm mx-auto mt-4 rounded p-4">
               <TodoAdd todos={todos} setTodos={setTodos} />
               <Todos todos={todos} setTodos={setTodos} />
               <TodoInfo todoCount={todos.length} setTodos={setTodos} />
           </div>
       </div>
    )
}

export default App
