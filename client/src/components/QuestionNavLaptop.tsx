// ***** QUESTION NAVIGATION FOR (STUDY) GROUP: LAPTOP *****

// Flashcard type
import { Flashcard } from "@/mock/flashcards"

// Props
interface QuestionNavLaptopProps {
    flashcards?: Flashcard[]
    currentIndex: number
    goToFlashcard?: (index: number) => void
    loading?: boolean
    markedFlashcards?: string[]
}

export default function QuestionNavLaptop({
    flashcards = [],
    currentIndex,
    goToFlashcard,
    loading,
    markedFlashcards
}: QuestionNavLaptopProps) {

    return (
        <div className="p-6 lg:pt-8 border-l border-black hidden md:flex flex-col h-full">
            <p className="text-center md:text-left sm-bold-text text-[var(--bold-text)] shrink-0">
                Questions
            </p>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div
                    className="mt-2 flex-1 flex flex-col gap-4 overflow-y-auto"
                    style={{ scrollbarWidth: "none" }}
                >
                    {flashcards.map((flashcard, index) => {
                        // Determine background color based on marked status
                        let bgColor = "bg-white"

                        if (markedFlashcards?.[index] === "correct") {
                            bgColor = "bg-[var(--website-green)]"
                        } else if (markedFlashcards?.[index] === "incorrect") {
                            bgColor = "bg-[var(--website-red)]"
                        }

                        return (
                            <div
                                key={index}
                                onClick={() => goToFlashcard?.(index)}
                                className={`flex flex-row items-center justify-between border rounded-sm cursor-pointer p-4 bg-white ${index === currentIndex ? "border-black" : "border-transparent"} hover:bg-gray-300`}
                            >
                                <div>
                                    <p className="text-sm text-[var(--bold-text)] font-bold">Question {index + 1}</p>
                                    <p className="text-sm mt-2">{flashcard.question}</p>
                                </div>
                                <div className={`w-4 h-4 rounded-full border border-1 border-gray-600 ${bgColor}`}></div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}