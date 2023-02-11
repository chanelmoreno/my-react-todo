import React, { useState } from 'react'
import '../App.css';

const TodoItem = (items) => {
  console.log('items', items)


  const deleteItem = (id) => {
    // const newArray = items.items.filter(item => item.item.id !== id)
    // setItems(newArray);
    console.log('deleted item')
  }

  const completeItem = (id) => {
    // const newArray = items.filter(item => item.item.id !== id)
    // setItems(newArray);
    console.log('completed item')
  }


  return (
    <div >
      <div class='todoList-div'>
        <ul class='todoList'>
          {items.map(item => {
            return (
              <div class='list'>
                <li class='listItem' key={item.id}>
                  {item.value}
                </li>
                <div class='listItemButton'>
                  <button onClick={() => completeItem(item.id)}>✅ Complete</button>
                  <button onClick={() => deleteItem(item.id)}>❌ Delete</button>
                </div>
              </div>

            )
          })}
        </ul>
      </div>

    </div>
  )
}

export default TodoItem




