import React from 'react'
import './contactus.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Contactus() {
  return (
  <div class="contact-us">
  <button><a class="nav-link" href="/home">Generate</a></button>
  <div class="row">
    <div class="col-md-8">
      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div class="app-contact">CONTACT INFO : 9999999999</div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input id="name" class="app-form-control" placeholder="NAME" value="Feel free to share"/>
                  </div>
                  <div class="app-form-group">
                    <input id="email" class="app-form-control" placeholder="EMAIL"/>
                  </div>
                  <div class="app-form-group">
                    <input id="contactNo" class="app-form-control" placeholder="CONTACT NO"/>
                  </div>
                  <div class="app-form-group message">
                    <input id="message" class="app-form-control" placeholder="MESSAGE"/>
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button">SEND</button>
                    <button class="app-form-button" >CANCEL</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
        <div class="contactpad">
            <h3>Postal Address</h3>
            <p/>
                7th floor
                Smart works <br/>
                Olympia National towers
                Chennai
                India <br/>
                Pin Code - 600078
        
            <h3>Email</h3>
            <p><strong>Office:</strong>offgen&#64;gmail.com</p>
            <p><strong>Personal:</strong>offgenpers&#64;gmail.com</p>
            <h3>Phone:</h3>
            <p><strong>Office:</strong>+91 9999999999</p>
        </div>
 
    </div>
  </div>
</div>
  )
}

export default Contactus