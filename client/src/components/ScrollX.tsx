"use client"

// ***** COMPONENT FOR OVERFLOW-X SHADOWS *****

import { useRef, useState, useEffect, ReactNode } from "react"

interface HorizontalScrollProps {
    children: ReactNode
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        const handleScroll = () => {
            setShowLeft(el.scrollLeft > 0)
            setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth)
        }

        handleScroll() // run on mount
        el.addEventListener("scroll", handleScroll)
        return () => el.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="relative w-screen">
            {/* Left shadow */}
            <div className={`
                z-10 absolute left-0 top-0 h-full w-16 pointer-events-none transition-opacity duration-300
                bg-gradient-to-r from-[rgb(245,248,251)] to-transparent
                ${showLeft ? 'opacity-100' : 'opacity-0'}
            `} />

            {/* Right shadow */}
            <div className={`
                z-10 absolute right-0 top-0 h-full w-16 pointer-events-none transition-opacity duration-300
                bg-gradient-to-l from-[rgb(245,248,251)] to-transparent
                ${showRight ? 'opacity-100' : 'opacity-0'}
            `} />

            <div
                ref={scrollRef}
                className="flex-row-no-gap gap-4 base-padding-rule items-start overflow-x-scroll py-4 px-1"
                style={{ scrollbarWidth: "none" }}
            >
                {children}
            </div>
        </div>
    )
}