import React from "react";
import { useLocation } from "react-router-dom";
import './OnlineCourseRegistration.css'





const OnlineCourseRegistration = () => {
    const location = useLocation();
    const course = location.state?.course || {};

    return (
        <>
           <h2>Booking-Section:</h2>
           
       <div className="form">
            <div className="registration-form">
                <h2>Register for {course.title}</h2>
                <h3>Price:{course.price}</h3>
                
               
                <label>Coupon Code:</label>
                <input type="text" placeholder="Apply Coupon" />
                
                <button className="buy-button">Buy Now</button>
            </div>
            </div>
        </>
    );
};

export default OnlineCourseRegistration;
