import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Signature.scss';

class Signature extends PureComponent {
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
  name: 'undefined',
};

export default Signature;
