// Props
interface QuestionNavProps {
    totalQuestions: number
    currentIndex: number
    goToFlashcard?: (index: number) => void
}

export default function QuestionNav({
    totalQuestions,
    currentIndex,
    goToFlashcard
}: QuestionNavProps) {
    // Be able to loop 'totalQuestions' times with .map
    const questions = Array.from({ length: totalQuestions }, (_, i) => i + 1)

    return (
        <div className="px-6 py-4 border-t border-black md:hidden w-full">
            <p className="text-center md:text-left sm-bold-text text-[var(--bold-text)]">Questions</p>

            <div
                className="mt-2 flex flex-row items-center gap-4 overflow-x-scroll"
                style={{ scrollbarWidth: "none" }}
            >
                {questions.map((question, index) =>
                    <div
                        key={question}
                        className={`flex items-center justify-center rounded-sm w-8 lg:w-10 xl:w-12 h-8 lg:h-10 xl:h-12 bg-gray-200 flex-shrink-0 border border-black cursor-pointer
                                    ${index === currentIndex ? "border-1" : "border-0"} hover:bg-gray-300`}
                        onClick={() => goToFlashcard && goToFlashcard(index)}
                    >
                        <p className="font-extrabold text-sm xl:text-base text-[var(--bold-text)]">{question}</p>
                    </div>
                )}
            </div>
        </div>
    )
}