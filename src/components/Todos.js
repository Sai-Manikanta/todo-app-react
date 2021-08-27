import Todo from './Todo'

function Todos({ todos, deleteTodo, updateTodo }) {
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
