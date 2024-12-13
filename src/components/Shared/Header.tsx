import React from 'react';
import Link from "next/link";
import Image from "next/image";

import Profile from './profile/Profile';
import { ThemeSwitcher } from "@/components/Shared/theme-switcher";
import NavBar from './Navigation/NavBar';

const Header: React.FC = () => {
    return (
        <header className=" w-full fixed top-0 left-0 z-100 shadow-lg border-b border-gray-500/[.25] ">
            <div className="flex items-center flex-row justify-between mx-4">
                <div>
                    <Link href="/">
                        <Image
                            src="/logo/logo.png"
                            width={100}
                            height={100}
                            alt="Ardhi logo"
                            priority
                            className="w-24 sm:w-30 md:w-40 aspect-auto pt-2"
                        />
                    </Link>
                </div>
                <NavBar />
                <div className="flex flex-row ">
                    <ThemeSwitcher />
                    <Profile />
                </div>
            </div>
        </header>
    );
};

export default Header;