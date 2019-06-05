import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: 'ABC',
        phone: '000-001-001'
      },
      {
        id: 1,
        name: 'abc',
        phone: '001-002-002'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id ? { ...info, ...data } : info
      )
    })
  }

  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList data = {information} onRemove = {this.handleRemove} onUpdate = {this.handleUpdate} />
      </div>
    );
  }
}

export default App;
