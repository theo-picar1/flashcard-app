export default function FlashcardsPage() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    Back
                </div>

                <div>
                    Next
                </div>
            </div>

            <div className="bg-[var(--website-blue)] w-48 h-48 rounded-xl">
                Flashcard
            </div>

            <div>
                <div>
                    X
                </div>

                <div>
                    See
                </div>

                <div>
                    Y
                </div>
            </div>
        </div>
    )
}