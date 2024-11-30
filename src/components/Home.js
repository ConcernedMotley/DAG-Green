import React from "react";
import "../styles.css";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";

function Home() {
  return (
    <div className="padding-16">
      <Navbar />
      <div className="flex-box">
        <UserProfile />
      </div>
    </div>
  );
}

export default Home;
