// ***** BASE SUBJECT CARD COMPONENT (ALSO USED FOR TOPIC CARD) *****

// Components
import Card from "./Card"
import Button from "./Button"

// Link
import Link from "next/link"
import React from "react"

// Props
interface SubjectCardProps {
    // CHANGE FOLLOWING TO NUMBER WHEN USING ACTUAL DATA: totalTopics, totalFlashcards
    title: string
    totalTopics: string
    totalFlashcards: string
    image: string
    colour: string
    width?: string
    className?: string
    isSubjectCard?: boolean
    open?: () => void
}

export default function SubjectCard({
    title,
    totalTopics,
    image,
    totalFlashcards,
    colour,
    width = "w-72 lg:w-80",
    className = "",
    isSubjectCard = true,
    open
}: SubjectCardProps) {
    return (
        <Card className={`${className} ${width} cursor-pointer m-auto`}>
            <div>
                {/* Image and title section */}
                <div className="relative">
                    <img src={image} alt={title} className="min-w-full rounded-tl-lg rounded-tr-lg" />

                    <div className="absolute inset-0 p-4 flex-center-item rounded-tl-lg rounded-tr-lg overflow-hidden">
                        <div className="absolute inset-0 bg-black/75"></div>

                        <p className="relative lg-bold-text text-center text-[var(--accent-text)]">
                            {title}
                        </p>
                    </div>
                </div>

                {/* Details and options section */}
                <div className="w-full px-8 py-4 flex flex-col items-center gap-4 border-t-8" style={{ borderColor: `${colour}` }}>
                    <div className="flex flex-row gap-12 items-center">
                        <div className="text-center flex-column-no-gap items-center justify-start">
                            <p className="font-semibold text-3xl text-[var(--bold-text)]">{totalTopics}</p>

                            <p className="text-base">Topics</p>
                        </div>

                        <div className="text-center items-center justify-start">
                            <p className="font-semibold text-3xl text-[var(--bold-text)]">{totalFlashcards}</p>

                            <p className="text-base">Flashcards</p>
                        </div>
                    </div>

                    <div className="w-full">
                        {isSubjectCard ? (
                            <Link href={`/subjects/${title}`}>
                                <Button className="w-full font-medium" variant="blue" padding="slim">Open</Button>
                            </Link>
                        ) : (
                            <Button className="w-full font-medium" variant="blue" padding="slim" onClick={open}>Open</Button>
                        )}

                        <Button className="w-full mt-1 font-medium" variant="green" padding="slim">Edit</Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}