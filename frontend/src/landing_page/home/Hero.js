import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
      <div className='row align-items-center'>
        <div className='col-7 text-center'>
          <img 
            src='media/images/homeHero.png' 
            alt='Home Hero' 
            className='mb-4' 
            style={{width: "100%"}} // fills the column
          />
          <h1 className='mt-4'>Invest in everything</h1>
          <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
          <button 
            className='btn btn-primary fs-5 mt-3' 
            style={{width:"50%"}}
          >
            Signup Now
          </button>
        </div>
        <div className='col-5 text-center'>
          {/* Right side content if needed */}
        </div>
      </div>
    </div>
  )
}

export default Hero
