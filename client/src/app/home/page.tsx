"use client"

import HorizontalScroll from "@/components/ScrollX"
// ***** HOME PAGE (HOLDS ALL USER'S CREATED SUBJECTS) *****

// Components
import SubjectCard from "@/components/SubjectCard"
import Button from "@/components/Button"

// Next.js
import Link from "next/link"

// React 
import { useRef, useState, useEffect } from "react"

export default function Home() {
    // Scroll inner box shadow logic
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
        <main className="base-padding-rule main-container-flex gap-10">
            <div>
                <div className="w-full flex flex-col items-center lg:flex-row lg:items-start gap-4 lg:justify-between">
                    <div>
                        <p className="text-center lg:text-left lg-bold-text text-[var(--bold-text)]">Welcome back!</p>
                        <p className="text-center lg:text-left text-xl mt-2">Start studying and master your subjects, flashcards and exams!</p>
                    </div>

                    <Button variant="green" padding="slim" className="m-auto rounded w-full max-w-xs lg:w-auto lg:m-0">
                        <img src="/images/add-icon.png" alt="Add" className="brightness-90" />
                        <p>Add subject</p>
                    </Button>
                </div>
            </div>

            {/* Review needed */}
            <section>
                <p className="lg-bold-text text-[var(--bold-text)]">Review needed</p>

                <HorizontalScroll gap="gap-8">
                    <SubjectCard title="English" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="red"></SubjectCard>

                    <SubjectCard title="Science" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="blue"></SubjectCard>

                    <SubjectCard title="French" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="green"></SubjectCard>

                    <SubjectCard title="Music" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="purple"></SubjectCard>

                    <SubjectCard title="Maths" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="yellow"></SubjectCard>
                </HorizontalScroll>
            </section>


            {/* Your subjects */}
            <section>
                <div className="flex flex-row items-center justify-between">
                    <p className="lg-bold-text text-[var(--bold-text)]">Subjects</p>
                    <Link href="/">
                        <Button padding="slim" variant="white" className="rounded-full" textColour="text-[var(--website-blue)]">View all</Button>
                    </Link>
                </div>

                <HorizontalScroll gap="gap-8">
                    <SubjectCard title="English" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="red"></SubjectCard>

                    <SubjectCard title="French" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="green"></SubjectCard>

                    <SubjectCard title="Maths" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="yellow"></SubjectCard>

                    <SubjectCard title="Music" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="purple"></SubjectCard>

                    <SubjectCard title="Science" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="blue"></SubjectCard>
                </HorizontalScroll>
            </section>

            {/* Favourites */}
            <section>
                <div className="flex flex-row items-center justify-between">
                    <p className="lg-bold-text text-[var(--bold-text)]">Favourites</p>
                    <Link href="/">
                        <Button padding="slim" variant="white" className="rounded-full" textColour="text-[var(--website-blue)]">View all</Button>
                    </Link>
                </div>

                <HorizontalScroll gap="gap-8">
                    <SubjectCard title="English" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="red"></SubjectCard>

                    <SubjectCard title="French" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="green"></SubjectCard>

                    <SubjectCard title="Music" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="purple"></SubjectCard>

                    <SubjectCard title="Science" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="blue"></SubjectCard>

                    <SubjectCard title="Maths" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="yellow"></SubjectCard>
                </HorizontalScroll>
            </section>

            {/* Recently Accessed */}
            <section>
                <p className="lg-bold-text text-[var(--bold-text)]">Recent</p>

                <HorizontalScroll gap="gap-8">
                    <SubjectCard title="English" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="red"></SubjectCard>

                    <SubjectCard title="Science" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="blue"></SubjectCard>

                    <SubjectCard title="French" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="green"></SubjectCard>

                    <SubjectCard title="Maths" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="yellow"></SubjectCard>

                    <SubjectCard title="Music" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="purple"></SubjectCard>
                </HorizontalScroll>
            </section>

            <p className="text-center text-xl">You have reached the end. No more content to see!</p>
        </main>
    )
}