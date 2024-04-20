'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-[999]", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>

            <MenuItem setActive={setActive} active={active} item="Social-Media">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="https://www.youtube.com/@EchoInbyte">YouTube</HoveredLink>
                <HoveredLink href="https://www.instagram.com/echoinbyte/">Instagram</HoveredLink>
                <HoveredLink href="https://twitter.com/EchoInbyte">X</HoveredLink>
                <HoveredLink href="https://www.linkedin.com/in/sambhav-aryal-7871232b7/">Linked in</HoveredLink>
                <HoveredLink href="https://github.com/Echoinbyte">GitHub</HoveredLink>
            </div>
            </MenuItem>


            <MenuItem setActive={setActive} active={active} item="Menu">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/courses">Courses</HoveredLink>
                <HoveredLink href="/webinars">Webinars</HoveredLink>
                <HoveredLink href="/social">Social Media</HoveredLink>
                <HoveredLink href="/contact">Contact Us</HoveredLink>
            </div>
            </MenuItem>
        </Menu>
    </div>
  )
}

export default Navbar