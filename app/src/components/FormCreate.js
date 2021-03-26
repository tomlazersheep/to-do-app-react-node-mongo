import React from 'react';

class FormCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      cInput: ''
    }
  }
  
  handleInputChange = (e) => {
    this.setState({ cInput: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.cInput.trim()) {
      this.props.handleCreateItem(this.state.cInput);
      this.setState({
        cInput: ''
      });
    }
  }
  
  
  render() {
    return (
      <form 
        className="ui form" 
        onSubmit={this.handleSubmit}
      >
        <div className="ui grid center aligned">
          <div className="row">
            <div className="column five wide">
              <input 
                value={this.state.cInput}
                onChange={this.handleInputChange}
                placeholder="What do you need to do?"
                type="text" 
              />
            </div>
            <div className="column one wide">
              <button type="submit" className="ui button circular icon green">
                <i className="plus icon white"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default FormCreate;