import React from "react";
import Header from "./components/Header";
import FormCreate from './components/FormCreate';
import Section from './components/Section';
import List from "./components/List";


class App extends React.Component {
  constructor() {
    super();
    //fetch list items here
    const fakeListItems = [
      {id: 1,title: "fake title #1", completed: false},
      {id: 2,title: "fake title #2", completed: true},
      {id: 3,title: "fake title #3", completed: false},
      {id: 4,title: "fake title #4", completed: false},
      {id: 5,title: "fake title #5", completed: false},
      {id: 6,title: "fake title #6", completed: true},
    ];

    this.state = {
      listItems: fakeListItems
    }
  }
  
  handleCreateItem = (title) => {
    this.setState({
      listItems: this.state.listItems.concat({title: title, completed: false})
    });

    //push new item to server??
  }

  handleDeleteItem = (itemId) => {
    this.setState({
      listItems: this.state.listItems.filter((item) => item.id !== itemId)
    });
  }

  render() {
    return (
      <>
        <Section>
          <Header title="To-Do App" />
        </Section>
        <Section>
          <FormCreate handleCreateItem={this.handleCreateItem}/>
        </Section>
        <Section>
          <List listItems={this.state.listItems} handleDeleteItem={this.handleDeleteItem} />
          
        </Section>
      </>
    );
  }
}

export default App;