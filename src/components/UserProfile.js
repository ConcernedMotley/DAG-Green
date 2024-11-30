import React from "react";
import "../styles.css";

export default function UserProfile({ user }) {
  return (
    <div className="flex-column">
      {user.map((item) => (
        <div className="userCard flex-column">
          <div>
            <h3>{item.personalInformation.lastName}</h3>
            <p class="p-bold">4 PPLCI</p>
          </div>
          <p class="p-bold">Readiness: Yellow</p>
        </div>
      ))}
    </div>
  );
}
