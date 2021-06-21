import React from "react";

function Footer (props) {

    return (
        <footer className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">External Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/DSnod93" target="_blank" rel="noreferrer">Github</a></li>
                  <li><a className="grey-text text-lighten-3" href="www.linkedin.com/in/douglassnoddy" target="_blank" rel="noreferrer">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="black footer-copyright">
            <div className=" container">
            © 2021 Douglas Snoddy
            </div>
          </div>
        </footer>
    )
}

export default Footer;