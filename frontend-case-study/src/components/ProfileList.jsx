import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileList = ({ profiles, selectedProfileId, setSelectedProfileId }) => {
  return (
    <div>
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} selectedProfileId={selectedProfileId} setSelectedProfileId={setSelectedProfileId} />
      ))}
    </div>
  );
};

export default ProfileList;
