import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/header/Header';
import Address from './component/profile/Address';
import FullName from './component/profile/FullName';
import myImage from "./component/profile/profilphoto/Photo.jpg"

function App() {
  return (
    <div>   
     <div>
    <Header/>
    <img src={myImage} alt="my"style={{margin:"50px" }}/>
    <FullName />
    <Address/>
        </div>
    </div>
  );
}

export default App;
