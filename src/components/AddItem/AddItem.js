import React from 'react';
import styles from './AddItem.module.css';

class AddItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            label:'',
        }
        this.onLabelChange = (event) =>{
            this.setState ({
                label: event.target.value
            })
        };
        this.onSubmit = (event) => {
            event.preventDefault();
            this.props.onItemAdded(this.state.label)
            this.setState({
                label: '',
            });
        }

    };

    render(){
        var classNames = require('classnames');
        return(
            <form className={classNames("item-add-form d-flex", styles.forma )}
                onSubmit={this.onSubmit}
            >
                <input type="text" 
                className="form-control" 
                onChange={this.onLabelChange}
                placeholder="Todo"
                value = {this.state.label}/>
                <button className="btn btn-outline-secondary">Add Item</button>
            </form>
        
            )}

}

export default AddItem;