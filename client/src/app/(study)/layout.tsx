// ***** LAYOUT FOR FLASHCARD PAGE *****

// Components
import Button from "@/components/Button"

// NextJS
import Link from "next/link"

export default function StudyLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[var(--background)]">
            <div className="flex flex-col h-screen bg-[var(--background)]">
                <div className="flex flex-row md:grid md:grid-cols-3 justify-between items-center py-4 border-b border-black base-padding-rule">
                    <p className="xs-bold-text text-[var(--bold-text)]">00:00</p>

                    <p className="hidden md:block text-center text-md font-medium text-gray-600">
                        Geology – Igneous Rocks
                    </p>

                    <Link href="/subjects/Geography">
                        <Button
                            padding="slim"
                            variant="green"
                            className="rounded-lg w-min justify-self-end"
                        >
                            Finish
                        </Button>
                    </Link>
                </div>

                {children}
            </div>
        </div>
    )
}