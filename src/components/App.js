import React, { Component } from 'react'

export class App extends Component {
  state = {
    resource: 'Posts'
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={()=>this.setState({resource: 'Posts'})}>Posts</button>
          <button onClick={()=>this.setState({resource: 'Todos'})}>Todos</button>
        </div>
        {this.state.resource}
      </div>
    )
  }
}

export default App
