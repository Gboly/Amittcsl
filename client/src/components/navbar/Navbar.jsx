"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";
import SidebarLarge from "../sidebar/SidebarLg";
import SidebarMobile from "../sidebar/SidebarSm";

export default function Navbar() {
  const [activeSidebar, setActiveSidebar] = useState(null);

  const handleMenuClick = () => {
    const isMobile = window.innerWidth < 768;
    setActiveSidebar(isMobile ? "mobile" : "large");
  };

  const closeSidebar = () => setActiveSidebar(null);

  return (
    <>
      <nav className="navbar">
        {/* Left: Logo */}
        <div className="nav-left">
          <Link href="/">
            <Image src="/amitt-logo.png" alt="Logo" width={40} height={40} />
          </Link>
        </div>

        {/* Middle: Links */}
        <ul className="nav-links">
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
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>

        {/* Right: Menu icon */}
        <div className="nav-right">
          <MenuIcon onClick={handleMenuClick} fontSize="medium" />
        </div>
      </nav>

      {activeSidebar === "mobile" && <SidebarMobile onClose={closeSidebar} />}
      {activeSidebar === "large" && <SidebarLarge onClose={closeSidebar} />}
    </>
  );
}
