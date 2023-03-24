// import React from 'react'
import './results.css'

const Pixabay = ({ photos, word }) => {
  return (
    <>
    <h3><a href="https://pixabay.com/">Pixabay</a></h3>
    <h4>Serch results: "{word}"</h4>
    <div className="photo-list pixabay">
      {photos.map((photo) => (
        <div className="image" key={photo.id}>
          <a href={photo.largeImageURL}>
            <img src={photo.largeImageURL} alt="" />
          </a>
        </div>
      ))}
    </div>
    </>
  )
}

export default Pixabay
