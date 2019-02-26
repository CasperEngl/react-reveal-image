import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>React Reveal Image</h1>
      <Example 
        src="https://via.placeholder.com/400"
        style={{
          padding: '1rem',
          maxWidth: '500px',
        }}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
