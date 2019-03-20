import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Signature.scss';


class Signature extends Component {
  render() {
    const { name } = this.props;
    return (
      <main>
        <h1>
          Hello,
          {name}
        </h1>
        <article className={styles.about}>
          <p className={styles.text}>
            Text1
          </p>
        </article>
      </main>
    );
  }
}

Signature.propTypes = {
  name: PropTypes.string,
};

Signature.defaultProps = {
  name: 'Name',
};

export default Signature;
