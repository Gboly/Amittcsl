"use client";

import "./sidebar.css";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { motion } from "framer-motion";

export default function SidebarLarge({ onClose }) {
  return (
    <>
      <div className="sidebar-overlay" onClick={onClose} />

      <motion.aside
        className="sidebar"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
      >
        {/* Close icon on top right */}
        <div className="sidebar-header">
          <CloseIcon className="close-icon" onClick={onClose} />
        </div>

        {/* Brand below the close icon */}
        <div className="sidebar-brand-full">
          <h1>
            <span className="brand-main">Amitt</span>{" "}
            <span className="brand-sub">
              Training and Consulting Services Limited
            </span>
          </h1>
        </div>

        <div className="sidebar-content">
          <div className="sidebar-contact">
            <EmailIcon />
            <span>contact@amittconsulting.com</span>
          </div>
          <div className="sidebar-contact">
            <PhoneIcon />
            <span>+234 801 234 5678</span>
          </div>

          <div className="sidebar-message">
            Empowering growth through knowledge, capital, and experience.
          </div>
        </div>
      </motion.aside>
    </>
  );
}
