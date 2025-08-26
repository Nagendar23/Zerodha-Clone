import React from "react";

function Hero() {
  return (
    <section className="container-fluid" style={{backgroundColor: "#286ad4", minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}} id="supportHero">
      <div className="w-100" style={{maxWidth: '1100px', margin: '0 auto'}}>
        <div className="p-5 mb-4 shadow rounded" id="supportWrapper" style={{background: 'rgba(255,255,255,0.08)'}}>
          <h4 className="fw-bold text-white mb-2">Support Portal</h4>
          <a href="" className="text-white text-decoration-underline">Track Tickets</a>
        </div>
        <div className="row p-4 m-2 bg-white rounded shadow-sm" style={{background: 'rgba(255,255,255,0.95)'}}>
          <div className="col-12 col-md-6 p-3 d-flex flex-column justify-content-center">
            <h1 className="fs-3 mb-3 fw-bold" style={{color: '#286ad4'}}>Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder="Eg. how do I activate F&O" className="form-control mb-3" style={{maxWidth: '350px', borderRadius: '8px', border: '1px solid #286ad4'}} />
            <div className="d-flex flex-column gap-2">
              <a href="" className="text-primary">Track account opening</a>
              <a href="" className="text-primary">Track segment activation</a>
              <a href="" className="text-primary">Intraday margins</a>
              <a href="" className="text-primary">Kite user manual</a>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <h1 className="fs-3 mb-3 fw-bold" style={{color: '#286ad4'}}>Featured</h1>
            <ol className="ps-3">
              <li>
                <a href="" className="text-primary">Current Takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="" className="text-primary">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;