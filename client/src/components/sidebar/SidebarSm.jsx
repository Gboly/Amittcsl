"use client";

import "./sidebar.css";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SidebarMobile({ onClose }) {
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
        <div className="sidebar-header">
          <CloseIcon className="close-icon" onClick={onClose} />
        </div>

        <ul className="sidebar-nav">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </motion.aside>
    </>
  );
}
