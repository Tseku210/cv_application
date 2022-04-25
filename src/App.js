import React from 'react'
import Header from './components/Header'
import './styles/App.css'
import Edit from './components/Edit'
import Prototype from './components/Prototype'

class App extends React.Component {

  render() {
    return (
      <div id="main">
        <Header />
        <div id="body">
          <Edit />
          <Prototype />
        </div>
      </div>
    )
  }
}

export default App;
