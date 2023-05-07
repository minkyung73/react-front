import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaDribbble } from "react-icons/fa";


const SplashFooter = () => {
    return (
        <footer className="footer-area splash-footer">
            <div className="container">
                <div className="footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                        <div className="footer-copyright">
                            <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://axilthemes.com/">독수리</a>.</span>
                        </div>
                        </div>
                        <div className="col-lg-2">
                        <ul className="footer-social list-unstyled">
                            <li><a href="https://github.com/EFoF">
                                {/*<FaFacebookF />*/}
                                <img src={process.env.PUBLIC_URL + "/images/icon/github.jpeg"} alt="Line" />
                            </a></li>
                            <li><a href="https://light-need-553.notion.site/a2ece78f2f7a4947bde61f88b28b68d3">
                                {/*<FaDribbble />*/}
                                <img src={process.env.PUBLIC_URL + "/images/icon/notion.jpeg"} alt="Line" />
                            </a></li>
                        </ul>
                        </div>
                        <div className="col-lg-5">
                        <div className="footer-bottom-link">
                            <ul className="list-unstyled">
                                <li><a href="https://efof.github.io/KEA_TeamIntro/">독수리 오형제 홈페이지</a></li>
                                <li><Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default SplashFooter;