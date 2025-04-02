import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProfileDetails from "./components/ProfileDetails";
import AdminPanel from "./components/AdminPanel";

const App = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    if (storedProfiles.length > 0) {
      setProfiles(storedProfiles);
    } else {
      const initialProfiles = [
        {
          id: 1,
          name: "John Doe",
          photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48aEGNljMTfrO4aoa8JTTKYxzrHxIBhnQUg&s",
          description: "Software Engineer at ABC Corp",
          address: "1600 Amphitheatre Parkway, Mountain View, CA",
          lat: 37.42216,
          lng: -122.08427,
        },
        {
          id: 2,
          name: "Jane Smith",
          photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAPveR3iBy5hxIC8zKJvPKziHdOviOBUebg&s",
          description: "Data Scientist at XYZ Inc.",
          address: "1 Apple Park Way, Cupertino, CA",
          lat: 37.3349,
          lng: -122.00902,
        },
        
      ];
      setProfiles(initialProfiles);
      localStorage.setItem("profiles", JSON.stringify(initialProfiles));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home profiles={profiles} />} />
        <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
        <Route path="/admin" element={<AdminPanel profiles={profiles} setProfiles={setProfiles} />} />
      </Routes>
    </Router>
  );
};

export default App;
