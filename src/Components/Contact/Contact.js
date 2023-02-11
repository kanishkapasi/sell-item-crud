import React from 'react'
import { Link } from 'react-router-dom'

import './Contact.css';

function Contact() {
  return (
    <div className='contactContainer'>
      <div className="listOne">
        <h2>BY PHONE</h2>
        <p>Monday to Friday</p>
        <p>Srilanka,Colombo</p>
        <p>011-2233444</p>
        <h3>Head Quater</h3>
        <p>033-5566777</p>
      </div>
      <div className="listTwo">
        <h2>START NEWCASE</h2>
        <p>Jsut send us your question or concerns by starting a new case and we will give you the help you need</p>
          <Link to={'/'}>
            <button>
              START HERE
            </button>
          </Link>
      </div>
      <div className="listThree">
        <h2>LIVE CHAT</h2>
        <p>Chat with a member of our team</p>
          <Link to={'/Chat'}>
            <button>
              START
            </button>
          </Link>
      </div>
    </div>
  )
}

export default Contact
