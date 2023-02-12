import React, { useState } from 'react'
import '../App.css';

const TodoItem = (item, complete) => {
  console.log(`what is the completed state ${complete}`)
  return (
    <div>
      <ul>
        <li className="listValue" key={item.id}>
          {item.item.value}
        </li>
      </ul>
    </div>
  )
}

export default TodoItem




