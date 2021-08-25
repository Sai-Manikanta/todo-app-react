function TodoInfo({ todoCount, setTodos }) {
    return (
        <div className="flex mt-6 justify-between items-center px-2">
            <p className="text-sm">
                You have { todoCount } pending tasks
            </p>
            <button 
                className="bg-purple-700 text-white px-2 py-1 rounded text-sm"
                onClick={() => setTodos([])}
            >
                Clear all
            </button>
        </div>
    )
}

export default TodoInfo
