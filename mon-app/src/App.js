// import logo from './logo.svg';
import './App.css';
import azerty from "./image/azerty.jpg"
import wxcvb from "./image/wxcvb.jpg"
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

         <h1 class="title red">Your name here</h1>

        <br />

         <img src={azerty} />

         <br/>

        <img src={wxcvb} />

      </div>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/kKNNGs_7r_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    </div>
  );
}

export default App;
