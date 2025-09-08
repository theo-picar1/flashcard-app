// ***** COMPONENT FOR FLASHCARDS *****

'use client'

// Components
import RadioButton from "@/components/RadioButton"
import QuestionNav from "@/components/QuestionNav"
import QuestionNavLaptop from "@/components/QuestionNavLaptop"

// React
import { useState } from "react"

// Hooks
import { useFlashcards } from "@/hooks/flashcards/useFlashcards"

// Type
import { Flashcard } from "@/mock/flashcards"

export default function FlashcardsPage() {
    // State variables
    const [currentIndex, setCurrentIndex] = useState(0)

    // Hook variables
    const { flashcards, loading } = useFlashcards()

    // Variables
    const currFlashcard = flashcards[currentIndex]

    // Change flashcard by card in QuestionNav or QuestionNavLaptop
    const goToFlashcard = (index: number) => {
        if (index >= 0 && index < flashcards.length) {
            setCurrentIndex(index)
        }

        return
    }

    // Go to eithr the next or previous flashcard dpending on the 'direction' parameter
    const goToNextOrPrevFlashcard = (direction: "next" | "prev") => {
        if (direction === "next" && currentIndex < flashcards.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else if (direction === "prev" && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }

        return
    }

    return (
        <div className="flex flex-col md:flex-row md:justify-start w-full">
            <div className="flex flex-col items-center justify-center h-full gap-12 md:w-2/3 py-6 px-8 lg:px-12 xl:px-16">
                <div className="w-full flex flex-row items-center lg:gap-6 justify-between shrink-0">
                    <div 
                        className="flex flex-row items-center gap-1 cursor-pointer"
                        onClick={() => goToNextOrPrevFlashcard("prev")}
                    >
                        <img
                            src="/images/back-icon.png"
                            alt="Go to previous flashcard"
                            className="base-icon-size invert"
                        />
                        <p className="text-[var(--bold-text)]">Back</p>
                    </div>

                    <div 
                        className="flex flex-row items-center gap-1 cursor-pointer"
                        onClick={() => goToNextOrPrevFlashcard("next")}
                    >
                        <p className="text-[var(--bold-text)]">Next</p>
                        <img
                            src="/images/back-icon.png"
                            alt="Go to next flashcard"
                            className="base-icon-size invert -rotate-180"
                        />
                    </div>
                </div>

                <FlashcardSection
                    loading={loading}
                    currFlashcard={currFlashcard}
                    currentIndex={currentIndex}
                />

                <div className="hidden md:flex w-full items-center gap-2 shrink-0">
                    <p className="text-md text-gray-500">1 of 10</p>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-6 md:gap-8 shrink-0">
                    <RadioButton id="mark-flashcard-radio">
                        <img
                            src="/images/red-close-icon-large.png"
                            alt="Mark flashcard"
                            className="w-8 h-8 absolute"
                        />
                    </RadioButton>

                    <label
                        htmlFor="view-answer-checkbox"
                        id="view-answer-label"
                        className="relative flex items-center justify-center w-12 h-12 p-6 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer"
                    >
                        <img
                            src="/images/blue-visibility-icon-large.png"
                            alt="View flashcard answer"
                            className="w-8 h-8 absolute"
                        />
                    </label>

                    <RadioButton id="check-flashcard-radio">
                        <img
                            src="/images/green-check-icon-large.png"
                            alt="Mark flashcard as complete"
                            className="w-8 h-8 absolute"
                        />
                    </RadioButton>
                </div>
            </div>

            {/* Mobile question navigation */}
            <QuestionNav
                totalQuestions={flashcards.length}
                currentIndex={currentIndex}
                goToFlashcard={goToFlashcard}
            />

            {/* Laptop question navigation */}
            <QuestionNavLaptop
                flashcards={flashcards}
                currentIndex={currentIndex}
                goToFlashcard={goToFlashcard}
                loading={loading}
            />
        </div>
    )
}

// Individual flashcard component
function FlashcardSection({ loading, currFlashcard, currentIndex }: { loading?: boolean, currFlashcard?: Flashcard, currentIndex?: number }) {
    return (
        <div className="w-full h-64 lg:h-96 relative group">
            <input
                type="checkbox"
                id="view-answer-checkbox"
                className="absolute w-full opacity-0 cursor-pointer peer"
            />

            <div className="w-full h-full shadow-2xl relative duration-500 [transform-style:preserve-3d] peer-checked:rotate-y-180">
                {/* Front */}
                <div className="absolute h-full w-full backface-hidden bg-[var(--website-blue)] px-6 text-[var(--accent-text)] rounded-xl shadow-lg flex flex-col">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-black absolute top-6 md:top-8 lg:top-12 w-max left-1/2 -translate-x-1/2">
                        Flashcard #{(currentIndex ?? 0) + 1}
                    </p>

                    <div className="flex-1 flex items-center justify-center px-2 text-center">
                        <p className="font-bold lg:text-lg xl:text-2xl">
                            {loading ? "Loading..." : currFlashcard?.question}
                        </p>
                    </div>
                </div>

                {/* Back */}
                <div className="absolute h-full w-full backface-hidden rotate-y-180 bg-gray-200 px-6 text-[var(--bold-text)] rounded-xl shadow-lg flex flex-col">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-black absolute top-6 md:top-8 lg:top-12 w-max left-1/2 -translate-x-1/2">
                        Answer
                    </p>

                    <div className="flex-1 flex items-center justify-center px-2 text-center">
                        <p className="font-bold lg:text-lg xl:text-2xl">
                            {loading ? "Loading..." : currFlashcard?.answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}