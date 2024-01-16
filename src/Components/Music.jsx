import React from 'react'

const Music = () => {
  // returns the iframe for the spotify music
  return (
    <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/6eN7LDEdKAEjQGALT3Xj7m?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className='musicPlayer'></iframe>
  )
}

export default Music;