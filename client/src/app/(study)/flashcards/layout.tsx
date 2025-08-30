// ***** LAYOUT FOR FLASHCARD PAGE *****

// Components
import Button from "@/components/Button"

export default function FlashcardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const questions: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    return (
        <div className="h-screen flex flex-col justify-between">
            <div className="flex flex-row justify-between items-center px-6 py-4 border-b border-black">
                <p className="xs-bold-text text-[var(--bold-text)]">00:00</p>

                <Button 
                    padding="slim" 
                    variant="green"
                    className="rounded-lg"
                >
                    Finish
                </Button>
            </div>

            <div>
                {children}
            </div>

            <div className="px-6 py-4 border-t border-black">
                <p className="text-center sm-bold-text text-[var(--bold-text)]">Questions</p>

                <div className="mt-2 flex flex-row items-center gap-4 overflow-x-scroll" style={{ scrollbarWidth: "none" }}>
                    {questions.map(question =>
                        <div key={question} className="flex items-center justify-center rounded-sm bg-gray-200 w-8 h-8 flex-shrink-0">
                            <p className="font-extrabold text-sm text-[var(--bold-text)]">{question}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}