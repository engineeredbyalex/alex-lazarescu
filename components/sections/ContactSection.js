import React from 'react'
import Page from '../layout/Page'

function ContactSection() {
  return (
      <Page>
          <div className="page_container">
              <div style={{height:'auto',width:'100%', display:'flex',flexDirection:'column',gap:'0rem',justifyContent:'center',alignItems:'center'}}>
                  <h1 className='contact_button fill'>LinkedIn</h1>
                  <h1 className='contact_button fill'>Email</h1>
                  <h1 className='contact_button fill'>Instagram</h1>
             </div>
          </div>
      </Page>
  )
}

export default ContactSection