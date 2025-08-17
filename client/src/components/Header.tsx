// ***** MAIN LAYOUT HEADER *****

'use client'

// Components
import SlideModal from "./SlideModal"
import Section from "./Section"

// React
import { useState } from "react"

// Next.js
import Link from "next/link"

export default function Header() {
    // State variables
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Header */}
            <header className="flex-row-between p-4 bg-[var(--website-blue)] w-full text-[var(--accent-text)] base-padding-rule">
                <div className="flex-row-no-gap gap-2">
                    <img src="/images/menu-icon.png" className="cursor-pointer hover:brightness-90" onClick={() => setIsOpen(true)} />
                    <Link href="/">
                        <p className="text-xl font-bold">Study Application</p>
                    </Link>
                </div>

                <div className="flex-center-item bg-green-800 rounded-full w-0 h-0 p-5">
                    <p>TP</p>
                </div>
            </header>

            {/* Slide in menu modal */}
            <SlideModal title="Menu" isOpen={isOpen} close={() => setIsOpen(false)} direction="left" modalStyle="w-80">
                <div>
                    <p className="px-4 py-2 pt-4 md-bold-text">General</p>

                    <Section href="/" iconSrc="/images/account-icon-large.png" label="Account" onClick={() => setIsOpen(false)} />
                    <Section href="/" iconSrc="/images/settings-icon-large.png" label="Settings" onClick={() => setIsOpen(false)} />
                    <Section href="/" iconSrc="/images/logout-icon-large.png" label="Sign out" textColour="text-[var(--website-red)]" onClick={() => setIsOpen(false)} />

                    <p className="px-4 py-2 mt-4 md-bold-text">Pages</p>

                    <Section href="/home" iconSrc="/images/home-icon-large.png" label="Home" onClick={() => setIsOpen(false)} />
                    <Section href="/" iconSrc="/images/info-icon-large.png" label="About" onClick={() => setIsOpen(false)} />
                    <Section href="/" iconSrc="/images/favourite-icon-large.png" label="Favourites" onClick={() => setIsOpen(false)} />
                    <Section href="/" iconSrc="/images/book-icon1-large.png" label="Subjects" onClick={() => setIsOpen(false)} />
                    <Section href="/" iconSrc="/images/tutorial-icon-large.png" label="Tutorial" onClick={() => setIsOpen(false)} />
                </div>
            </SlideModal>
        </>
    )
}