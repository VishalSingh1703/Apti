// src/Components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaUserCircle } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <nav style={{ ...styles.nav, backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#333' }}>
            <div style={styles.logo}>
                <img src="/path/to/logo.png" alt="Logo" style={styles.logoImg} />
            </div>
            <div style={styles.rightIcons}>
                <button onClick={toggleDarkMode} style={styles.darkModeButton}>
                    {darkMode ? <FaSun color="#FFD700" /> : <FaMoon color="#4B0082" />}
                </button>
                <Link to="/profile" style={styles.profileIcon}>
                    <FaUserCircle color={darkMode ? '#fff' : '#333'} size={30} />
                </Link>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid #ddd',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    logoImg: {
        height: '40px',
        width: 'auto',
    },
    rightIcons: {
        display: 'flex',
        alignItems: 'center',
    },
    darkModeButton: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '10px',
        fontSize: '20px',
    },
    profileIcon: {
        marginLeft: '15px',
        textDecoration: 'none',
    },
};

export default Navbar;
