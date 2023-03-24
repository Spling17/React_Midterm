import { useEffect, useState } from 'react'
import axios from 'axios'
import Title from './components/Title'
import Form from './components/Form'
import Unsplash from './components/Unsplash'
import './App.css'
import Pixabay from './components/Pixabay'
import { API_KEY } from './config'

function App() {
  const [word, setWord] = useState('japan')
  const [unsplashPhoto, setUnsplashPhoto] = useState([])

  const [pixabayPhoto, setPicxabayPhoto] = useState([])

  const getPhotoData = (url) => {
    axios.get(url).then((res) => {
      const { data } = res
      console.log(data)

      if (url.includes('pixabay')) {
        // console.log(data.hits)
        setPicxabayPhoto(data.hits)
      } else {
        // console.log(data.results)
        setUnsplashPhoto(data.results)
      }
    })
  }

  useEffect(() => {
    const unsplash = `https://api.unsplash.com/search/photos?query=${word}&client_id=${API_KEY.UNSPLASH_API_KEY}`
    // const unsplash = `https://api.unsplash.com/search/photos?query=${word}&client_id=9MU_DF444HgY09y3q0_4s612ZuqKFnOrSw8qwdUHiR0`
    const pixabay = `https://pixabay.com/api/?key=${API_KEY.PIXABAY_API_KEY}&q=${word}&image_type=photo`
    // const pixabay = `https://pixabay.com/api/?key=34663583-2e578596a6138cc6169c05c22&q=${word}&image_type=photo`
    getPhotoData(unsplash)
    getPhotoData(pixabay)
  }, [word])

  return (
    <div className="container">
      <Title />
      <Form setWord={setWord} getPhotoData={getPhotoData} />

      <div className="container">
        {unsplashPhoto && <Unsplash photos={unsplashPhoto} />}
        {pixabayPhoto && <Pixabay photos={pixabayPhoto} />}
      </div>
    </div>
  )
}

export default App

// import {useRef, useState} from "react";
// import './App.css';
// import ImageGarallery from './Components/ImageGarallery';

// function App() {
//   const [fetchData, setFetchData] = useState([]);
//   const ref = useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(ref.current.value);

//     //API URL
//     const endpointURL = `https://pixabay.com/api/?key=34663583-2e578596a6138cc6169c05c22&q=${ref.current.value}&image_type=photo`;

//     //fetch
//     fetch(endpointURL).then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.hits);
//       setFetchData(data.hits);
//     })
//   };

//   return (
//     <div className="container">
//       <h2>MY Pixabay</h2>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <input type="text" placeholder="Serch" ref={ref}/>
//       </form>
//       <ImageGarallery fetchData={fetchData}/>
//     </div>
//   );
// }

// export default App;
