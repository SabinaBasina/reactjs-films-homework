/* eslint-disable react/no-danger */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Episode.scss';
import NoImageEpisode from '../../images/NoImageEpisode.jpg';


class Episode extends PureComponent {
  render() {
    const { data } = this.props;
    return (

      <div className={styles.episode}>

        <b className={styles.number}>
          {data.season}
            x
          {data.number}
        </b>

        <img src={data.image ? data.image.medium : NoImageEpisode} alt="EpisodeImage" />

        <div className={styles.about}>
          <b>
            {data.name}
          </b>
          <br />
          <p dangerouslySetInnerHTML={{ __html: data.summary }} />
        </div>

      </div>
    );
  }
}

export default Episode;

Episode.propTypes = {
  data: PropTypes.instanceOf(Object),
};

Episode.defaultProps = {
  data: undefined,
};
