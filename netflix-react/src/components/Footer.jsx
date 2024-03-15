import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const MyFooter = () => {
  return (
    <footer className="py-3">
      <div class="row text-center mt-5">
        <div class="col-6 offset-3">
          <div class="row">
            <div class="col d-flex gap-2 mb-2">
              <FaFacebookSquare className="icon-footer fs-3" />
              <FaSquareInstagram className="icon-footer fs-3" />
              <IoLogoYoutube className="icon-footer fs-3" />
              <FaXTwitter className="icon-footer fs-3" />
            </div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
            <div class="col">
              <div class="row">
                <div class="col col-12 footer-links">
                  <p>
                    <button>Audio and Subtitles</button>
                  </p>
                  <p>
                    <button>Media Center</button>
                  </p>
                  <p>
                    <button>Privacy</button>
                  </p>
                  <p>
                    <button>Contact us</button>
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col col-12 footer-links">
                  <p>
                    <button>Audio Description</button>
                  </p>
                  <p>
                    <button>Investor Relations</button>
                  </p>
                  <p>
                    <button>Legal Notices</button>
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col col-12 footer-links">
                  <p>
                    <button>Help Center</button>
                  </p>
                  <p>
                    <button>Jobs</button>
                  </p>
                  <p>
                    <button>Cookie Preferences</button>
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col col-12 footer-links">
                  <p>
                    <button>Gift Cards</button>
                  </p>
                  <p>
                    <button>Terms of Use</button>
                  </p>
                  <p>
                    <button>Corporate Information</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col col-12 text-left mb-2">
              <button type="button" class="btn btn-sm service-button rounded-0 mt-3">
                Service Code
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col col-12 text-left mb-2 mt-2 copyright">© 1997-2024 Netflix, Inc.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
