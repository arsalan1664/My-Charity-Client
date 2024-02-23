import React from "react";
import { Button, Card } from "antd";
import DonationCard from "./DonationCard";
import "./css/Home.css";
import "./css/Media.css";
import "./css/DonationCard.css";

function Home() {
  return (
    <div className="container">
      <div className="charity-header">
        <h3 className="logo">Charity</h3>
      </div>
      <div className="background-image">
        <h1 className="heading">We can’t do it alone without your support</h1>
        <p>
          Help us to eradicate poverty around the world and save the million of
          lives from unwanted demises.
          <br /> Millions of innocent lives we lost every year for
          malnutritions.
        </p>
        <Button className="donate-btn">
          <a href="#donate-section">Donate Now</a>
        </Button>
      </div>
      <div className="info-section">
        <h3 className="info-text">
          Let’s build the better world together without starving children, pain
          and death.
        </h3>
      </div>
      <div className="card-section" id="donate-section">
        <div className="card-content">
          <div className="card-text">
            <div>
              <h2 className="mission-heading">Our Misson</h2>
              <p>
                Three countries in Africa need your help the most, and we are
                dedicated to building a charity app for children. We believe in
                making a meaningful impact by providing essential support and
                resources to those in need.
              </p>
            </div>
          </div>
          <div>
            <p>
              We are proud to have already made a difference by saving over
              3,400 children in Africa so far. Our commitment to creating
              positive change is unwavering, and with your support through our
              charity app, we aim to continue reaching more children and
              transforming their lives for the better.
            </p>
          </div>
        </div>
        <div className="card">
          <DonationCard />
        </div>
      </div>
      <div className="volunteers-section">
        <h2 className="volunteers-text">
          Thank you for your kindness dear volunteers
        </h2>
      </div>
    </div>
  );
}

export default Home;
