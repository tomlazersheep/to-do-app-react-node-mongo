import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      toDoTitle: this.props.toDoTitle ? this.props.toDoTitle : '',
      tempToDoTitle: this.props.toDoTitle ? this.props.toDoTitle : '',
      isCompleted: this.props.isCompleted ? this.props.isCompleted : false 
    }
  }

  handleTitleClick = (e) => {
    this.setState({
      isEdit: true
    })
  }

  handleKeyDown = (e) => {
    const key = e.keyCode;

    if (key === 13 ) {
      this.setState({
        toDoTitle: this.state.tempToDoTitle,
        isEdit: false,
      });
    } else if (key === 27) {
      this.setState({
        tempToDoTitle: this.state.toDoTitle,
        isEdit: false,
      });
    }
  }

  handleInputChange = (e) => {
    this.setState({ 
      tempToDoTitle: e.target.value 
    });
  }

  handleCompletion = (e) => {
    this.setState({
      isCompleted: !this.state.isCompleted
    });
  }

  handleDeleteClick = (e) => {
    this.props.handleDeleteItem(this.props.id);
  }

  render() {
    return (
      <div className="row">
        {this.state.isEdit ?
          <div className="column seven wide">
            <div className="ui input fluid"> 
              <input 
                type="text" 
                onKeyDown={this.handleKeyDown}
                onChange={this.handleInputChange}
                value={this.state.tempToDoTitle}
                autoFocus={true}
              />
            </div>
          </div>
          :
          <>
            <div className="column five wide">
              <h2 
                className={"ui header " + (this.state.isCompleted ? "green" : "")}
                style={{cursor: "pointer"}}
                onClick={this.handleTitleClick}
              >
                {this.state.toDoTitle}
              </h2>
            </div>

            <div className="column one wide">
              <button 
                className="ui button circular green icon"
                onClick={this.handleCompletion}
              >
                <i className="white check icon"></i>
              </button>
            </div>


            <div className="column one wide">
              <button 
                className="ui button circular red icon"
                onClick={this.handleDeleteClick}
              >
                <i className="white remove icon"></i>
              </button>
            </div>
          </>
        }
      </div>
    );
  }
}

export default ToDo;