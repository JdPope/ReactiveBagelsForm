import React, {Component} from 'react';

class BagelForm extends Component{

    state = {
        bagel:'default bagel'
      };

    handleBagel = event =>{
        this.setState({
          bagel:event.target.value
        })
      }

      handleSubmit = event =>{
        event.preventDefault()
          this.props.handleMakeBagel(this.state)
      }

    render(){
    return (
        <>
        <h2>This is the Bagels Form</h2>
        <form>
        <label>
            Make a Bagel!
            <input id="bagel" name="bagel" type="text" value={this.state.bagel} onChange={event =>this.handleBagel(event)} />
          </label>
          <button type="submit">Make Bagel!</button>
        </form>
        </>
    )
    }
}

export default BagelForm