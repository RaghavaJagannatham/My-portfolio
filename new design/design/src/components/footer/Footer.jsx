import React from "react"
import { homeData } from "../../dummyData"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='boxx'>
          <div className="lgx-footer-single">
                <h3 className="footer-title">Useful Links</h3>
                <ul className="list-unstyled">
                  <li><a className="col-grey" href="#">About</a></li>
                  <li><a className="col-grey" href="#">Events</a></li>
                  <li><a className="col-grey" href="#">Blogs</a></li>
                  <li><a className="col-grey" href="#">Terms & Conditions</a></li>
                  <li><a className="col-grey" href="#">Privacy Policy</a></li>
                  <li><a className="col-grey" href="#">Cookie Policy</a></li>
                  <li><a className="col-grey" href="#">FAQs</a></li>
                </ul>
              </div>
            
            
          </div>
          <div className="boxx">
          <div id="lgx-footer" className="lgx-footer-black flex">
              
              <div className="lgx-footer-single footer-contact ">
                <h3 className="footer-title">Contact</h3>
                <a href="#">
                  <h4 className="date">Send us a message</h4>
                </a>
                <address>Dhigna Limited, 30 Churchill place, Canary wharf, London E14 5RE United Kingdom</address>
                <p className="text"> +44 204577 1234</p>
                <p className="text"> info@dhigna.com</p>
                <a href="#" className="map-link">
                  
                  Find us on Map
                </a>
              </div>
              
            </div>
            <div className="lgx-footer-bottom">
              <div className="lgx-copyright">
                <p>
                  All Copyrights reserved by
                  <a href="#" id="map_link"> Dhigna Events   <span>©</span> </a> 2023 - V1.8<br />
                </p>
              </div>
            </div>

          </div>
          <div className='boxx'>
            
          <div className="lgx-footer-single">
                <h3 className="footer-title">Social Connections</h3>
                <p className="text">Find us on social platforms</p>
                <ul className="list-inline lgx-social-footer">
                <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-github'></i>
            <i className='fab fa-instagram'></i>
                  
                </ul>
              </div>
          </div>
          
        </div>
      </footer>
    </>
  )
}

export default Footer
