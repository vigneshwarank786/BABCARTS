import { Link } from "react-router-dom";

export  default function Footer (){
    return (
             <footer className="footers">
              <div className="container-fluid">
                <div className="row justify-content-center"> 
                  <div className="col-lg-3 col-md-6 col-sm-6 p-5">
                    <div className="text-center"> 
                      <img src="/images/logo.png" alt="about bab sindh white logo dubai uae" className="img-fluid footer-images" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <h3 className="footerheads">QUICK LINKS</h3>
                    <ul className="footer-linkss navbar-nav">
                    <li className="nav-item">
    <Link className="nav-links" to="/">Home</Link>
  </li>
  {/* <li className="nav-item">
    <Link className="nav-links" to="/product">Products</Link>
  </li> */}
  <li className="nav-item">
    <Link className="nav-links" to="/about">About</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-links" to="/contact">Contact</Link>
  </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <h3 className="footerheads">GET IN TOUCH</h3>
                    <ul className="footer-conlinks"> 
                      <li ><a className="fa fa-phone"  href="tel:+971 502084514">&nbsp;+971 502084514</a></li>
                      <li ><a className="fa fa-phone"  href="tel:+971 543182072">&nbsp;+971 543182072</a></li>
          
                      <li ><a className="fa fa-envelope" href="mailto:mac@babsindh.com">&nbsp;mac@babsindh.com</a></li>
                      <li>
                      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
  <i className="fa fa-facebook fa-lg"></i>
</a>
<a href="https://twitter.com/" target="_blank" rel="noreferrer">
  <i className="fa fa-twitter fa-lg"></i>
</a>
<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
  <i className="fa fa-linkedin fa-lg"></i>
</a>

                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <h3 className="footerheads">LOCATE US</h3>
                    <div id="map" className="text-center">
                    <iframe
                    title='googlemaps'
  src="https://www.google.com/maps?q=25.256668,55.331799&output=embed"
  width="100%"
  height="100%"
  frameBorder="0"
  style={{ border: '0' }}
  allowFullScreen
  loading="lazy"
></iframe>

                    </div>
                    
                  </div>
                </div>
              </div>
            </footer>
    )
}
