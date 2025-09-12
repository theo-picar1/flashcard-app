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

// Actual page content
export default function FlashcardsPage() {
    // Hook variables
    const { flashcards, loading } = useFlashcards()

    // State variables
    const [currentIndex, setCurrentIndex] = useState(0)
    const [markedFlashcards, setMarkedFlashcards] = useState<string[]>(() => Array(flashcards.length).fill(""))

    // Variables
    const currFlashcard = flashcards[currentIndex]

    // Change flashcard by card in QuestionNav or QuestionNavLaptop
    const goToFlashcard = (index: number) => {
        if (index >= 0 && index < flashcards.length) {
            setCurrentIndex(index)
        }

        return
    }

    // Go to the next flashcard through 'next' or 'back' button
    const goToNextOrPrevFlashcard = (direction: "prev" | "next") => {
        if (currentIndex >= 0 && direction === "prev") {
            setCurrentIndex(currentIndex - 1)
        }
        else if (currentIndex < flashcards.length && direction === "next") {
            setCurrentIndex(currentIndex + 1);
        }
    }

    // Mark a flashcard as either correct or incorrect and change some UI depending on status
    const markCurrentFlashcard = (cardStatus: "correct" | "incorrect") => {
        setMarkedFlashcards(prev => {
            const updated = [...markedFlashcards]
            updated[currentIndex] = cardStatus
            return updated
        })
    }

    return (
        <div className="flex flex-col md:flex-row md:justify-start w-full overflow-hidden flex-1">
            <div className="flex flex-col items-center justify-center h-full gap-8 py-4: md:py-6 md:gap-12 md:w-2/3 px-8 lg:px-12 xl:px-16">
                <div className="w-full flex flex-row items-center justify-between shrink-0">
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

                <div className="hidden md:flex w-full items-center gap-2 shrink-0">
                    <p className="text-md text-gray-500">{(currentIndex ?? 0) + 1} of {flashcards.length}</p>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(((currentIndex ?? 0) + 1) / flashcards.length) * 100}%` }}></div>
                    </div>
                </div>

                <div className="flex justify-center gap-6 md:gap-8 shrink-0">
                    {/* Mark as Incorrect */}
                    <button
                        type="button"
                        onClick={() => markCurrentFlashcard("incorrect")}
                        className={`relative flex items-center justify-center w-12 h-12 p-6 rounded-md cursor-pointer 
      ${markedFlashcards[currentIndex] === "incorrect" ? "bg-[var(--website-red)]" : "bg-gray-200"} 
      `}
                    >
                        <img
                            src="/images/red-close-icon-large.png"
                            alt="Mark flashcard incorrect"
                            className={`w-8 h-8 absolute ${markedFlashcards[currentIndex] === "incorrect" ? "filter brightness-0 invert" : ""}`}
                        />
                    </button>

                    {/* View Answer */}
                    <label
                        htmlFor="view-answer-checkbox"
                        id="view-answer-label"
                        className="relative flex items-center justify-center w-12 h-12 p-6 rounded-md bg-gray-200  cursor-pointer"
                    >
                        <img
                            src="/images/blue-visibility-icon-large.png"
                            alt="View flashcard answer"
                            className="w-8 h-8 absolute"
                        />
                    </label>

                    {/* Mark as Correct */}
                    <button
                        type="button"
                        onClick={() => markCurrentFlashcard("correct")}
                        className={`relative flex items-center justify-center w-12 h-12 p-6 rounded-md cursor-pointer 
                                    ${markedFlashcards[currentIndex] === "correct" ? "bg-[var(--website-green)]" : "bg-gray-200"}`}
                    >
                        <img
                            src="/images/green-check-icon-large.png"
                            alt="Mark flashcard correct"
                            className={`w-8 h-8 absolute ${markedFlashcards[currentIndex] === "correct" ? "filter brightness-0 invert" : ""}`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile question navigation */}
            <QuestionNav
                totalQuestions={flashcards.length}
                currentIndex={currentIndex}
                goToFlashcard={goToFlashcard}
                markedFlashcards={markedFlashcards}
            />

            {/* Laptop question navigation */}
            <QuestionNavLaptop
                data={flashcards}
                currentIndex={currentIndex}
                goToQuestion={goToFlashcard}
                loading={loading}
                markedQuestions={markedFlashcards}
            />
        </div>
    )
}