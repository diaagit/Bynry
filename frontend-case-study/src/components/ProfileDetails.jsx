import React from "react";
import { useParams } from "react-router-dom";

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) {
    return <h2>Profile not found</h2>;
  }

  return (
    <div>
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} width="150" />
      <p><strong>Description:</strong> {profile.description}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Coordinates:</strong> {profile.lat}, {profile.lng}</p>
    </div>
  );
};

export default ProfileDetails;
