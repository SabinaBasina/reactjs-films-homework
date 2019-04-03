/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Episode from '../Episode';

class Episodes extends Component {
  componentDidMount() {
    const { nameTvShow, loadTvShowEpisodes } = this.props;
    loadTvShowEpisodes(nameTvShow);
  }

  componentDidUpdate(prevProps) {
    const { nameTvShow, loadTvShowEpisodes } = this.props;
    if (nameTvShow !== prevProps.nameTvShow) {
      loadTvShowEpisodes(nameTvShow);
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { tvShowEpisodes } = this.props;
    return (
      <div>
        {tvShowEpisodes && tvShowEpisodes._embedded
          && tvShowEpisodes._embedded.episodes.map(episode => (
            <Episode key={episode.id} data={episode} />))
        }
      </div>
    );
  }
}

export default Episodes;

Episodes.propTypes = {
  nameTvShow: PropTypes.string,
  tvShowEpisodes: PropTypes.instanceOf(Object),
  loadTvShowEpisodes: PropTypes.func,
};

Episodes.defaultProps = {
  nameTvShow: 'undefined',
  tvShowEpisodes: undefined,
  loadTvShowEpisodes: () => { },
};
