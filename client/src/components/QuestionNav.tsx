// Props
interface QuestionNavProps {
    totalQuestions: number
    currentIndex: number
    goToFlashcard?: (index: number) => void
    markedFlashcards?: string[]
}

export default function QuestionNav({
    totalQuestions,
    currentIndex,
    goToFlashcard,
    markedFlashcards
}: QuestionNavProps) {
    // Be able to loop 'totalQuestions' times with .map (1 indexed with i + 1)
    const questions = Array.from({ length: totalQuestions }, (_, i) => i + 1)

    return (
        <div className="px-6 py-4 border-t border-black md:hidden w-full">
            <p className="text-center md:text-left sm-bold-text text-[var(--bold-text)]">Questions</p>

            <div
                className="mt-2 flex flex-row items-center gap-4 overflow-x-scroll"
                style={{ scrollbarWidth: "none" }}
            >
                {questions.map((question, index) => {
                    // Change button colour depending on mark status
                    let bgColor = "bg-gray-200"
                    let txtColor = markedFlashcards?.[index] === "correct" || 
                                   markedFlashcards?.[index] === "incorrect" ? "text-white" : "text-[var(--bold-text)]"

                    if (markedFlashcards && markedFlashcards[index] === "correct") {
                        bgColor = "bg-[var(--website-green)]"
                    } 
                    else if (markedFlashcards && markedFlashcards[index] === "incorrect") {
                        bgColor = "bg-[var(--website-red)]"
                    }

                    return (
                        <div
                            key={question}
                            className={`flex items-center justify-center rounded-sm w-8 lg:w-10 xl:w-12 h-8 lg:h-10 xl:h-12 ${bgColor} flex-shrink-0 border border-black cursor-pointer
                          ${index === currentIndex ? "border-1" : "border-0"} hover:bg-gray-300`}
                            onClick={() => goToFlashcard && goToFlashcard(index)}
                        >
                            <p className={`font-extrabold text-sm xl:text-base ${txtColor}`}>
                                {question}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}