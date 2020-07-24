import React from 'react';
import styles from './ItemStatusFilter.module.css';

class ItemStatusFilter extends React.Component{

    buttons =[
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]

    render(){
        


        const buttons = this.buttons.map(({name,label}) => {
            const isActive = this.props.filter === name;
            const cl = isActive ? 'btn-info' : 'btn-outline-secondary';
            return(
                <button className={`btn ${cl}`}
                        key={name}
                        onClick={()=>{this.props.onFilterChange(name)}}
                        >{label}</button>
            );
        });

        return(
            <div className={styles.buttons}>
                {buttons}
            </div> 
                );
    }

}

export default ItemStatusFilter;