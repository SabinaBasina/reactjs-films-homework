/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import styles from './Episode.scss';
import NoImageEpisode from './NoImageEpisode.jpg';


class TvShow extends Component {
  render() {
    const { data } = this.props;
    return (

      <div className={styles.Episode}>

        <b className={styles.Number}>
          {data.season}
            x
          {data.number}
        </b>

        <img src={data.image ? data.image.medium : NoImageEpisode} alt="" />

        <div className={styles.About}>
          <b>
            {' '}
            {data.name}
            {' '}
          </b>
          <br />
          <p dangerouslySetInnerHTML={{ __html: data.summary }} />
        </div>

      </div>
    );
  }
}


export default TvShow;
