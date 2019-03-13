import React, { Component } from "react";
import PropTypes from 'prop-types';

class Signature extends Component {
    render() {
        return (
            <h1>Hello 1 + f, {this.props.name}</h1>
        );
    }
}

Signature.propTypes = {
    name: PropTypes.string
};

export default Signature;