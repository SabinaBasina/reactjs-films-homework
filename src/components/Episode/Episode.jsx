import React, { Component } from 'react';
import styles from './Episode.scss';
import NoImageEpisode from './NoImageEpisode.jpg';


class TvShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className={styles.Episode}>

        <b className={styles.Number}>
          {this.props.data.season}
          {' '}
            x
          {this.props.data.number}
        </b>

        <img src={this.props.data.image ? this.props.data.image.medium : NoImageEpisode} />

        <div className={styles.About}>
          <b>
            {' '}
            {this.props.data.name}
            {' '}
          </b>
          <br />
          <p dangerouslySetInnerHTML={{ __html: this.props.data.summary }} />
        </div>

      </div>
    );
  }
}


export default TvShow;
