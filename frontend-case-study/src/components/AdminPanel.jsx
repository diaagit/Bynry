import React, { useState } from "react";
import "../styles/AdminPanel.css"; // Import the new CSS file

const AdminPanel = ({ profiles, setProfiles }) => {
  const [newProfile, setNewProfile] = useState({ name: "", description: "", category: "", address: "" });
  const [editingId, setEditingId] = useState(null); // Track the profile being edited

  const handleAddProfile = () => {
    if (!newProfile.name || !newProfile.description) {
      alert("Name and description are required!");
      return;
    }

    if (editingId !== null) {
      // Update existing profile
      setProfiles(profiles.map((profile) =>
        profile.id === editingId ? { ...newProfile, id: editingId } : profile
      ));
      setEditingId(null);
    } else {
      // Add new profile
      setProfiles([...profiles, { ...newProfile, id: Date.now() }]);
    }

    setNewProfile({ name: "", description: "", category: "", address: "" });
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  const handleEditProfile = (profile) => {
    setNewProfile(profile);
    setEditingId(profile.id);
  };

  return (
    <div className="admin-container">
      <h2 className="admin-header">Admin Panel - Manage Profiles</h2>

      <div className="admin-form">
        <input className="admin-input" type="text" placeholder="Name" value={newProfile.name} onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })} />
        <input className="admin-input" type="text" placeholder="Description" value={newProfile.description} onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })} />
        <input className="admin-input" type="text" placeholder="Category" value={newProfile.category} onChange={(e) => setNewProfile({ ...newProfile, category: e.target.value })} />
        <input className="admin-input" type="text" placeholder="Address" value={newProfile.address} onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })} />

        <button className={`admin-button ${editingId !== null ? "edit-button" : "add-button"}`} onClick={handleAddProfile}>
          {editingId !== null ? "Save Changes" : "Add Profile"}
        </button>
      </div>

      <div className="profile-list">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-item">
            <img src={profile.photo} alt={profile.name} />
            <div className="profile-info">
              <p><strong>{profile.name}</strong></p>
              <p>{profile.description}</p>
            </div>
            <div className="profile-actions">
              <button className="admin-button edit-button" onClick={() => handleEditProfile(profile)}>Edit</button>
              <button className="admin-button delete-button" onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
