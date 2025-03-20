import React, { useState } from "react";
import { useStore } from "../context/Store";
import { FaChevronDown, FaQuestionCircle, FaUser, FaBars } from "react-icons/fa";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
    const [isTestSeriesDropdownOpen, setIsTestSeriesDropdownOpen] = useState(false);
    const [isDailyStudyDropdownOpen, setIsDailyStudyDropdownOpen] = useState(false);
    const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
    const [selectedSub, setSelectedSub] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { menuItems, dailyStudyItems, menuItemsList } = useStore();

    const handleTestSeriesDropdownClick = () => {
        setIsTestSeriesDropdownOpen(!isTestSeriesDropdownOpen);
        setIsDailyStudyDropdownOpen(false);
        setIsMenuDropdownOpen(false);
        setSelectedSub(null);
    };

    const handleDailyStudyDropdownClick = () => {
        setIsDailyStudyDropdownOpen(!isDailyStudyDropdownOpen);
        setIsTestSeriesDropdownOpen(false);
        setIsMenuDropdownOpen(false);
        setSelectedSub(null);
    };

    const handleMenuDropdownClick = () => {
        setIsMenuDropdownOpen(!isMenuDropdownOpen);
        setIsTestSeriesDropdownOpen(false);
        setIsDailyStudyDropdownOpen(false);
        setSelectedSub(null);
    };

    const handleSubDropdownClick = (mainCategory, event) => {
        event.stopPropagation();
        setSelectedSub(selectedSub === mainCategory ? null : mainCategory);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img
                    src="https://www.thedhronas.com/_next/image?url=%2Fnext_images%2Flogo.png&w=256&q=75"
                    alt="logo"
                />
            </div>

            {/* Hamburger Menu Icon for Mobile */}
            <div className="hamburger-menu" onClick={toggleMobileMenu}>
                <FaBars className="icon" />
            </div>

            {/* Regular Menu */}
            <div className={`menu ${isMobileMenuOpen ? "active" : ""}`}>
                {/* Test Series Dropdown */}
                <div className="dropdown" onClick={handleTestSeriesDropdownClick}>
                    <span className="dropdown-title">
                        Test Series <FaChevronDown className="dropdown-icon" />
                    </span>

                    {isTestSeriesDropdownOpen && (
                        <ul className="dropdown-menu">
                            {Object.keys(menuItems).map((mainCategory, index) => (
                                <li
                                    key={index}
                                    onClick={(event) => {
                                        if (mainCategory !== "Hssc") {
                                            handleSubDropdownClick(mainCategory, event);
                                        }
                                    }}
                                    className={`dropdown-item ${mainCategory === "Hssc" ? "hssc-item" : ""}`}
                                >
                                    {mainCategory === "Hssc" ? (
                                        <a href="#" className="hssc-link">
                                            {mainCategory}
                                        </a>
                                    ) : (
                                        <>
                                            {mainCategory} {menuItems[mainCategory].length > 0 && <FaChevronDown className="sub-dropdown-icon" />}
                                        </>
                                    )}

                                    {selectedSub === mainCategory && menuItems[mainCategory].length > 0 && (
                                        <ul className="sub-dropdown">
                                            {menuItems[mainCategory].map((subItem, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className="sub-item"
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        console.log(`Navigating to: ${subItem}`);
                                                    }}
                                                >
                                                    <a href="#">{subItem}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Daily Study Dropdown */}
                <div className="dropdown" onClick={handleDailyStudyDropdownClick}>
                    <span className="dropdown-title">
                        Daily Study <FaChevronDown className="dropdown-icon" />
                    </span>

                    {isDailyStudyDropdownOpen && (
                        <ul className="dropdown-menu">
                            {dailyStudyItems.map((item, index) => (
                                <li key={index} className="dropdown-item">
                                    <a href="#">{item}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Menu Dropdown */}
                <div className="dropdown" onClick={handleMenuDropdownClick}>
                    <span className="dropdown-title">
                        Menu <FaChevronDown className="dropdown-icon" />
                    </span>

                    {isMenuDropdownOpen && (
                        <ul className="dropdown-menu">
                            {menuItemsList.map((item, index) => (
                                <li key={index} className="dropdown-item">
                                    <a href="#">{item}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Question Answers Button */}
                <div className="question-answers">
                    <button onClick={() => window.location.href = "#"}>
                        <FaQuestionCircle className="icon" /> Question Answers
                    </button>
                </div>

                {/* Google Play Image */}
                <div className="google-play">
                    <a href="#">
                        <img
                            src="https://www.thedhronas.com/_next/image?url=%2Fnext_images%2Fsocial-media%2Fplaystore_icon.png&w=640&q=75"
                            alt="Google Play"
                        />
                    </a>
                </div>
            </div>

            {/* Login/Register Button */}
            <div className="login-register">
                <button onClick={() => window.location.href = "#"}>
                    <FaUser className="icon" /> Login/Register
                </button>
            </div>
        </nav>
    );
};

export default Navbar;