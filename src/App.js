import React, { useState, useEffect } from 'react';
import './app.css';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('todos');
    if (stored) {
      setTodos(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const inputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    if (e.key === 'Enter') {
      if (newTodo.trim() !== '') {
        setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
        setNewTodo('');
      }
    }
  };

  const toggleComplete = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  const deteleTodo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  useEffect(() => {
    window.addEventListener('keydown', addTodo);
    return () => {
      window.removeEventListener('keydown', addTodo);
    };
  }, [addTodo]);

  const pending = todos.filter((todo) => !todo.completed).length;
  const completedTodo = todos.length - pending;

  return (

    <div className="bg-neutral-900 border-4 border-white rounded-3xl overflow-hidden max-h-[80vh] lg:w-[30%] md:w-[50%] w-[80%]">

      <div className='w-full h-[15%]'>
        <input className='w-full h-full p-3 border border-white outline-none text-neutral-950' type="text" placeholder="Add a new Todo..." value={newTodo} onChange={inputChange} />
      </div>

      <div className='h-[70%] overflow-y-scroll modifiedScroll border-b-2 border-white grow-0 p-[5%] relative'>

        <p className='todoText z-10 cursor-default font-black md:text-[100px] text-[85px]'>Todo</p>

        {todos.map((todo) => (

          <div className='py-3 flex items-center justify-between gap-8 z-20' key={todo.id}>

            <div className='flex items-center'>

              <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />

              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className='basis-0 grow h-full text-lg text-justify'> {todo.text} </span>

            </div>

            <button className='w-[20px] h-[20px] shrink-0' onClick={() => deteleTodo(todo.id)}>
              <img src="delete.png" className='h-full w-full' />
            </button>

          </div>
        ))}
      </div>

      <div className='flex h-[15%] w-full'>

        <div className='h-full flex justify-center items-center border-e-4 border-white grow'>
          <p className='text-xl'>Pending</p>
        </div>

        <div className='h-full flex justify-center items-center border-e-4 border-white grow'>
          <p className='text-xl'>{pending}</p>
        </div>

        <div className='h-full flex justify-center items-center border-e-4 border-white grow'>
          <p className='text-xl'>Completed</p>
        </div>

        <div className='h-full flex justify-center items-center grow'>
          <p className='text-xl'>{completedTodo}</p>
        </div>

      </div>

    </div>

  );
};

export default App;