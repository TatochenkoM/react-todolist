import React from 'react';
import styles from './TodoListItem.module.css';

class TodoListItem extends React.Component{

  render(){
    var classNames = require('classnames');
    
    

  return (
  <span className={classNames(styles.item, this.props.done? styles.done : "", this.props.important ? styles.important : "")}>
    <span
    className={styles.itemName} 
    onClick={this.props.onToggleDone}>
      {this.props.label}</span>
      <div>
    <button className={styles.button1}><img src="https://img.icons8.com/cute-clipart/64/000000/delete-forever.png" alt='Trash' onClick={this.props.onDeleted}/></button>
    <button className={styles.button2} onClick={this.props.onToggleImportant}><img src="https://img.icons8.com/bubbles/50/000000/box-important.png" alt='Important'/></button>
      </div>
  </span>
  );
  }
}



  export default TodoListItem;