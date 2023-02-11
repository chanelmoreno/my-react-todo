import React, { useState } from 'react'
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

  const completeItem = (id) => {
    const newArray = items.filter(item => item.id !== id)
    setItems(newArray);
  }

  return (
    <div >
      <div class="todo-title">
        <h1 class="task-title">Tasks</h1>
      </div>

      <div class='todo'>
        <div class='todo-input-div'>
          <input
            class='todo-input'
            type="text"
            placeholder='What do you want to focus on?'
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
          />
        </div>
        <div>
          <button class='add-button' onClick={() => addItem()}>+ Add Task</button>
        </div>
      </div>


      <div class='todoList-div'>
        <ul class='todoList'>
          {items.map(item => {
            return (
              <div class='list'>
                <li class='listItem' key={item.id}>
                  <h3>{item.value}</h3>
                  <button class='listItemButton' onClick={() => deleteItem(item.id)}>❌ Delete</button>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    </div>

  )
}

export default Todo