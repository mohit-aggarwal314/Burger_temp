import React from "react";
import footerimage from "../images/Logo-black.png";
import locationimage from "../images/location.png";
import mailimage from "../images/email.png";

function Banner() {
  return (
    <div className="banner">
      <div className="footer-left">
        <div className="logo1">
          <img src={footerimage} alt="" />
        </div>
        <div className="pera">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
        <div className="copyright">
          <p>© Company Name 2020. All rights reserved.</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="address">
          <div className="address-loc">
          <img src={locationimage} alt="" />
            <p>Main Road, Building Name, Country</p>
          </div>
          <div className="address-mail">
          <img src={mailimage} alt="" />
            <p>info@companyname.com</p>
          </div>
        </div>
        <div className="socialicon">
          <ul>
            <li>
              <a href="https://www.instagram.com/raqib_apurba/" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Raqib.Apurba/" target="_blank">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Raqib_Apurba" target="_blank">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://web.whatsapp.com/" target="_blank">
                <i className="fa fa-whatsapp" aria-hidden="true" />
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner;
