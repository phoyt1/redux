import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer';
import Artist from './components/Artist';
import Songs from './components/Songs';
import NewPlaylistContainer from './containers/NewPlaylistContainer';
import Playlist from './components/Playlist';
import LyricsContainer from './containers/LyricsContainer';
import store from './store';
import {setLyrics} from './action-creators/lyrics';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer}>
      <Route path="/albums" component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/artists" component={FilterableArtistsContainer} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="albums" component={Albums} />
        <Route path="songs" component={Songs} />
      </Route>
      <Route path="/new-playlist" component={NewPlaylistContainer} />
      <Route path="playlists/:playlistId" component={Playlist} />
      <Route path="/lyrics" component={LyricsContainer} />
      <IndexRedirect to='/albums' />
    </Route>
  </Router>,
  document.getElementById('app')
);
