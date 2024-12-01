import React from "react";
import "../styles.css";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
import users from "../userprofiles";

function Home() {
  return (
     <div className="padding-16">
      <Navbar />
      <div className="flex-box">
        <UserProfile user={users} />
      </div>
    </div>
  );
}

export default Home;
