// ****** MCQ TEST (NON-EXAM) COMPONENT *****

'use client'

// Components 
import QuestionNav from "@/components/QuestionNav"
import QuestionNavLaptop from "@/components/QuestionNavLaptop"
import Card from "@/components/Card"

// React
import { useState } from "react"

// Hooks
import { useMultipleChoices } from "@/hooks/mcq/useMultipleChoices"

export default function TestPage() {
    // Hook variables
    const { multipleChoices, loading } = useMultipleChoices()

    // State variables
    const [currentIndex, setCurrentIndex] = useState(0)
    const [markedQuestions, setMarkedQuestions] = useState<string[]>(() => Array(multipleChoices.length).fill(""))

    // Variables
    const currMultipleChoice = multipleChoices[currentIndex]

    // Change Question by card in QuestionNav or QuestionNavLaptop
    const goToQuestion = (index: number) => {
        if (index >= 0 && index < multipleChoices.length) {
            setCurrentIndex(index)
        }

        return
    }

    // Go to the next Question through 'next' or 'back' button
    const goToNextOrPrevQuestion = (direction: "prev" | "next") => {
        if (currentIndex >= 0 && direction === "prev") {
            setCurrentIndex(currentIndex - 1)
        }
        else if (currentIndex < multipleChoices.length && direction === "next") {
            setCurrentIndex(currentIndex + 1);
        }
    }

    // Mark a Question as either correct or incorrect and change some UI depending on status
    const markCurrentQuestion = (cardStatus: "correct" | "incorrect") => {
        setMarkedQuestions(prev => {
            const updated = [...markedQuestions]
            updated[currentIndex] = cardStatus
            return updated
        })
    }

    return (
        <div className="flex flex-col md:flex-row md:justify-start w-full flex-1 md:overflow-hidden">
            <div
                style={{ scrollbarWidth: "none" }}
                className="flex flex-col items-center justify-center md:justify-start h-full md:overflow-y-scroll gap-8 py-4 md:py-6 md:gap-12 md:w-2/3 px-8 lg:px-12 xl:px-16"
            >
                <div className="w-full flex flex-row items-center justify-between shrink-0">
                    <div
                        className="flex flex-row items-center gap-1 cursor-pointer"
                        onClick={() => goToNextOrPrevQuestion("prev")}
                    >
                        <img
                            src="/images/back-icon.png"
                            alt="Go to previous Question"
                            className="base-icon-size invert"
                        />
                        <p className="text-[var(--bold-text)]">Back</p>
                    </div>

                    <p className="hidden md:text-2xl font-extrabold text-[var(--font-bold)]">Question {currentIndex + 1}</p>

                    <div
                        className="flex flex-row items-center gap-1 cursor-pointer"
                        onClick={() => goToNextOrPrevQuestion("next")}
                    >
                        <p className="text-[var(--bold-text)]">Next</p>
                        <img
                            src="/images/back-icon.png"
                            alt="Go to next Question"
                            className="base-icon-size invert -rotate-180"
                        />
                    </div>
                </div>

                <Card className="p-6 w-full">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div>
                            <p className="text-base md:text-lg font-bold text-[var(--font-bold)]">{multipleChoices[currentIndex].question}</p>

                            <div className="flex flex-col gap-4 mt-6">
                                {multipleChoices[currentIndex].choices.map((choice, index) =>
                                    <div
                                        key={index}
                                        className="flex flex-row gap-4 items-center w-full p-4 border rounded-lg border-gray-300">
                                        <div className="shrink-0 w-5 h-5 rounded-full border border-gray-500"></div>

                                        <p className="text-sm md:text-base">{choice}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </Card>

                <div className="hidden md:flex w-full items-center gap-2 shrink-0">
                    <p className="text-md text-gray-500">{currentIndex + 1} of {multipleChoices.length}</p>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(((currentIndex ?? 0) + 1) / multipleChoices.length) * 100}%` }}></div>
                    </div>
                </div>
            </div>

            {/* Mobile question navigation */}
            <QuestionNav
                totalQuestions={multipleChoices.length}
                currentIndex={currentIndex}
            />

            {/* Laptop question navigation */}
            <QuestionNavLaptop
                currentIndex={currentIndex}
                data={multipleChoices}
                loading={loading}
                goToQuestion={goToQuestion}
            />
        </div>
    )
}