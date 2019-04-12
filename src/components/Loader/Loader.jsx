import React from 'react';
import Loading from '../../images/Loading.gif';
import styles from './Loader.scss';

export default ({ loading = true }) => loading
  && (
    <img
      src={Loading}
      className={styles.loader}
      alt="Loading"
    />
  );
