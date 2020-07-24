import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = (props) => {
  
  const elements = props.todoData.map((item)=>{
    const {id, ...itemProps} = item;
    return(<li key={id}>
      <TodoListItem 
        {... itemProps}
        onDeleted={() => props.onDeleted(id)} 
        onToggleImportant={()=> props.onToggleImportant(id)}
        onToggleDone={()=> props.onToggleDone(id)}
        />
        </li>);
  });

    return (
      <ul>
        {elements}
      </ul>
    );
  };

  export default TodoList;