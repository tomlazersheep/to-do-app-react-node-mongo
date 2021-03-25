import React from 'react';
import ToDo from './ToDo';


class List extends React.Component {
  render() {
    return (
      <div className="ui grid center aligned">
        <ToDo title="tu javie" /> 
      </div>
    );
  }
}

export default List;