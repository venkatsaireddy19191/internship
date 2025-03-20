import React, { useState } from 'react';
import { useStore } from '../context/Store';
import './Courses.css'; // Import the CSS file

function Courses() {
    const { menuItems } = useStore();
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <div className="courses-container">
            <div className="nav-scroll">
                {Object.keys(menuItems).map((menu) => (
                    <button
                        key={menu}
                        className={`nav-item ${selectedMenu === menu ? 'active' : ''}`}
                        onClick={() => handleMenuClick(menu)}
                    >
                        {menu}
                    </button>
                ))}
            </div>

            <div className="cards-container">
                {selectedMenu && menuItems[selectedMenu].map((subItem, index) => (
                    <div key={index} className="card">
                        <h3 className="card-title">{subItem}</h3>
                        <p className="card-subtitle">Batches Available</p>
                        <button className="explore-btn" onClick={() => window.location.href = `/explore/${subItem}`}>
                            Explore
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;