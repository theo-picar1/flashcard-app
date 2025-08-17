// ***** MAIN LAYOUT HEADER *****

'use client'

// Components
import SlideModal from "./SlideModal"

// React
import { useState } from "react"

// Next.js
import Link from "next/link"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className="flex-row-between p-4 bg-[var(--website-blue)] w-full text-[var(--accent-text)] base-padding-rule">

                <div className="flex-row-no-gap gap-2">
                    <img src="/images/menu-icon.png" className="cursor-pointer hover:brightness-90" onClick={() => setIsOpen(true)} />

                    <p className="text-xl font-bold">Study Application</p>
                </div>

                <div className="flex-center-item bg-green-800 rounded-full w-0 h-0 p-5">
                    <p>TP</p>
                </div>
            </header>

            <SlideModal title="Menu" isOpen={isOpen} close={() => setIsOpen(false)} direction="left" modalStyle="w-80">
                <div>
                    <p className="px-4 py-2 pt-4 md-bold-text">General</p>

                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <div className="flex-row-no-gap  gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <img src="/images/account-icon-large.png" alt="Account" className="base-icon-size" />
                            <p>Account</p>
                        </div>
                    </Link>

                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <div className="flex-row-no-gap  gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <img src="/images/settings-icon-large.png" alt="Settings" className="base-icon-size" />
                            <p>Settings</p>
                        </div>
                    </Link>

                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <div className="flex-row-no-gap  gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <img src="/images/logout-icon-large.png" alt="Sign out" className="base-icon-size" />
                            <p className="text-[var(--website-red)]">Sign out</p>
                        </div>
                    </Link>

                    <p className="px-4 py-2 mt-4 md-bold-text">Pages</p>

                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <div className="flex-row-no-gap  gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <img className="base-icon-size" src="/images/home-icon-large.png" alt="Home" />         
                            <p>Home</p>
                        </div>
                    </Link>

                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <div className="flex-row-no-gap  gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <img className="base-icon-size" src="/images/info-icon-large.png" alt="About" />
                            <p>About</p>
                        </div>
                    </Link>

                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <div className="flex-row-no-gap  gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <img className="base-icon-size" src="/images/favourite-icon-large.png" alt="Favourites" />
                            <p>Favourites</p>
                        </div>
                    </Link>

                    <Link href="/home" onClick={() => setIsOpen(false)}>
                        <div className="flex-row-no-gap  gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <img className="base-icon-size" src="/images/book-icon1-large.png" alt="Subject" />
                            <p>Subjects</p>
                        </div>
                    </Link>

                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <div className="flex-row-no-gap  gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <img className="base-icon-size" src="/images/tutorial-icon-large.png" alt="Tutorial" />
                            <p>Tutorial</p>
                        </div>
                    </Link>
                </div>
            </SlideModal>
        </>
    )
}