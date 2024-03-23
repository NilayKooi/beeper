import logo from './beeper_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        בחרו את סוג ההודעה
      </p>
      <div dir='rtl'>
        <button className='message_type_button'>
          ביפר
        </button>
        <button className='message_type_button'>
          הודעת מפקד
        </button>
        <button className='message_type_button'>
          הודעת בוקר/ערב
        </button>
        <button className='message_type_button'>
          הודעת צהריים/ערב
        </button>
      </div>
    </div>
  );
}

export default App;
