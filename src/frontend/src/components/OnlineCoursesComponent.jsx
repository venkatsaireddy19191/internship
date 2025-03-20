import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./offline.css"; // Importing external CSS

const OnlineCoursesComponent = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const carouselRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/addOnlineCourse")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched Offline Courses:", data);
                setCards(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // Scroll functions for left & right arrows
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const openOverview = (course) => {
        setSelectedCourse(course);
    };

    const closeOverview = () => {
        setSelectedCourse(null);
    };

    const handleSubscribe = (course) => {
        navigate("/registeronline", { state: { course } });
    };
    

    if (loading) return <p className="text-center text-lg">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="offline-courses-container">
            <h1 className="heading">Online Courses</h1>

            <div className="carousel-container">
                {/* Left Arrow */}
                <button onClick={scrollLeft} className="scroll-button left">
                    ◀
                </button>

                {/* Card Container */}
                <div ref={carouselRef} className="cards-wrapper">
                    {cards.map((card, index) => (
                        <div key={index} className="course-card">
                            <img src={card.imageUrl} alt={card.title} className="course-image" />
                            <h2 className="course-title">{card.title}</h2>
                            <div className="buttons-container">
                                <button className="overview-button" onClick={() => openOverview(card)}>Overview</button>
                                <button className="subscribe-button" onClick={() => handleSubscribe(card)}>Subscribe Now</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button onClick={scrollRight} className="scroll-button right">
                    ▶
                </button>
            </div>

            {/* Overview Popup */}
            {selectedCourse && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <span className="close-button" onClick={closeOverview}>&times;</span>
                        <h2>{selectedCourse.title}</h2>
                        <p>{selectedCourse.overview}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OnlineCoursesComponent;
