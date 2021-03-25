import React from 'react';

class Section extends React.Component {
  render() {
    return (
      <section style={{margin: 50+"px"}}>
        {this.props.children}
      </section>
    );
  }
}

export default Section;