import logo from '../assets/beeper_logo.png';
import '../style.css';
import { Link } from "react-router-dom";

function HomePage() {
  const soon = () => {
    alert('בקרוב...')
  }
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p className='header_text'>סוג ההודעה</p>
      <div className='message_type_button_div' dir='rtl'>
        <Link to="/CreateBeeper">
          <button className='neumorphism message_type_button'> ביפר </button>
        </Link>
        <button className='neumorphism message_type_button' onClick={soon}>הודעת צהריים/ערב </button>
        <button className='neumorphism message_type_button' onClick={soon}>הודעת בוקר/ערב</button>
        <button className='neumorphism message_type_button' onClick={soon}>הודעת מפקד</button>
      </div>
    </div>
  );
}

export default HomePage;
