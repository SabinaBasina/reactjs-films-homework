import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './TvShow.scss';
import NoImage from './NoImage.jpg';

class TvShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={`/tvShowDetails/${this.props.data.id}`} className={styles.TvShow}>
        <br />
        <img src={this.props.data.image ? this.props.data.image.medium : NoImage} />
        {this.props.data.rating && this.props.data.rating.average
        && (
        <button className={styles.RatingTvShow}>
          {this.props.data.rating.average}
        </button>
        )}
        <p>
          {this.props.data.name}
          <br />
          <span>
            {this.props.data.genres
            && this.props.data.genres.join(', ')}
          </span>
        </p>
      </Link>
    );
  }
}


export default TvShow;
