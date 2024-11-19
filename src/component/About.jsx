// AboutUs.js
import React from "react";
import "../styles/About.css";

const AboutUs = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6">
          <img
            src="https://th.bing.com/th/id/OIP.psSMoAQ6J_FZwnkvEFAExQHaLH?rs=1&pid=ImgDetMain" // Replace with your image URL
            alt="About Us"
            className="img-fluid rounded"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="roboto-regular">About Us</h2>
          <h3>Welcome to Smile Shopping</h3>
          <p>
            At <b>Smile Shopping</b>, we believe that shopping should be more
            than just a transaction; it should be an experience. Founded in 2024
            by Lach sokheng, our journey began in a small St 271, Sangkat Tuek
            Thla, Khan Sen Sok, Phnom Penh, Cambodia with a simple mission: to
            provide high-quality Clothes,Jewelery Electronic that make life
            easier and more enjoyable.
          </p>
          <h3>Meet the Team</h3>
          <p>
            Behind every product is a dedicated team passionate about what they
            do. From our skilled artisans to our customer service
            representatives, we work together to ensure you have the best
            shopping experience possible. Get to know us better through our team
            photos below!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
