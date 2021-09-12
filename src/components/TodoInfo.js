import React, { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContextProvider';

function TodoInfo({ setTodos }) {
    const { todosCount, deleteAllTodos } = useContext(TodosContext);
    return (
        <div className="flex mt-6 justify-between items-center px-2">
            <p className="text-sm">
                You have { todosCount } pending tasks
            </p>
            <button 
                className="bg-purple-700 text-white px-2 py-1 rounded text-sm"
                onClick={() => deleteAllTodos()}
            >
                Clear all
            </button>
        </div>
    )
}

export default TodoInfo
