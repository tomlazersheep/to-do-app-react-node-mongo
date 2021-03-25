import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <h1>Hola Jorge!</h1>
        <ComponentTest/>
        <Button/>
      </>
    );
  }
}

function sayHello() {
  console.log('hello!');
}

class Header extends React.Component {
  render() {
    return <header>
      <h1>Click the button!</h1>
    </header>;
  }
}

class ComponentTest extends React.Component {
  render() {
    return <p>I'm a component yay!</p>;
  } 
}

class Button extends React.Component {
  render() {
    return <button onClick={sayHello} >Click me!</button>
  }
}
export default App;