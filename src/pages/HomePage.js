import logo from '../assets/beeper_logo.png';
import '../style.css';
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p className='header_text'>
        סוג ההודעה
      </p>
      <div className='message_type_button_div' dir='rtl'>
        <Link to="/CreateBeeper">
          <button className='neumorphism message_type_button'> ביפר </button>
        </Link>
        <button className='neumorphism message_type_button'>הודעת צהריים/ערב </button>
        <button className='neumorphism message_type_button'>הודעת בוקר/ערב</button>
        <button className='neumorphism message_type_button'>הודעת מפקד</button>
      </div>
    </div>
  );
}

export default HomePage;
