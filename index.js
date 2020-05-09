import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({posts: json}));
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => <Item title={post.title}/>)}
      </div>
    );
  }
}

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: props.title
    };
  }

  render() {
    return <div className="card" style={{backgroundColor:'blue', color: 'white'}}><p>{this.state.title}</p></div>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Lista/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
