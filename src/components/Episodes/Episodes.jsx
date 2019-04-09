/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Episode from '../Episode';
import Loader from '../Loader';

class Episodes extends Component {
  componentDidMount() {
    const { nameTvShow, loadTvShowEpisodes } = this.props;
    loadTvShowEpisodes(nameTvShow);
  }

  render() {
    const { tvShowEpisodes, isReadyEpisodes } = this.props;
    return (
      <div>

        <Loader loading={!isReadyEpisodes} />

        {isReadyEpisodes
          && (
          <div>
            {tvShowEpisodes && tvShowEpisodes._embedded
              && tvShowEpisodes._embedded.episodes.map(episode => (
                <Episode key={episode.id} data={episode} />))
            }
          </div>
          )}

      </div>
    );
  }
}

export default Episodes;

Episodes.propTypes = {
  nameTvShow: PropTypes.string,
  tvShowEpisodes: PropTypes.instanceOf(Object),
  isReadyEpisodes: PropTypes.bool,
  loadTvShowEpisodes: PropTypes.func,
};

Episodes.defaultProps = {
  nameTvShow: 'undefined',
  tvShowEpisodes: undefined,
  isReadyEpisodes: false,
  loadTvShowEpisodes: () => { },
};
