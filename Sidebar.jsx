import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "./Logo.PNG";
import DashboardIcon from "./Dashboard_2474.PNG";
import AttendanceIcon from "./Barchart_2475.PNG";
import LogoutIcon from "./Logout.PNG";

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState('dashboard');

    function toggle() {
        setOpen(o => !o);
    }

    return (
        <div className={`sidebar ${open ? 'open' : 'closed'}`}>
            <div className="logo-section">
                <div className="logo-box">
                    <img src={Logo} alt="Logo" className="logo-image" />
                </div>
                <button className="sidebar-toggle" onClick={toggle} aria-label="Toggle menu" aria-expanded={open}>
                    <span className="hamburger" aria-hidden="true">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>

            <nav className="menu" role="navigation" aria-label="Main menu">
                <button
                    className={`menu-item ${active === 'dashboard' ? 'active' : ''}`}
                    onClick={() => setActive('dashboard')}
                    aria-label="Dashboard"
                >
                    <img src={DashboardIcon} alt="" className="menu-icon-img" aria-hidden="true" />
                    <span className="menu-label">Dashboard</span>
                </button>

                <button
                    className={`menu-item ${active === 'attendance' ? 'active' : ''}`}
                    onClick={() => setActive('attendance')}
                    aria-label="Attendance List"
                >
                    <img src={AttendanceIcon} alt="" className="menu-icon-img" aria-hidden="true" />
                    <span className="menu-label">Attendance List</span>
                </button>
            </nav>

            <div className="signout">
                <button className="menu-item signout-btn" aria-label="Sign out">
                    <img src={LogoutIcon} alt="" className="menu-icon-img" aria-hidden="true" />
                    <span className="menu-label">Sign out</span>
                </button>
            </div>
        </div>
    );
}
