import './results.css'
// const searchTitle
const Unsplash = ({ photos }) => {
  return (
    <>
      <h3>Result</h3>
      <div className="photo-list unsplash">
        {photos.map((photo) => (
          <div className="image" key={photo.id}>
            <a href={photo.links.html}>
              <img src={photo.urls.regular} alt={photo.alt_description} />
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default Unsplash
