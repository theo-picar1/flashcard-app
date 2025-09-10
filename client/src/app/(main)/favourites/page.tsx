// ***** COMPONENT THAT HOLDS ALL THE USER'S FAVOURITE SUBJECTS *****

// Components
import Button from "@/components/Button"
import SubjectCard from "@/components/SubjectCard"

// NextJS
import Link from "next/link"

export default function Favourites() {
    return (
        <main className="base-padding-rule main-container-flex gap-6">
            <Link href="/home">
                <div className="w-max flex flex-row items-center gap-2 hover:cursor-pointer">
                    <img className="brightness-50 h-4" src="/images/back-icon.png" alt="Back to home" />
                    <p>Back to home</p>
                </div>
            </Link>

            <p className="text-center md:text-left lg-bold-text text-[var(--bold-text)]">Your favourites</p>

            <Button padding="slim" variant="white" className="w-max">
                <p>Sort by</p>
                <img className="w-5 brightness-50" src="/images/dropdown-arrow-icon.png" alt="Dropdown button" />
            </Button>

            {/* Subjects section */}
            <section className="flex flex-col items-center gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <SubjectCard width="w-full max-w-md" title="English" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="red"></SubjectCard>

                <SubjectCard width="w-full max-w-md" title="Science" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="blue"></SubjectCard>

                <SubjectCard width="w-full max-w-md" title="French" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="green"></SubjectCard>

                <SubjectCard width="w-full max-w-md" title="Music" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="purple"></SubjectCard>

                <SubjectCard width="w-full max-w-md" title="Maths" totalTopics="10" totalFlashcards="20" image="/images/subject-placeholder-image1.jpg" colour="yellow"></SubjectCard>
            </section>
        </main>
    )
}