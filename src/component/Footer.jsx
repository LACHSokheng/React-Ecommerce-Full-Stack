import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-light text-muted">
      <div className="container p-4">
        <section className="mb-4 text-center">
          <span>Get connected with us on social networks:</span>
          <div className="mt-3">
            <a
              href="https://www.facebook.com/lach.sokheng.3?mibextid=ZbWKwL"
              className="btn btn-link btn-floating btn-sm text-dark me-2"
              role="button"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://x.com/lach_sokhe63173?t=vZI85u9ZuXciaBocAxJHNA&s=09"
              className="btn btn-link btn-floating btn-sm text-dark me-2"
              role="button"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.google.com/"
              className="btn btn-link btn-floating btn-sm text-dark me-2"
              role="button"
              aria-label="Google"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              href="https://www.instagram.com/sokhenglach/"
              className="btn btn-link btn-floating btn-sm text-dark me-2"
              role="button"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sokheng-lach-623b65262/"
              className="btn btn-link btn-floating btn-sm text-dark me-2"
              role="button"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/LACHSokheng"
              className="btn btn-link btn-floating btn-sm text-dark"
              role="button"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <div className="row text-center text-md-start">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-2"></i>Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#" className="text-reset">
                Clothes Men
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Clothes Women
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Computer
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Jewelery
              </a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Help
              </a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-2"></i> St 271, Sangkat Tuek Thla,
              Khan Sen Sok, Phnom Penh, Cambodia
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i> lachsokheng.dev@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-2"></i> + 096 250 2770
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
