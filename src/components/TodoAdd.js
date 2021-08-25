import React, { useState } from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom/cjs/react-dom.development';
import { FaPlus } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid';

function TodoAdd({ todos, setTodos }) {
    const [todoText, setTodoText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        
        const todo = {
            _id: uuidv4(),
            todo: todoText,
            completed: false
        }

        setTodos([...todos, todo]);

        setTodoText('');
    }

    return (
        <div>
            <h1 className="text-2xl">
                Todo App
            </h1>
            <form onSubmit={handleSubmit} className="mt-4 flex border">
                <input 
                    type="text" 
                    placeholder="Add your new todo" 
                    className="flex-grow py-1  px-2"
                    value={todoText}
                    onChange={e => setTodoText(e.target.value)}
                />
                <button className="bg-purple-700 text-white p-2 border-0">
                    <FaPlus />
                </button>
            </form>
        </div>
    )
}

export default TodoAdd
