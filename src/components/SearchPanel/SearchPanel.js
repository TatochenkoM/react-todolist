import React from 'react';

class SearchPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    };

    this.onSearchChange = (event) => {
      const term = event.target.value;
      this.setState({term});
      this.props.onSearchChange(term);
    };

  }

  render(){
    return (
      <input type='text'
        placeholder='Type here to search'
        value={this.state.term}
        onChange={this.onSearchChange}/>
    
      );}
  };

  export default SearchPanel;