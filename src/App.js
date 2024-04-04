
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/Navbar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {actions,originals} from './Url'



function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
      <RowPost title={"Netflix Originals" } url={originals} />
      <RowPost title={"Action"} isSmall url={actions} />
        
    </div>
  );
}

export default App;
