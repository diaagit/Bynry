import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import ProfileList from "../components/ProfileList";
import SearchFilter from "../components/SearchFilter";

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [selectedProfileId, setSelectedProfileId] = useState(null); 

  
  useEffect(() => {
    setProfiles([
      {
        id: 1,
        name: "John Doe",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48aEGNljMTfrO4aoa8JTTKYxzrHxIBhnQUg&s",
        description: "Software Engineer at ABC Corp",
        category: "Engineering",
        address: "1600 Amphitheatre Parkway, Mountain View, CA",
        lat: 37.42216,
        lng: -122.08427,
      },
      {
        id: 2,
        name: "Jane Smith",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAPveR3iBy5hxIC8zKJvPKziHdOviOBUebg&s",
        description: "Data Scientist at XYZ Inc.",
        category: "Data Science",
        address: "1 Apple Park Way, Cupertino, CA",
        lat: 37.3349,
        lng: -122.00902,
      },
      
    ]);
  }, []);

  
  const categories = useMemo(() => [...new Set(profiles.map((p) => p.category))], [profiles]);

  
  const filteredProfiles = profiles.filter((profile) => {
    return (
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (categoryFilter === "" || profile.category?.toLowerCase() === categoryFilter.toLowerCase())
    );
  });

  return (
    <div>
      <h1>Profile Explorer</h1>

      
      <nav>
        <Link to="/admin" style={{ textDecoration: "none", fontSize: "18px", fontWeight: "bold", color: "blue" }}>
          Go to Admin Panel
        </Link>
      </nav>

      
      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        categories={categories}
      />


      <ProfileList 
        profiles={filteredProfiles} 
        selectedProfileId={selectedProfileId} 
        setSelectedProfileId={setSelectedProfileId} 
      />
    </div>
  );
};

export default Home;
