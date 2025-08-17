"use client"

import HorizontalScroll from "@/components/ScrollX"
// ***** HOME PAGE (HOLDS ALL USER'S CREATED SUBJECTS) *****

// Components
import SubjectCard from "@/components/SubjectCard"

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
                <p className="text-center md:text-left lg-bold-text text-[var(--bold-text)]">Welcome back!</p>

                <p className="text-center md:text-left text-xl mt-2">Start studying and master your subjects, flashcards and exams!</p>
            </div>

            {/* Review needed */}
            <section>
                <p className="lg-bold-text text-[var(--bold-text)]">Review needed</p>

                <HorizontalScroll gap="gap-8">
                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="red"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="blue"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="green"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="purple"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="orange"></SubjectCard>
                </HorizontalScroll>
            </section>


            {/* Your subjects */}
            <section>
                <p className="lg-bold-text text-[var(--bold-text)]">Subjects</p>

                <HorizontalScroll gap="gap-8">
                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="red"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="green"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="orange"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="purple"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="blue"></SubjectCard>
                </HorizontalScroll>
            </section>

            {/* Favourites */}
            <section>
                <p className="lg-bold-text text-[var(--bold-text)]">Favourites</p>

                <HorizontalScroll gap="gap-8">
                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="red"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="green"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="purple"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="blue"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="orange"></SubjectCard>
                </HorizontalScroll>
            </section>

            {/* Recently Accessed */}
            <section>
                <p className="lg-bold-text text-[var(--bold-text)]">Recent</p>

                <HorizontalScroll gap="gap-8">
                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="red"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="blue"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="green"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="orange"></SubjectCard>

                    <SubjectCard title="Subject name" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="purple"></SubjectCard>
                </HorizontalScroll>
            </section>
        </main>
    )
}