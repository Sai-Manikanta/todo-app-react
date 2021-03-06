import { AiOutlineDelete } from 'react-icons/ai'

function Todo({ data, deleteTodo, updateTodo }) {
    const { _id, todo, completed } = data;
    const linethrough = completed ? 'line-through' : '';

    return (
        <div className={`bg-gray-100 py-1 px-2 flex rounded mb-2 ${linethrough}`}>
            <p 
                className="flex-grow cursor-pointer select-none"
                onClick={() => updateTodo(_id)}
            >
                { todo }
            </p>
            <button 
                className="bg-red-400 px-2 py-1 text-white rounded" 
                onClick={() => deleteTodo(_id)}
            >
                <AiOutlineDelete />
            </button>
        </div>
    )
}

export default Todo
