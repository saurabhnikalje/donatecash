import Header from './Components/Header';
import Maintext from './Components/maintext';
import Cards from './Components/Cards';
import img1 from './images/img1.svg'
import img2 from './images/img2.svg'
import img3 from './images/img3.svg'
import img4 from './images/img4.svg'
import {Container } from 'reactstrap';
function App() {
  return (
    <div>
      <Header />
      <Maintext />
      <Container>
      <Cards image = {img1} cardname = "Support" Text = "We provide Food, Clothes and Shelter for the Vulnerables" />
      <Cards image = {img2} cardname = "Team Up" Text = "It's time for showing Unity towards needy ones." />
      <Cards image = {img3} cardname = "Helping Hands" Text = "Little Support can make huge difference." />
      <Cards image = {img4} cardname = "Change Future" Text = "Join us and make the change that we want to see in the world." />
      </Container>
    </div>
    
  );
}

export default App;
