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
                <div className="flex flex-row items-center gap-12">
                    <div className="flex flex-row items-center gap-4">
                        <img src="/images/menu-icon.png" className="cursor-pointer hover:brightness-90" onClick={() => setIsOpen(true)} />

                        <Link href="/">
                            <p className="text-xl font-bold">Study Application</p>
                        </Link>
                    </div>

                    <div className="hidden flex-row gap-6 items-center lg:flex">
                        <Link href="/home">
                            <p className="hover:underline">Home</p>
                        </Link>

                        <Link href="/about">
                            <p className="hover:underline">About</p>
                        </Link>

                        <Link href="/tutorial">
                            <p className="hover:underline">Tutorial</p>
                        </Link>

                        <Link href="/favourites">
                            <p className="hover:underline">Favourites</p>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-6">
                    <div className="flex flex-row items-center gap-1 hover:brightness-90">
                        <img src="/images/streaks-unactive-large-icon.png" className="w-6 filter brightness-0 invert cursor-pointer" alt="Streaks" />
                        <p className="font-medium">0</p>
                    </div>

                    <img src="/images/notifications-unread-large-icon.png" className="w-6 h-6 filter brightness-0 invert cursor-pointer hover:brightness-90" alt="Unread notifications" />

                    <div className="flex-center-item bg-green-800 rounded-full w-0 h-0 p-4 cursor-pointer hover:brightness-90">
                        <p className="text-xs">TP</p>
                    </div>
                </div>
            </header>

            {/* Slide in menu modal */}
            <SlideModal title="Menu" isOpen={isOpen} close={() => setIsOpen(false)} direction="left" modalStyle="w-80">
                <div>
                    <p className="px-4 py-2 pt-4 md-bold-text">General</p>

                    <Section href="/account" iconSrc="/images/account-icon-large.png" label="Account" onClick={() => setIsOpen(false)} />
                    <Section href="/settings" iconSrc="/images/settings-icon-large.png" label="Settings" onClick={() => setIsOpen(false)} />
                    <Section href="/logout" iconSrc="/images/logout-icon-large.png" label="Logout" textColour="text-[var(--website-red)]" onClick={() => setIsOpen(false)} />

                    <p className="px-4 py-2 mt-4 md-bold-text">Pages</p>

                    <Section href="/home" iconSrc="/images/home-icon-large.png" label="Home" onClick={() => setIsOpen(false)} />
                    <Section href="/about" iconSrc="/images/info-icon-large.png" label="About" onClick={() => setIsOpen(false)} />
                    <Section href="/favourites" iconSrc="/images/favourite-icon-large.png" label="Favourites" onClick={() => setIsOpen(false)} />
                    <Section href="/subjects" iconSrc="/images/book-icon1-large.png" label="Subjects" onClick={() => setIsOpen(false)} />
                    <Section href="/tutorial" iconSrc="/images/tutorial-icon-large.png" label="Tutorial" onClick={() => setIsOpen(false)} />
                </div>
            </SlideModal>
        </>
    )
}