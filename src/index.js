import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import TodosContextProvider from './contexts/TodosContextProvider';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
            <TodosContextProvider>
                <App />
            </TodosContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)