// ***** MAIN LAYOUT HEADER *****

'use client'

// Components
import SlideModal from "./SlideModal"
import Section from "./Section"
import PopUpModal from "./PopUpModal"
import UserProfileIcon from "./UserProfileIcon"

// React
import { useState } from "react"

// Next.js
import Link from "next/link"

export default function Header() {
    // State variables
    const [slideModalIsOpen, setSlideModalIsOpen] = useState(false)
    const [popUpIsOpen, setIsPopUpOpen] = useState(false)

    return (
        <>
            {/* Header */}
            <header
                className="flex-row-between p-4 bg-[var(--website-blue)] w-full text-[var(--accent-text)] base-padding-rule"
            >
                <div className="flex flex-row items-center gap-12">
                    <div className="flex flex-row items-center gap-4">
                        <img
                            src="/images/menu-icon.png"
                            className="cursor-pointer hover:brightness-90"
                            onClick={() => setSlideModalIsOpen(true)}
                        />

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
                        <img
                            src="/images/streaks-unactive-large-icon.png"
                            className="w-6 filter brightness-0 invert cursor-pointer"
                            alt="Streaks"
                        />
                        <p className="font-medium">0</p>
                    </div>

                    <img
                        src="/images/notifications-unread-large-icon.png"
                        className="w-6 h-6 filter brightness-0 invert cursor-pointer hover:brightness-90"
                        alt="Unread notifications"
                    />

                    <div className="relative flex flex-col items-end gap-6">
                        <UserProfileIcon
                            padding="p-4"
                            onClick={() => setIsPopUpOpen(true)}
                            className="cursor-pointer hover:shadow-lg"
                        >
                        </UserProfileIcon>

                        {/* Pop up modal */}
                        <PopUpModal
                            isOpen={popUpIsOpen}
                            close={() => setIsPopUpOpen(false)}
                            className="bg-white right-0 top-10 rounded-md w-auto flex flex-col items-center"
                        >
                            <UserProfileIcon padding="p-6" textSize="text-base" className="mt-4"></UserProfileIcon>

                            <div className="my-2">
                                <Section 
                                    href="/" 
                                    label="Edit profile"
                                    textStyle="text-sm text-[var(--regular-text)]"
                                    iconSrc="/images/edit-icon.png"
                                    iconStyle="brightness-40 w-5"
                                />

                                <Section 
                                    href="/" 
                                    label="Logout"
                                    textStyle="text-sm text-[var(--website-red)]"
                                    iconSrc="/images/logout-icon-large.png"
                                    iconStyle="w-5"
                                />
                            </div>
                        </PopUpModal>
                    </div>
                </div>
            </header>

            {/* Slide in menu modal */}
            <SlideModal
                title="Menu"
                isOpen={slideModalIsOpen}
                close={() => setSlideModalIsOpen(false)}
                direction="left"
                modalStyle="w-80"
            >
                <div>
                    <p className="px-4 py-2 pt-4 md-bold-text">General</p>

                    <Section
                        iconStyle="base-icon-size"
                        href="/account"
                        iconSrc="/images/account-icon-large.png"
                        label="Account"
                        onClick={() => setSlideModalIsOpen(false)}
                    />

                    <Section
                        iconStyle="base-icon-size"
                        href="/settings"
                        iconSrc="/images/settings-icon-large.png"
                        label="Settings"
                        onClick={() => setSlideModalIsOpen(false)}
                    />

                    <Section
                        iconStyle="base-icon-size"
                        href="/logout"
                        iconSrc="/images/logout-icon-large.png"
                        label="Logout"
                        textStyle="text-[var(--website-red)]"
                        onClick={() => setSlideModalIsOpen(false)}
                    />

                    <p className="px-4 py-2 mt-4 md-bold-text">Pages</p>

                    <Section
                        iconStyle="base-icon-size"
                        href="/home"
                        iconSrc="/images/home-icon-large.png"
                        label="Home"
                        onClick={() => setSlideModalIsOpen(false)}
                    />

                    <Section
                        iconStyle="base-icon-size"
                        href="/about"
                        iconSrc="/images/info-icon-large.png"
                        label="About"
                        onClick={() => setSlideModalIsOpen(false)}
                    />

                    <Section
                        iconStyle="base-icon-size"
                        href="/favourites"
                        iconSrc="/images/favourite-icon-large.png"
                        label="Favourites"
                        onClick={() => setSlideModalIsOpen(false)}
                    />

                    <Section
                        iconStyle="base-icon-size"
                        href="/subjects"
                        iconSrc="/images/book-icon1-large.png"
                        label="Subjects"
                        onClick={() => setSlideModalIsOpen(false)}
                    />

                    <Section
                        iconStyle="base-icon-size"
                        href="/tutorial"
                        iconSrc="/images/tutorial-icon-large.png"
                        label="Tutorial"
                        onClick={() => setSlideModalIsOpen(false)}
                    />
                </div>
            </SlideModal>
        </>
    )
}