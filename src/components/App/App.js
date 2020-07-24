import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import AddItem from '../AddItem/AddItem';
import style from './App.module.css';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todoData :[
        {label: 'Drink Coffee', important: false, done:false, id: 1},
        {label: 'Drink Coffee', important: false, done:false, id: 2},
        {label: 'Have a lunch', important: false, done:false, id: 3},
      ],
      term: '',
      filter: 'all' //active //all //done
    };

    this.deleteItem = (id) => {
      this.setState((state) => {
        const idx = state.todoData.findIndex((el)=>el.id===id);
        const newArr = [...state.todoData.slice(0,idx), ...state.todoData.slice(idx+1)];
        return{
          todoData: newArr
        };
      });
    };

    let maxid = 100;
    this.addItem = (text) => {
      const newItem = {label:text, important:false, done:false, id: maxid++};
      this.setState((state)=>{
        const newArr = [...state.todoData,newItem]
        return{
          todoData: newArr
        };
      });
    };

    this.toggleProperty = (arr,id,propName) =>{
      //update object
      const idx = arr.findIndex((el)=>el.id===id);
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};
      //newArray
        return[
          ...arr.slice(0,idx),
            newItem,
          ...arr.slice(idx+1)];
    };
    
    this.onToggleDone = (id) => {
      this.setState((state)=>{
          return{
            todoData:this.toggleProperty(state.todoData, id, 'done')
          };
      });
    };
    
    
    this.onToggleImportant = (id) => {
      this.setState((state)=>{
        return{
          todoData:this.toggleProperty(state.todoData, id, 'important')
        };
      });
    };

    this.search = (items, term) => {
      if (term.length === 0){
          return items;
        }

      return items.filter((item) => {
        return item.label.toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
      });
    }

    this.onSearchChange = (term) => {
      this.setState({term});
    }

    this.filter = (items, filter) => {
      switch(filter){
        case 'all':
          return items;
        case 'active':
          return items.filter((item) => !item.done)  
        case 'done':
          return items.filter((item) => item.done)
        default:
          return items;
      }
    }

    this.onFilterChange = (filter) => {
      this.setState({filter});
    }



  }

    render(){
    let visibleItems = this.filter(this.search (this.state.todoData, this.state.term), this.state.filter);
    let doneCount = this.state.todoData
                  .filter((element)=>element.done).length;
    let toDoCount = this.state.todoData.length - doneCount;

    return (
      <div>
          <div className={style.AppHeader}>
          <AppHeader toDo={toDoCount} done={doneCount} />
          </div>
          <div className={style.SearchPanel}>
          <SearchPanel
            onSearchChange = {this.onSearchChange}
          />
          </div>
          <div className={style.ItemStatusFilter}>
          <ItemStatusFilter
            filter={this.state.filter}
            onFilterChange = {this.onFilterChange}
          />
          </div>
          <TodoList 
          todoData={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          />
          <AddItem onItemAdded={this.addItem}/>
      </div>
    );
    }
  };
  
  export default App;