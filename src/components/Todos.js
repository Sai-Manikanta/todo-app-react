import Todo from './Todo'

function Todos({ todos, setTodos }) {

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

    return (
        <div className="mt-4">
            {todos.length > 0 ? (
                <>
                    {todos.map(todo => (
                        <Todo 
                            key={todo._id} 
                            data={todo} 
                            deleteTodo={deleteTodo} 
                            updateTodo={updateTodo}
                        />
                    ))}
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
