import React from 'react';

const AppHeader = (props) => {
    return (
    <div>
      <h1>My Todo List </h1>
      <h4>{props.toDo} more to do, {props.done} done</h4>
    </div>
    );
  };

 export default AppHeader;