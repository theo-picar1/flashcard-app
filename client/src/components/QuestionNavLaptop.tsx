// Flashcard type
import { Flashcard } from "@/mock/flashcards"

// Props
interface QuestionNavLaptopProps {
    flashcards?: Flashcard[]
    currentIndex: number
    goToFlashcard?: (index: number) => void
    loading?: boolean
}

export default function QuestionNavLaptop({
    flashcards = [],
    currentIndex,
    goToFlashcard,
    loading
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
                    {flashcards.map((flashcard, index) =>
                        <div
                            key={index}
                            className={`border border-1 rounded-sm cursor-pointer p-4 bg-white
                      ${index === currentIndex ? "border-black" : "border-transparent"} hover:bg-gray-300`}
                            onClick={() => goToFlashcard && goToFlashcard(index)}
                        >
                            <p className="text-sm text-[var(--bold-text)] font-bold">Question {index + 1}</p>
                            <p className="text-sm mt-2">{flashcard.question}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}