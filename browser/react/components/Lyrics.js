import React from 'react';


const Lyrics = (props) => {
  const {lyrics, setArtist, artistQuery, setSong, songQuery, handleSubmit} = props;

  const artistChange = e => {
    setArtist(e.target.value);
  };

  const songChange = e => {
    setSong(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='form-group'
      style={{marginTop: '20px'}}>
      <input
        onChange={artistChange}
        value={artistQuery}
        className='form-control'
        placeholder="Enter artist name"
      />
      <input
        onChange={songChange}
        value={songQuery}
        className='form-control'
        placeholder="Enter song name"
      />
      <pre>{lyrics.lyrics}</pre>
      <button>Submit</button>
    </form>
  )
}

export default Lyrics;
