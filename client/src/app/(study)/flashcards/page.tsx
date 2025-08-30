// ***** COMPONENT FOR FLASHCARDS *****

// Components
import RadioButton from "@/components/RadioButton"

export default function FlashcardsPage() {
    return (
        <div className="flex flex-col gap-6 max-w-sm m-auto p-6">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center gap-1">
                    <img
                        src="/images/back-icon.png"
                        alt="Go to previous flashcard"
                        className="base-icon-size invert"
                    />

                    <p className="text-[var(--bold-text)]">Back</p>
                </div>

                <div className="flex flex-row items-center gap-1">
                    <p className="text-[var(--bold-text)]">Next</p>

                    <img src="/images/back-icon.png" alt="Go to next flashcard" className="base-icon-size invert -rotate-180" />
                </div>
            </div>

            <div className="m-auto w-56 max-w-sm h-56 perspective relative group">
                <input type="checkbox" id="view-answer-checkbox" className="absolute w-full h-full opacity-0 cursor-pointer peer" />

                <div className="w-full h-full relative transition-transform duration-500 [transform-style:preserve-3d] peer-checked:rotate-y-180">
                    {/* Front */}
                    <div className="absolute w-full h-full backface-hidden bg-[var(--website-blue)] px-6 py-4 text-[var(--accent-text)] rounded-xl shadow-lg flex flex-col">
                        <p className="md-bold-text text-sm absolute top-4 w-max left-1/2 -translate-x-1/2">
                            Flashcard #1
                        </p>

                        <div className="flex-1 flex items-center justify-center px-2 text-center">
                            <p className="font-bold">
                                What are 3 examples of igneous rocks?
                            </p>
                        </div>
                    </div>

                    {/* Back */}
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-200 px-6 py-4 text-[var(--bold-text)] rounded-xl shadow-lg flex flex-col">
                        <p className="md-bold-text text-sm absolute top-4 w-max left-1/2 -translate-x-1/2">
                            Answer
                        </p>

                        <div className="flex-1 flex items-center justify-center px-2 text-center">
                            <p className="font-bold">
                                Granite, Basalt, Obsidian
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="m-auto flex flex-row items-center gap-4">
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
                    className="relative flex items-center justify-center w-8 h-8 p-6 rounded-md bg-gray-200 cursor-pointer"
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