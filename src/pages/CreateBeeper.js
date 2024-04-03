import React, { useState, useCallback } from 'react'
import HeaderMenu from '../components/HeaderMenu.js';

function CreateBeeper() {
  // Creating use states for each field
  const [outputEditable, setOutputEditable] = useState(true)
  const [incidentNumber, setIncidentNumber] = useState('')
  const [incidentTitle, setIncidentTitle] = useState('')
  const [operationalImpact, setOperationalImpact] = useState('')
  const [status, setStatus] = useState('')
  const [team, setTeam] = useState('')
  const [source, setSource] = useState('')
  const [emoji, setEmoji] = useState('')

  // Initializing use state functions
  const toggleOutputEditable = () => {
    setOutputEditable(outputEditable => !outputEditable);
  };

  const editField = useCallback((event, usestatefunction, digitonly) => {
    var value = event.target.value
    if(digitonly){
      value = event.target.value.replace(/\D/g, '');
    }
    usestatefunction(value);
  }, []);

  const copyBeeper = () => {
    navigator.clipboard.writeText(document.getElementById('beeper_output').value)
    .then(() => {
      alert('Text copied to clipboard');
    })
    .catch((error) => {
      console.error('Error copying text to clipboard:', error);
    });
  }

  return (
    <div>
      {/* Adding the header */}
      <HeaderMenu/>

      {/* Creating a div to fit the page content */}
      <div className='CreatePage'>
        <div className='neumorphism message_sections'>
          <p className='header_text'>עריכת ההודעה</p>

          <div className='neumorphism edit_message_div'>
            <p className='message_edit_text'>כותרת נוספת</p>
            <select 
              className='neumorphism one_line_input_field' 
              value={source} onChange={(event) => editField(event, setSource, false)}>
                <option value="">בחר</option>
                <option value="נוטר ב-WU">נוטר ב-WU</option>
                <option value="דיווח טלפוני">דיווח טלפוני</option>
                <option value="דיווח חמ״לי">דיווח חמ״לי</option>
            </select>
          </div>

          <div className='neumorphism edit_message_div'>
            <p className='message_edit_text'>מזהה</p>
            <input 
              className='neumorphism one_line_input_field' 
              size='9' 
              onChange={(event) => editField(event, setIncidentNumber, true)}
              value={incidentNumber}
              maxLength={7}/>
            <input 
              className='neumorphism one_line_input_field' 
              readOnly='true' 
              size='1' 
              defaultValue='INC'/>
          </div>

          <div className='neumorphism edit_message_div'>
            <p className='message_edit_text'>מהות התקלה</p>
            <div className='multi_line_input_field_div'>
              <textarea 
                className='neumorphism multi_line_input_field'
                onChange={(event) => editField(event, setIncidentTitle, false)}/>
            </div>
          </div>

          <div className='neumorphism edit_message_div'>
            <p className='message_edit_text'>משמעות מבצעית</p>
            <div className='multi_line_input_field_div'>
              <textarea 
                className='neumorphism multi_line_input_field'
                onChange={(event) => editField(event, setOperationalImpact, false)}/>
            </div>
          </div>

          <div className='neumorphism edit_message_div'>
            <p className='message_edit_text'>סטטוס טיפול</p>
            <div className='multi_line_input_field_div'>
              <textarea 
                className='neumorphism multi_line_input_field'
                onChange={(event) => editField(event, setStatus, false)}/>
            </div>
          </div>

          <div className='neumorphism edit_message_div'>
            <p className='message_edit_text'>צוות מנהל</p>
            <div className='multi_line_input_field_div'>
              <textarea 
                className='neumorphism multi_line_input_field'
                onChange={(event) => editField(event, setTeam, false)}/>
            </div>
          </div>

          <div className='neumorphism edit_message_div'>
            <p className='message_edit_text'>מקור התקלה</p>
            <select 
              className='neumorphism one_line_input_field' 
              value={source} onChange={(event) => editField(event, setSource, false)}>
                <option value="">בחר</option>
                <option value="נוטר ב-WU">נוטר ב-WU</option>
                <option value="דיווח טלפוני">דיווח טלפוני</option>
                <option value="דיווח חמ״לי">דיווח חמ״לי</option>
            </select>
            <select 
              className='neumorphism one_line_input_field' 
              value={emoji} onChange={(event) => editField(event, setEmoji, false)}>
                <option value="">בחר</option>
                <option value="🔴">🔴</option>
                <option value="🟠">🟠</option>
            </select>
          </div>
        </div>

        <div className='neumorphism message_sections'>
          <p className='header_text'>פלט ההודעה</p>

          <textarea 
            id='beeper_output'
            readOnly={outputEditable} 
            className='neumorphism message_output' 
            value={`*מזהה:* INC${incidentNumber}\n\n*מהות התקלה:* ${incidentTitle}\n\n*משמעות מבצעית:* ${operationalImpact}\n\n*סטטוס טיפול:* ${status}\n\n*צוות מנהל/מטפל:* ${team}\n\n*מקור התקלה:* ${source} ${emoji}`}>
          </textarea>

          <div className='message_output_button_div'>

            <button className='neumorphism message_output_button' 
              onClick={toggleOutputEditable}>
                {outputEditable ? 'ערוך' : 'שמור'}
            </button>

            <button 
              id='copy_button'
              className='neumorphism message_output_button'
              onClick={copyBeeper}>
                העתק
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateBeeper
