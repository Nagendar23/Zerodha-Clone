import React from "react";

const Footer = () => {
  return (
    <footer  style={{backgroundColor:"rgb(240,240,240"}}>
    <div className="container border-top mt-5">
      <div className="row mt-5">
        <div className="col">
          <img
            src="media/images/logo.svg"
            style={{ width: "50%" }}
            alt="Logo"
          />
          <p>©2010-2024, Not Zerodha Broking Ltd. <br/> All rights reserved.</p>
        </div>
        <div className="col">
          <p>Company</p>
          <a href="" className="text-muted" style={{textDecoration:"none"}} >About</a><br/>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Products</a><br/>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Pricing</a><br/>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Referal programme</a><br/>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Careers</a><br/>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Zerodha.tech</a><br/>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Press & Media</a><br/>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Zerodha cares (CSR)</a><br/>
        </div>
        <div className="col">
          <p>Support</p>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Contact</a><br/>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Support Portal</a><br/>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Z-Connect blog</a><br/>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>List of charges</a><br/>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Downloads & resources</a><br/>
          <a href="" className="text-muted" style={{textDecoration:"none"}}></a><br/>
        </div>
        <div className="col">
          <p>Account</p>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Open an account</a><br/>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Fund transfer</a><br/>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>60 Day challenge</a><br/>
        </div>
      </div>
      <div className="mt-5 text-small text-muted" style={{fontSize:"14px"}}>
      <p>Zerodha Broking Ltd.: Member of NSE|& BSE - SEBI Registration no.: INZ00@031633 CDSL: ler services through Zerodha Securities Pvt. Ltd. E SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 H SEBI Registration no.: INZ0@@@38238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
      <p>Prgcedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
      <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
