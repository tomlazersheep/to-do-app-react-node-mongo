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
          key={item._id }
          id={item._id }
          handleDeleteItem={this.props.handleDeleteItem}
          handleEditItem={this.props.handleEditItem}
          
        />)}
      
      </div>
    );
  }
}

export default List;