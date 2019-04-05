/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loading from '../../images/Loading.gif';
import Episode from '../Episode';
import styles from './Episodes.scss';

class Episodes extends Component {
  state = {
    readyEpisodes: false,
  }

  componentDidMount() {
    const { nameTvShow, loadTvShowEpisodes, isReadyEpisodes } = this.props;
    loadTvShowEpisodes(nameTvShow);
    this.onReady(isReadyEpisodes);
  }

  componentDidUpdate(prevProps) {
    const { nameTvShow, loadTvShowEpisodes, isReadyEpisodes } = this.props;
    if (nameTvShow !== prevProps.nameTvShow) {
      loadTvShowEpisodes(nameTvShow);
      window.scrollTo(0, 0);
    }
    if (isReadyEpisodes !== prevProps.isReadyEpisodes) {
      this.onReady(isReadyEpisodes);
    }
  }

  onReady = (newIsReady) => {
    this.setState({ readyEpisodes: newIsReady });
  }

  render() {
    const { tvShowEpisodes } = this.props;
    const { readyEpisodes } = this.state;
    return (
      <div>
        {readyEpisodes === false
          && (
          <img
            src={Loading}
            className={styles.Ready}
            alt="Loading Episodes"
          />
          )}

        {readyEpisodes === true
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
