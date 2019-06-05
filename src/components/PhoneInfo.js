import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: "name",
            phone: "000-000-000",
            id: 0
        }
    }
    state = {
        editing: false,
        name: '',
        phone: ''
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
            return false;
        }
        return true;
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { info, onUpdate } = this.props;

        if (!prevState.editing && this.state.editing) {
            this.setState({
                name: info.name,
                phone: info.phone
            });
        }
        if (prevState.editing && !this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        if (editing) { //update mode
            return (
                <div style={style}>
                    <input placeholder="name" value={this.state.name} onChange={this.handleChange} name="name" />
                    <input placeholder="phone number" value={this.state.phone} onChange={this.handleChange} name="phone" />
                    <button onClick={this.handleToggleEdit}>Apply</button>
                    <button onClick={this.handleRemove}>Remove</button>
                </div>
            )
        }

        // normal mode

        const {
            name, phone
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>Update</button>
                <button onClick={this.handleRemove}>Remove</button>
            </div>
        );
    }
}

export default PhoneInfo;