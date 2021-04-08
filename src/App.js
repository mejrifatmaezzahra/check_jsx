import logo from './logo.svg';
import './App.css';
import imageInSource from "./img.jpg"


function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:'100vw'}}>

<h1 className="title red">Mejri Fatma Ezzahra</h1>

<img src={imageInSource} width={1000} height={400}/>


<img src="/imageInPublic.jpg" width={1000} height={400} />

</div>

<video width={320} height={240} controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>


    </div>
  );
}

export default App;
