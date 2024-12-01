import React from "react";
import "../styles.css";

export default function UserProfile({ user }) {
  return (
    <div className="flex-column">
      {user.map((item) => (
        <div className="userCard flex-column">
        <div>
          <h3>{item.personalInformation.rank} {item.personalInformation.lastName}, {item.personalInformation.firstName}</h3>
          <p class="p-bold">4 PPLCI</p>
        </div>
        <p class="p-bold">Readiness completion</p>
        <progress value="0.25"></progress>
      </div>     
      ))}
    </div>
  );
}
