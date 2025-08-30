import './style.scss';
import Image from './assets/file.png';
import Profile from './assets/profile.JPG';

export default function App() {
  return <div>
    <h1 className="App">This is a react app {process.env.name}</h1>
    <img src={Image} alt="Laptop picture" width="200px" />
    <img src={Profile} alt="Laptop picture" width="200px" />
  </div>
}