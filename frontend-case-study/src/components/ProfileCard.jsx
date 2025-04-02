import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";

const ProfileCard = ({ profile, selectedProfileId, setSelectedProfileId }) => {
  const isMapVisible = selectedProfileId === profile.id; 

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img src={profile.photo} alt={profile.name} width="100" />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <Link to={`/profile/${profile.id}`}>
        <button>View Details</button>
      </Link>
      <button onClick={() => setSelectedProfileId(isMapVisible ? null : profile.id)}>
        {isMapVisible ? "Hide Map" : "Show on Map"}
      </button>

      {isMapVisible && <MapComponent profile={profile} />}
    </div>
  );
};

export default ProfileCard;
