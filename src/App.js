import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoAdd from "./components/TodoAdd";
import TodoInfo from "./components/TodoInfo";
import Todos from "./components/Todos";

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:9000/todos')
          .then(res => { 
              setTodos(res.data.data.todos);
              setLoading(false);
           })
          .catch(err => { 
              console.log(err.message);
              setLoading(false);
              setError(true);
          })
    }, [])

    const addTodo = todo => {
        axios.post('http://localhost:9000/todos', { todo: todo })
         .then(res => {
            const newTodo = res.data.data.todo;
            setTodos([ ...todos, newTodo ]);
         })
         .catch(err => console.log(err.message))
    }

    const deleteTodo = id => {
        axios.delete(`http://localhost:9000/todos/${id}`)
          .then(res => {
            const filteredTodos = todos.filter(todo => todo._id !== id);
            setTodos(filteredTodos);
          })
          .catch(err => console.log(err.message));
    }

    const updateTodo = id => {
        const todo = todos.filter(todo => todo._id === id);
        const selectedTodo = todo[0];

        axios.put(`http://localhost:9000/todos/${id}`, { completed: !selectedTodo.completed })
         .then(res => {
            const updatedTodos = todos.map(todo => {
                return todo._id === id ? { ...todo, completed: !todo.completed } : todo
            });
            setTodos(updatedTodos);
         })
         .catch(err => console.log(err.message));
    }

    return (
       <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen p-1">
           <div className="bg-white max-w-sm mx-auto mt-4 rounded p-4">
               <TodoAdd todos={todos} setTodos={setTodos} addTodo={addTodo} />
               {loading ? (
                   <p>Loading...</p>
                ) : (
                    <Todos 
                        todos={todos}  
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                        error={error}
                    />
               )}
               <TodoInfo todosCount={todos.length} setTodos={setTodos} />
           </div>
       </div>
    )
}

export default App

// [
//     {
//         _id: 1,
//         todo: 'Todo content 1',
//         completed: false
//     },
//     {
//         _id: 2,
//         todo: 'Todo content 2',
//         completed: false
//     },
//     {
//         _id: 3,
//         todo: 'Todo content 3',
//         completed: false
//     },
// ]
