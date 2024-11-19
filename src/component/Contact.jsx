import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function ContactUs() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Contact Info Section */}
        <div
          className="col-md-6 p-4"
          style={{ backgroundColor: "#f7f8fa", borderRadius: "8px" }}
        >
          <h2 className="mb-3" style={{ color: "#00bfa6" }}>
            Let's get in touch
          </h2>
          <p>
            If you have any questions you can contact me on these social
            networks
          </p>

          <div className="mb-3">
            <FaMapMarkerAlt className="me-2" style={{ color: "#00bfa6" }} />
            St 271, Sangkat Tuek Thla, Khan Sen Sok, Phnom Penh, Cambodia
          </div>
          <div className="mb-3">
            <FaEnvelope className="me-2" style={{ color: "#00bfa6" }} />
            lachsokheng.dev@gmail.com
          </div>
          <div className="mb-3">
            <FaPhone className="me-2" style={{ color: "#00bfa6" }} />
            096 250 2770
          </div>

          <h5 className="mt-4">Connect with us:</h5>
          <div>
            <a
              href="https://www.facebook.com/lach.sokheng.3?mibextid=ZbWKwL"
              className="me-2"
            >
              <FaFacebookF style={{ color: "#00bfa6", fontSize: "1.5em" }} />
            </a>
            <a
              href="https://x.com/lach_sokhe63173?t=vZI85u9ZuXciaBocAxJHNA&s=09"
              className="me-2"
            >
              <FaTwitter style={{ color: "#00bfa6", fontSize: "1.5em" }} />
            </a>
            <a href="https://www.instagram.com/sokhenglach/" className="me-2">
              <FaInstagram style={{ color: "#00bfa6", fontSize: "1.5em" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/sokheng-lach-623b65262/"
              className="me-2"
            >
              <FaLinkedinIn style={{ color: "#00bfa6", fontSize: "1.5em" }} />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div
          className="col-md-6 p-4"
          style={{
            backgroundColor: "#00bfa6",
            borderRadius: "8px",
            color: "#ffffff",
          }}
        >
          <h2>Contact us</h2>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                style={{
                  borderRadius: "20px",
                  border: "none",
                  padding: "10px",
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                style={{
                  borderRadius: "20px",
                  border: "none",
                  padding: "10px",
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                style={{
                  borderRadius: "20px",
                  border: "none",
                  padding: "10px",
                }}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Message"
                rows="4"
                style={{
                  borderRadius: "20px",
                  border: "none",
                  padding: "10px",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-light"
              style={{ borderRadius: "20px", padding: "10px 20px" }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
