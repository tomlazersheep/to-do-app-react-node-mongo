import React from "react";
import Header from "./components/Header";
import FormCreate from './components/FormCreate';
import Section from './components/Section';
import List from "./components/List";
import ToDo from "./components/ToDo";

class App extends React.Component {
  render() {
    return (
      <>
        <Section>
          <Header title="To-Do App" />
        </Section>
        <Section>
          <FormCreate />
        </Section>
        <Section>
          <List/>
          
        </Section>
      </>
    );
  }
}

export default App;