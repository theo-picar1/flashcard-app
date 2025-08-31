// ***** LAYOUT FOR FLASHCARD PAGE *****

// Components
import Button from "@/components/Button"

function QuestionNav({
    containerStyle = "border-t border-black md:hidden",
    navStyle = "flex flex-row items-center gap-4 overflow-x-scroll"
}: Readonly<{
    navStyle?: string
    containerStyle?: string
}>) {
    const questions: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    return (
        <div className={`px-6 py-4 ${containerStyle}`}>
            <p className="text-center md:text-left sm-bold-text text-[var(--bold-text)]">Questions</p>

            <div className={`mt-2 md:mt-4 xl:mt-6 ${navStyle}`} style={{ scrollbarWidth: "none" }}>
                {questions.map(question =>
                    <div key={question} className="flex items-center justify-center rounded-sm bg-gray-200 w-8 lg:w-10 xl:w-12 h-8 lg:h-10 xl:h-12 flex-shrink-0 cursor-pointer hover:bg-gray-300">
                        <p className="font-extrabold text-sm xl:text-base text-[var(--bold-text)]">{question}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default function FlashcardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="h-screen md:grid md:grid-cols-[3fr_1fr]">
            {/* Left */}
            <div className="flex flex-col justify-between md:justify-start">
                {/* Header */}
                <div className="flex flex-row md:grid md:grid-cols-3 justify-between items-center py-4 border-b border-black base-padding-rule">
                    <p className="xs-bold-text text-[var(--bold-text)]">00:00</p>

                    <p className="hidden md:block text-center text-md font-medium text-gray-600">
                        Geology – Igneous Rocks
                    </p>

                    <Button
                        padding="slim"
                        variant="green"
                        className="rounded-lg w-min justify-self-end"
                    >
                        Finish
                    </Button>
                </div>

                {/* Content */}
                <div className="mt-4">
                    {children}
                </div>

                <QuestionNav />
            </div>

            {/* Right */}
            <div className="hidden border-l border-black md:flex">
                <QuestionNav
                    navStyle="grid grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-3"
                    containerStyle="lg:px-8 xl:px-12"
                />
            </div>
        </div>
    )
}