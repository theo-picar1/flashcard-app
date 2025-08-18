"use client"
// ***** HOME PAGE (HOLDS ALL USER'S CREATED SUBJECTS) *****

// Components
import SubjectCard from "@/components/SubjectCard"
import Button from "@/components/Button"
import ScrollX from "@/components/ScrollX"

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
                <p className="text-center lg:text-left xl-bold-text text-[var(--bold-text)]">Welcome back!</p>
                <p className="text-center lg:text-left text-xl mt-2">Start studying and master your subjects, flashcards and exams!</p>               
            </div>

            {/* Review needed */}
            <section>
                <p className="lg-bold-text text-[var(--bold-text)]">Review needed</p>

                <ScrollX gap="gap-8">
                    <SubjectCard className="flex-shrink-0" title="English" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="red"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="Science" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="blue"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="French" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="green"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="Music" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="purple"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="Maths" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="yellow"></SubjectCard>
                </ScrollX>
            </section>


            {/* Your subjects */}
            <section>
                <div className="flex flex-row items-center justify-between">
                    <p className="lg-bold-text text-[var(--bold-text)]">Subjects</p>
                    <Link href="/subjects">
                        <Button padding="slim" variant="white" className="rounded-full" textColour="text-[var(--website-blue)]">View all</Button>
                    </Link>
                </div>

                <ScrollX gap="gap-8">
                    <SubjectCard className="flex-shrink-0" title="English" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="red"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="French" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="green"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="Maths" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="yellow"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="Music" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="purple"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="Science" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="blue"></SubjectCard>
                </ScrollX>
            </section>

            {/* Favourites */}
            <section>
                <div className="flex flex-row items-center justify-between">
                    <p className="lg-bold-text text-[var(--bold-text)]">Favourites</p>
                    <Link href="/favourites">
                        <Button padding="slim" variant="white" className="rounded-full" textColour="text-[var(--website-blue)]">View all</Button>
                    </Link>
                </div>

                <ScrollX gap="gap-8">
                    <SubjectCard className="flex-shrink-0" title="English" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="red"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="French" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="green"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="Music" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="purple"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="Science" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="blue"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="Maths" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="yellow"></SubjectCard>
                </ScrollX>
            </section>

            {/* Recently Accessed */}
            <section>
                <p className="lg-bold-text text-[var(--bold-text)]">Recent</p>

                <ScrollX gap="gap-8">
                    <SubjectCard className="flex-shrink-0" title="English" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="red"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="Science" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="blue"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="French" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="green"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="Maths" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="yellow"></SubjectCard>

                    <SubjectCard className="flex-shrink-0" title="Music" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="purple"></SubjectCard>
                </ScrollX>
            </section>

            <p className="text-center text-xl">You have reached the end. No more content to see!</p>
        </main>
    )
}