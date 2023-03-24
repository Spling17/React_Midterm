// import React from 'react'
import './results.css'

const Pixabay = ({ photos }) => {
  return (
    <div className="photo-list pixabay">
      {photos.map((photo) => (
        <div className="image" key={photo.id}>
          <a href={photo.largeImageURL}>
            <img src={photo.largeImageURL} alt="" />
          </a>
        </div>
      ))}
    </div>
  )
}

export default Pixabay
