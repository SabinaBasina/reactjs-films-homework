import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Signature.scss';
import styles from './Signature.css';

class Signature extends Component {
    render() {
        return (
            <main>
                <h1>Hello, {this.props.name}</h1>
                <article className = {styles.about}>
                    <p className = {styles.text}>
                        Text
                    </p>
                </article>
            </main>            
        );
    }
}

Signature.propTypes = {
    name: PropTypes.string
};

export default Signature;