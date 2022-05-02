import React from 'react'
import Header from './components/Header'
import './styles/App.css'
import Edit from './components/Edit'
import Main from './components/Main'

class App extends React.Component {

  render() {
    return (
      <div id="main">
        <Header />
        <div id="body">
          {/* <Main /> */}
          <Edit />
          {/* <Prototype /> */}
        </div>
      </div>
    )
  }
}

export default App;
