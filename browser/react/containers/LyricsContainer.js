import React from 'react';
import store from '../store.js';
import Lyrics from '../components/Lyrics';
import {setLyrics, fetchLyrics} from '../action-creators/lyrics';
import axios from 'axios';


export default class LyricsContainer extends React.Component{
  constructor(){
    super()
    this.state = Object.assign(
      {artistQuery: '',
       songQuery: ''
      },
      store.getState()
    )

    this.setArtist = this.setArtist.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
      this.setState(store.getState());
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  setArtist(artist){
    this.setState({artistQuery: artist});
  }

  setSong(song){
    this.setState({songQuery: song});
  }

  handleSubmit(){
    if (this.state.artistQuery && this.state.songQuery) {
    store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
  }

        // axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
    //   .then((lyric)=>{return setLyrics(lyric.data.lyric)})
    //   .then((lyricActionObject)=>{
    //     // console.log('lyricActionObject:',lyricActionObject)
    //     store.dispatch(lyricActionObject)
    //   })
      // .catch(console.error("There was an error in this ajax request"))
      // why did we see error if this ajax call works???
  }

  render (){
    return(
      <div>
        <Lyrics
          lyrics={this.state.lyrics}
          setArtist={this.setArtist}
          artistQuery={this.state.artistQuery}
          setSong={this.setSong}
          songQuery={this.state.songQuery}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
