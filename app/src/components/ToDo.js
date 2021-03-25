import React from 'react';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      toDoTitle: this.props.title ? this.props.title : '',
      tempToDoTitle: this.props.title ? this.props.title : '',
      isCompleted: false
    }
  }

  handleDoubleClick = (e) => {
    this.setState({
      isEdit: true
    })
  }

  handleKeyDown = (e) => {
    const key = e.keyCode;

    if (key == 13 ) {
      this.setState({
        toDoTitle: this.state.tempToDoTitle,
        isEdit: false,
      });
    } else if (key == 27) {
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

  render() {
    return (
      <div className="row" onDoubleClick={this.handleDoubleClick}>
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
              <h3>{this.state.toDoTitle}</h3>
            </div>

            <div className="column one wide">
              <button className="ui button circular green icon">
                <i className="white check icon"></i>
              </button>
            </div>


            <div className="column one wide">
              <button className="ui button circular red icon">
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