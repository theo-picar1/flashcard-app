// ***** SINGLE SUBJECT COMPONENT (CONTAINS TOPICS)

'use client'

// NextJS
import Link from "next/link"
import { useParams } from "next/navigation"

// Components
import Button from "@/components/Button"
import SubjectCard from "@/components/SubjectCard"

export default function Subject() {
    const { id: title } = useParams() // Get title from URL

    return (
        <main className="base-padding-rule main-container-flex gap-6">
            <Link href="/home">
                <div className="w-max flex flex-row items-center gap-2 hover:cursor-pointer">
                    <img className="brightness-50 h-4" src="/images/back-icon.png" alt="Back to home" />
                    <p>Back to home</p>
                </div>
            </Link>

            <div className="text-center flex flex-col items-center gap-4 md:justify-between md:flex-row">
                <p className="lg-bold-text text-[var(--bold-text)]">{title}</p>

                <Button variant="white" padding="slim" className="m-auto rounded-full w-full max-w-xs md:w-auto md:m-0">
                    <img src="/images/add-icon.png" alt="Add" className="brightness-50" />
                    <p>Add topic</p>
                </Button>
            </div>

            <Button padding="slim" variant="white" className="w-max">
                <p>Sort by</p>
                <img className="w-5 brightness-50" src="/images/dropdown-arrow-icon.png" alt="Dropdown button" />
            </Button>

            {/* Subjects section */}
            <section className="flex flex-col items-center gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <SubjectCard width="w-full max-w-md" title="Rivers" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="red"></SubjectCard>

                <SubjectCard width="w-full max-w-md" title="Brazil" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="blue"></SubjectCard>

                <SubjectCard width="w-full max-w-md" title="Biodiversity" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="green"></SubjectCard>

                <SubjectCard width="w-full max-w-md" title="Rocks" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="purple"></SubjectCard>

                <SubjectCard width="w-full max-w-md" title="The Amazon Rainforest" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="yellow"></SubjectCard>
            </section>
        </main>
    )
}