import './results.css'
// const searchTitle
const Unsplash = ({ photos, word }) => {
  return (
    <>
    <h3><a href="https://unsplash.com/">Unsplash</a></h3>
    <h4>Serch results: "{word}"</h4>
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
