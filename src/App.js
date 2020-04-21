import React, {Component} from 'react';
import './App.css';
import BagelsForm from './BagelsForm'
import BagelsContainer from './BagelsContainer'


class App extends Component{

  state = {
    bagels:[]
  }
  componentDidMount(){
    fetch('http://bagel-api-fis.herokuapp.com/bagels')
    .then(response => response.json())
    .then(result => this.setState({bagels:result}))
  }

  render(){
    return(
      <>
        <h1>This is our Bagels App</h1>
        <BagelsContainer bagels={this.state.bagels}/>
        <BagelsForm/>
      </>
    )
  }


}

export default App