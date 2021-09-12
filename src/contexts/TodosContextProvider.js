import React, { createContext, useState } from 'react';

export const TodosContext = createContext();

function TodosContextProvider({ children }) {
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
        {
            _id: 4,
            todo: 'Todo content 4',
            completed: false
        },
    ]);

    const addTodo = todo => {
        setTodos([ ...todos, todo ])
    }

    const deleteTodo = id => {
        const filteredTodos = todos.filter(todo => todo._id !== id);
        setTodos(filteredTodos);
    }

    const updateTodo = id => {
        const updatedTodos = todos.map(todo => {
            return todo._id === id ? { ...todo, completed: !todo.completed } : todo
        });

        setTodos(updatedTodos);
    }

    const deleteAllTodos = () => {
        setTodos([]);
    }

    return (
        <TodosContext.Provider value={{ 
            todos, 
            addTodo, 
            deleteTodo, 
            updateTodo,
            todosCount: todos.length,
            deleteAllTodos
        }}>
            { children }
        </TodosContext.Provider>
    )
}

export default TodosContextProvider
