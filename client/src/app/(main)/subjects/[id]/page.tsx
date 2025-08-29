'use client'

import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

import Button from "@/components/Button"
import SubjectCard from "@/components/SubjectCard"
import PopUpModal from "@/components/PopUpModal"

export default function Subject() {
    const { id: title } = useParams()

    // State variables
    const [openCard, setOpenCard] = useState<string | null>(null)

    // Test data for subjects
    const subjects = [
        { title: "Rivers", colour: "red" },
        { title: "Brazil", colour: "blue" },
        { title: "Biodiversity", colour: "green" },
        { title: "Rocks", colour: "purple" },
        { title: "The Amazon Rainforest", colour: "yellow" },
    ]

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

            <section className="flex flex-col items-center gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {subjects.map(subject => (
                    <div key={subject.title} className="relative">
                        <SubjectCard
                            width="w-full max-w-md"
                            title={subject.title}
                            totalTopics="10"
                            totalFlashcards="20"
                            image="/images/subject-placeholder-image1.jpg"
                            colour={subject.colour}
                            open={() => setOpenCard(subject.title)}
                            isSubjectCard={false}
                        />

                        <PopUpModal
                            isOpen={openCard === subject.title}
                            className="bg-white bottom-2 w-full h-min top-68 left-8 p-6 rounded-md"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row items-center justify-between">
                                    <p className="lg-bold-text text-[var(--bold-text)]">{subject.title}</p>
                                    <img
                                        src="/images/close-icon.png"
                                        alt="Close button"
                                        className="invert cursor-pointer"
                                        onClick={() => setOpenCard(null)}
                                    />
                                </div>

                                <div>
                                    <p className="md-bold-text text-[var(--bold-text)]">Practice</p>
                                    <div className="flex flex-col gap-2">
                                        <Link href="/flashcards">
                                            <Button className="w-full" padding="slim">Flashcards</Button>
                                        </Link>
                                        
                                        <Button className="w-full" padding="slim">Test</Button>
                                    </div>
                                </div>

                                <div>
                                    <p className="md-bold-text text-[var(--bold-text)]">Exam</p>
                                    <Button className="w-full" padding="slim" variant="green">Exam</Button>
                                </div>
                            </div>
                        </PopUpModal>
                    </div>
                ))}
            </section>
        </main>
    )
}