import React from "react";

const Footer = (props) => {

    return (
        <footer className="container-fluid bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-3 d-flex">
                        <h5 className="text-light p-2 m-1">Contact:</h5>
                        <ul className="footer-link">
                            <li><a className="text-light text-decoration-none" href="https://github.com/DSnod93" target="_blank" rel="noreferrer">Github</a></li>
                            <li><a className="text-light text-decoration-none" href="www.linkedin.com/in/douglassnoddy" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-light footer-copyright">
                <div className=" container">
                    © 2021 Douglas Snoddy
                </div>
            </div>
        </footer>
    )
}

export default Footer;