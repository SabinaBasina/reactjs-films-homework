/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './TvShow.scss';
import NoImage from './NoImage.jpg';

class TvShow extends Component {
  render() {
    const { data } = this.props;
    return (
      <Link to={`/tvShowDetails/${data.id}`} className={styles.TvShow}>
        <br />
        <img src={data.image ? data.image.medium : NoImage} alt="" />
        {data.rating && data.rating.average
        && (
        <button className={styles.RatingTvShow} type="button">
          {data.rating.average}
        </button>
        )}
        <p>
          {data.name}
          <br />
          <span>
            {data.genres && data.genres.join(', ')}
          </span>
        </p>
      </Link>
    );
  }
}


export default TvShow;
