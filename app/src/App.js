import React from "react";
import Header from "./components/Header";
import FormCreate from './components/FormCreate';
import Section from './components/Section';

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
      </>
    );
  }
}

export default App;