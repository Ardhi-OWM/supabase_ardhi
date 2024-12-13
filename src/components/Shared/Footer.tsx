import React from 'react'
import { ThemeSwitcher } from "@/components/Shared/theme-switcher";

const Footer = () => {
    return (
        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-2">
            <p>
                {new Date().getFullYear()}, Powered by{" "}
                <a
                    href="https://ardhi.de/"
                    target="_blank"
                    className="font-sm hover:underline text-green-500"
                    rel="noreferrer"
                >
                    &copy; Ardhi
                </a>
            </p>
            <ThemeSwitcher />
        </footer>
    )
}

export default Footer
