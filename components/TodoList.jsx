import React, { useState } from 'react';
import back_icon from "../assets/arrow-right.png";
import todo_icon from "../assets/checklist.png";
import TodoItem from './TodoItem'
import './style.css'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const handleToggleComplete = (index) => {
        const newTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    // اول کارهای انجام شده و بعد کارهای انجام نشده
    const sortedTodos = todos.sort((a, b) => {
        if (a.completed === b.completed) return 0;
        return a.completed ? -1 : 1;
    });

    return (
        <div className='mainz'>
            <div className='up'>
                <div className='title'>
                    <img className='icon' src={todo_icon} alt="" />
                    <h1>ToDo List</h1>
                </div>
                <img className='icon' id='what' src={back_icon} alt="" />
            </div>
        
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Add new task"
                />
                <button onClick={handleAddTodo}>Add</button>
                </form>
                <ul>
                    {sortedTodos.map((item, index) => (
                        <TodoItem 
                            key={index}
                            index={index}
                            completed={item.completed}
                            text={item.text}
                            handleToggleComplete={handleToggleComplete}
                            handleDeleteTodo={handleDeleteTodo}
                        />
                    ))}
                </ul>
            
        </div>
    );
};

export default TodoList;
