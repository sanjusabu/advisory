import React from "react";

import { BackTop } from "antd";
import { Link } from "react-router-dom";
function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          {/* <i className="fas fa-bolt"></i> */}
          <Link to="/">TheManishSharma</Link>
        </div>
        <ul className="socials">
          <li>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mani724a@gmail.com">
              <i class="far fa-envelope"></i>
            </a>
          </li>
          {/* <li>
            <a href="https://www.twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
          </li> */}
          {/* <li>
            <a href="https://www.linkedin.com/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li> */}
          {/* <li>
            <a href="https://www.pinterest.com/">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li> */}
          <li>
            <a href="https://instagram.com/themanishsharmaaa?igshid=NTdlMDg3MTY=">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="copyright">Copyright &copy; 2022 TheManishSharma</div>
        <BackTop>
          <div className="goTop">
            <i className="fas fa-arrow-circle-up"></i>
          </div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;
