  import React from 'react'

  const Universe = () => {
    return (
      <div className="container mt-5">
        <div className="row text-center justify-content-center">
          <h1 className="mb-3 fw-bold" style={{width: '100%'}}>The Zerodha Universe</h1>
          <p className="mb-4" style={{width: '100%'}}>Extend your trading and investment experience even further with our partner platforms.</p>

          <div className="col-6 col-md-4 p-3 mt-4 d-flex flex-column align-items-center">
            <img src='media/images/smallcaseLogo.png' className='img-fluid mb-2' style={{maxHeight: '48px'}} alt='Smallcase Logo'/>
            <p className='text-small text-muted'>Thematic investment platform</p>
          </div>

          <div className="col-6 col-md-4 p-3 mt-4 d-flex flex-column align-items-center">
            <img src='media/images/streakLogo.png' className='img-fluid mb-2' style={{maxHeight: '48px'}} alt='Streak Logo'/>
            <p className='text-small text-muted'>Algo & strategy platform</p>
          </div>

          <div className="col-6 col-md-4 p-3 mt-4 d-flex flex-column align-items-center">
            <img src='media/images/sensibullLogo.svg' className='img-fluid mb-2' style={{maxHeight: '48px'}} alt='Sensibull Logo'/>
            <p className='text-small text-muted'>Options trading platform</p>
          </div>

          <div className="col-6 col-md-4 p-3 mt-4 d-flex flex-column align-items-center">
            <img src='media/images/zerodhaFundhouse.png' className='img-fluid mb-2' style={{maxHeight: '48px'}} alt='Zerodha Fundhouse Logo'/>
            <p className='text-small text-muted'>Asset management</p>
          </div>

          <div className="col-6 col-md-4 p-3 mt-4 d-flex flex-column align-items-center">
            <img src='media/images/goldenpiLogo.png' className='img-fluid mb-2' style={{maxHeight: '48px'}} alt='GoldenPi Logo'/>
            <p className='text-small text-muted'>Bonds trading platform</p>
          </div>

          <div className="col-6 col-md-4 p-3 mt-4 d-flex flex-column align-items-center">
            <img src='media/images/dittoLogo.png' className='img-fluid mb-2' style={{maxHeight: '48px'}} alt='Ditto Logo'/>
            <p className='text-small text-muted'>Insurance</p>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button 
              className='btn btn-primary fs-5 mt-4' 
              style={{width:"50%", maxWidth: '220px'}}
            >
              Signup Now
            </button>
          </div>
        </div>
      </div>
    )
  }

  export default Universe