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

        <b>{this.props.data.season} x {this.props.data.number}</b>
          
        <img src={this.props.data.image ? this.props.data.image.medium : NoImageEpisode} />
          
        <p>
          {this.props.data.name}
          <p dangerouslySetInnerHTML={{__html: this.props.data.summary}}/>
        </p>
      </div>  
    );
  }
}


export default TvShow;