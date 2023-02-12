import React, { useState } from 'react'
import { TodoItem } from '../components'
import '../App.css';


const Todo = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  // Helper Functions 
  const addItem = () => {
    if (!newItem) {
      alert("Enter an item please");
      return;
    };

    const item = {
      id: Math.floor(Math.random() * 100000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    const newArray = items.filter(item => item.id !== id)
    setItems(newArray);
  }


  return (
    <div >
      <h1 className="title">Tasks</h1>
      <div className='todo' >
        <div className='todo-input-div' >
          <input
            className='todo-input'
            maxlength="30"
            type="text"
            placeholder='What do you want to focus on?'
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
          />
        </div >
        <div>
          <button className='add-button' onClick={() => addItem()}>+ Add Task</button>
        </div >
      </div>
      <div className='list'>
        {items.map(item => {
          return (
            <div className='listItem'>
              <TodoItem item={item} />
              <button className='listItemButton' onClick={() => deleteItem(item.id)}>❌ Delete</button>
            </div>

          )
        })}
      </div >
    </div >

  )
}

export default Todo