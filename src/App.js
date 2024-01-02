// import logo from './logo.svg';
import './App.css';
import Footer from './globals/footer.jsx';
import Header from './globals/header.jsx';
import LandingPage from './scenes/LandingPage.jsx';
import MobilePage from './scenes/MobilePage.jsx';

function App() {
  return (
    <div className="App">
      
      <Header/>
      {/* <MobilePage/>   */}
      <LandingPage/>
   
      <Footer/>
      
    </div>
  );
}

export default App;
