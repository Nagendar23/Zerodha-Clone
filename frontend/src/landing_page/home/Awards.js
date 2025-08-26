import React from 'react'

const Awards = () => {
  return (
    <div className='container my-5 '>
      <div className='row align-items-center'>
        <div className='col-6 text-center'>
          <img 
            src='media/images/largestBroker.svg' 
            style={{maxWidth: "80%"}}
            alt='Largest Broker'
          />
        </div>
        <div className='col-6'>
          <h1>Largest stock broker in India</h1>
          <p className='mb-4'>
            2+ million Zerodha clients contribute to over 50% of all retail order volumes in India daily by trading and investing in:
          </p>
          <div className='row'>
            <div className='col-6'>
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
          </div>
          <div className='text-center'>
            <img 
              src='media/images/pressLogos.png' 
              style={{width:"70%", marginTop:"2rem"}} 
              alt='Press Logos'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards
