import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="name" value={this.state.name} onChange={this.handleChange} name="name" />
                <input placeholder="phone number" value={this.state.phone} onChange={this.handleChange} name="phone" />
                <div>
                    { this.state.name }
                    { this.state.phone }
                </div>
                <button type="submit">Register</button>
            </form>
        );
    }
}

export default PhoneForm;