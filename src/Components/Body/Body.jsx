import React, {useState,useEffect} from "react";
import "./Body.css";
const Body = () => {


  return (
    <div className="body">
      <div className="Intro">
        <div className="heading">MARKETPLACE</div>
        <div className="scrollar">
          <ul className="templates">
            <li>Email Templates</li>
            <li>Email Sequences</li>
            <li>Market Species</li>
          </ul>
        </div>
        <div className="tagline">by the community, for the community.</div>
        <div className="description">100s of free templates to help you craft the perfect marketing journey</div>

      </div>
    </div>
  );
};

export default Body;
