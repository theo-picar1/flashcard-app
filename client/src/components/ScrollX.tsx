// ***** COMPONENT FOR OVERFLOW-X SHADOWS *****

'use client'

import { useRef, useState, useEffect, ReactNode } from "react"

interface HorizontalScrollProps {
    children: ReactNode
    gap?: string
}

export default function ScrollX({ children, gap = 'gap-0' }: HorizontalScrollProps) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)

    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return // No element provided.

        const handleScroll = () => {
            setShowLeft(scrollContainer.scrollLeft > 0) // Show left if not at start
            setShowRight(scrollContainer.scrollLeft + scrollContainer.clientWidth < scrollContainer.scrollWidth) // Show right if we're not at end
        }

        handleScroll() // run on mount
        scrollContainer.addEventListener("scroll", handleScroll)
        return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="relative base-scroll-margin">
            {/* Left shadow */}
            <div className={`
                z-10 absolute left-0 top-0 h-full w-4 md:w-8 lg:w-12 pointer-events-none transition-opacity duration-300
                bg-gradient-to-r from-[rgb(245,248,251)] to-transparent
                ${showLeft ? 'opacity-100' : 'opacity-0'}
            `} />

            {/* Right shadow */}
            <div className={`
                z-10 absolute right-0 top-0 h-full w-4 md:w-8 lg:w-12 pointer-events-none transition-opacity duration-300
                bg-gradient-to-l from-[rgb(245,248,251)] to-transparent
                ${showRight ? 'opacity-100' : 'opacity-0'}
            `} />

            {/* Scroll container */}
            <div
                ref={scrollRef}
                className={`${gap} flex-row-no-gap base-padding-rule overflow-x-scroll py-4 px-1`}
                style={{ scrollbarWidth: "none" }}
            >
                {children}
            </div>
        </div>
    )
}