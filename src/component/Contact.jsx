import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h1>BOOK YOUR TABLE</h1>
        <form>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Email' />
            <input type='text' placeholder='Date' />
            <input type='text' placeholder='Time' />
            <input type='text' placeholder='People' />
            <button className='productbox-button'>FIND A TABLE</button>
        </form>
    </div>
  )
}

export default Contact