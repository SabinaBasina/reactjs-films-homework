import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './TvShow.scss';
import NoImage from './NoImage.jpg';

class TvShow extends PureComponent {
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
            {data.genres && Array.prototype.join.call(data.genres, ', ')}
          </span>
        </p>
      </Link>
    );
  }
}


export default TvShow;

TvShow.propTypes = {
  data: PropTypes.string,
};

TvShow.defaultProps = {
  data: 'undefined',
};
