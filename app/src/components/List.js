import React from 'react';
import ToDo from './ToDo';


class List extends React.Component {
  render() {
    return (
      <div className="ui grid center aligned">
        
        {this.props.listItems.map((item) => 
        <ToDo 
          toDoTitle={item.title} 
          isCompleted={item.completed} 
          key={item.id }
          id={item.id }
          handleDeleteItem={this.props.handleDeleteItem}
        />)}
      
      </div>
    );
  }
}

export default List;