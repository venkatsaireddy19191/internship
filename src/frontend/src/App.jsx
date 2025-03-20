import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import { StoreProvider } from './context/Store';
import Personalized from './components/Personalized';
import "./App.css";

import Popup from './components/Popup';
import Courses from './components/Courses';
import About from './components/About';
import OfflineCoursesComponent from './components/OfflineCoursesComponent';
import OnlineCoursesComponent from './components/OnlineCoursesComponent';
import OnlineCourseRegistration from './components/OnlineCourseRegistration';
import Booking from './components/Booking';
import Book from './components/Book'
import DailyDose from './components/DailyDose.jsx';
import Blog from './components/Blogs.jsx'
import BlogDetails from './components/BlogDetails.jsx';





function App() {
    
    const navigate = useNavigate();
    const location = useLocation();

    // Automatically scroll to the corresponding component when the route changes
    useEffect(() => {
        if (location.pathname === "/registeronline") {
            document.getElementById("online-course-registration")?.scrollIntoView({ behavior: "smooth" });
        } 
    }, [location]);

    useEffect(() => {
        navigate('/');
    }, []);

    return (
        <StoreProvider>
            <Navbar />
           
            

            {/* Define Routes */}
            <Routes>
                <Route path="/" element={
                    <>
                    
                   
                     <Popup />
                     <Banner />
                     <Personalized />
                     <Booking />
                     <Blog />
                    </>
                    }/>
                <Route path="/registeronline" element={<div id="online-course-registration"><OnlineCourseRegistration /></div>} />
              
                <Route path="/blog" element={<BlogDetails />} />
            </Routes>
            <OnlineCoursesComponent />
            <OfflineCoursesComponent />

            <About />

            <Book/>
            <DailyDose />
            
        
           
          
            
           
        </StoreProvider>
    );
}

export default App;
