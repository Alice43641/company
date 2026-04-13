import React from 'react'
import './Contact.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <h1 className="contact-title">Contact Us</h1>
      {/* LEFT SIDE */}
      <div className='contact-col'>
        <h3>
          Send us a message <FaPaperPlane className='title-icon' />
        </h3>

        <p>
          Feel free to reach out through the contact form or use the contact
          details below. Your feedback and inquiries are important to us.
        </p>

        <ul>
          <li>
            <FaEnvelope className='contact-icon' />
            mulengaalice002@gmail.com
          </li>

          <li>
            <FaPhone className='contact-icon' />
            +260 767153829
          </li>

          <li>
            <FaMapMarkerAlt className='contact-icon' />
            Lusaka, Zambia
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className='contact-col2'>
        <form>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required />

          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile' required />

          <label>Message</label>
          <textarea
            name='message'
            rows='6'
            placeholder='Enter your message'
            required
          ></textarea>

          <button type='submit' className='btn dark-btn'>
            Send <FaPaperPlane />
          </button>
        </form>

        <span></span>
      </div>
    </div>
  )
}

export default Contact