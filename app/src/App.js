import React from "react";
import Header from "./components/Header";
import FormCreate from './components/FormCreate';
import Section from './components/Section';
import List from "./components/List";
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listItems: []
    }
    //fetch list items here
    
    axios.get("http://localhost:3001/todo").then((e)=> {
      this.setState({
        listItems: e.data
      });
    });
  }
  
  handleCreateItem = (title) => {
    axios.post("http://localhost:3001/todo",{
      title: title,
      completed: false
    })
    .then(() => {
      axios.get("http://localhost:3001/todo").then((e)=> {
        this.setState({
          listItems: e.data
        });
      });
    });

  }

  handleDeleteItem = (itemId) => {
    axios.delete(`http://localhost:3001/todo/${itemId}`)
    .then( () => {
      axios.get("http://localhost:3001/todo").then((e)=> {
        this.setState({
          listItems: e.data
        });
      });
    });
  }

  handleEditItem = (itemId, newValues) => {
    axios.put(`http://localhost:3001/todo/${itemId}`, newValues)
    .then( () => {
      axios.get("http://localhost:3001/todo").then((e)=> {
        this.setState({
          listItems: e.data
        });
      });
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
          <List 
            listItems={this.state.listItems} 
            handleDeleteItem={this.handleDeleteItem}
            handleEditItem={this.handleEditItem} />
          
        </Section>
      </>
    );
  }
}

export default App;