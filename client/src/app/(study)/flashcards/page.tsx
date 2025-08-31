// ***** COMPONENT FOR FLASHCARDS *****

// Components
import RadioButton from "@/components/RadioButton"

export default function FlashcardsPage() {
    return (
        <div className="flex flex-col gap-8 base-padding-rule mx-auto p-6">
            {/* Navigation */}
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center gap-1 cursor-pointer">
                    <img
                        src="/images/back-icon.png"
                        alt="Go to previous flashcard"
                        className="base-icon-size invert"
                    />
                    <p className="text-[var(--bold-text)]">Back</p>
                </div>

                <div className="flex flex-row items-center gap-1 cursor-pointer">
                    <p className="text-[var(--bold-text)]">Next</p>
                    <img
                        src="/images/back-icon.png"
                        alt="Go to next flashcard"
                        className="base-icon-size invert -rotate-180"
                    />
                </div>
            </div>

            {/* Flashcard */}
            <div className="m-auto w-56 md:w-2/3 max-w-sm aspect-square relative group">
                <input
                    type="checkbox"
                    id="view-answer-checkbox"
                    className="absolute w-full h-full opacity-0 cursor-pointer peer"
                />

                <div className="w-full h-full relative duration-500 [transform-style:preserve-3d] peer-checked:rotate-y-180">
                    {/* Front */}
                    <div className="absolute w-full h-full backface-hidden bg-[var(--website-blue)] px-6 py-4 md:p-12 text-[var(--accent-text)] rounded-xl shadow-lg flex flex-col">
                        <p className="md-bold-text text-sm absolute top-6 md:top-8 lg:top-12 w-max left-1/2 -translate-x-1/2">
                            Flashcard #1
                        </p>

                        <div className="flex-1 flex items-center justify-center px-2 text-center">
                            <p className="font-bold md:text-2xl">
                                What are 3 examples of igneous rocks?
                            </p>
                        </div>
                    </div>

                    {/* Back */}
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-200 px-6 py-4 text-[var(--bold-text)] rounded-xl shadow-lg flex flex-col">
                        <p className="md-bold-text text-sm absolute top-6 md:top-8 lg:top-12 w-max left-1/2 -translate-x-1/2">
                            Answer
                        </p>

                        <div className="flex-1 flex items-center justify-center px-2 text-center">
                            <p className="font-bold md:text-2xl">
                                Granite, Basalt, Obsidian
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress bar */}
            <div className="hidden md:flex w-full items-center gap-2">
                <p className="text-sm text-gray-500">1 of 10</p>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "10%" }}></div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-6 md:gap-8">
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
    )
}