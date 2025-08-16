// ***** BASE SUBJECT CARD COMPONENT *****

// Components
import Card from "./Card"
import Button from "./Button"

// Props
interface SubjectCardProps {
    // CHANGE FOLLOWING TO NUMBER WHEN USING ACTUAL DATA: totalTopics, totalFlashcards
    title: string
    totalTopics: string
    totalFlashcards: string
    image: string
    colour: string
}

export default function SubjectCard({ title, totalTopics, image, totalFlashcards, colour }: SubjectCardProps) {
    return (
        <Card className="flex-none cursor-pointer">
            <div>
                {/* Image and title section */}
                <div className="relative">
                    <img src={image} alt={title} className="max-w-sm" />

                    <div className="absolute inset-0 p-4 flex-center-item">
                        <div className="absolute inset-0 bg-black/75"></div>

                        <p className="relative lg-bold-text text-center text-[var(--accent-text)]">
                            {title}
                        </p>
                    </div>
                </div>

                {/* Details and options section */}
                <div className="px-6 py-4 flex-row-between border-t-8" style={{ borderColor: `${colour}` }}>
                    <div className="flex-row-no-gap gap-8">
                        <div className="text-center flex-column-no-gap items-center justify-start">
                            <p className="font-semibold text-3xl text-[var(--bold-text)]">{totalTopics}</p>

                            <p>Topics</p>
                        </div>

                        <div className="text-center items-center justify-start">
                            <p className="font-semibold text-3xl text-[var(--bold-text)]">{totalFlashcards}</p>

                            <p>Flashcards</p>
                        </div>
                    </div>

                    <div>
                        <Button className="w-32 font-medium" variant="blue" padding="slim">Open</Button>

                        <Button className="w-32 mt-1 font-medium" variant="green" padding="slim">Edit</Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}