import React, { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContextProvider';
import Todo from './Todo'

function Todos() {
    const { todos } = useContext(TodosContext);

    return (
        <div className="mt-4">
            {todos.length > 0 ? (
                <>
                    {todos.map(todo => <Todo key={todo._id} data={todo}  />)}
                </>
            ) : (
                <p className="text-center p-3">
                    No todos 😥
                </p>
            )}
        </div>
    )
}

export default Todos
