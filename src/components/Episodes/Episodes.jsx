/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import http from 'axios';
import PropTypes from 'prop-types';
import Episode from '../Episode/Episode';

class Episodes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tvShow: [],
    };

    const { nameTvShow } = this.props;

    http
      .get(`https://api.tvmaze.com/singlesearch/shows?q=${nameTvShow}&embed=episodes`)
      .then((response) => {
        this.setState({ tvShow: response.data });
      });
  }

  render() {
    const { tvShow } = this.state;
    return (
      <div>
        { tvShow._embedded
            && tvShow._embedded.episodes.map(episode => (
              <Episode data={episode} />
            ))}
      </div>
    );
  }
}

export default Episodes;

Episodes.propTypes = {
  nameTvShow: PropTypes.string.isRequired,
};
