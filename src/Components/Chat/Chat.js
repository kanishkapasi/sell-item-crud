import React from 'react'
import { Link } from 'react-router-dom'
import './Chat.css'

function Chat() {
  return (
    <div className='chatContainer'>
      <h1>Sorry for the inconvenience . We are currently building this page. we will provide this facility to you soon.Thank You!</h1>
        <Link to={'/'}>
          <button>
            BACK
          </button>
        </Link>
    </div>
  )
}

export default Chat
