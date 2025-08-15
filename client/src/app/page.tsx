// ***** LANDING PAGE COMPONENT *****

// Components
import Button from "@/components/Button"
import Card from "@/components/Card"

export default function Home() {
    return (
        <main className="flex-column-no-gap items-center py-12 gap-20">
            <div className="padding-rule w-full flex flex-col gap-5 items-center px-4 md:justify-between md:gap-5 lg:flex-row lg:items-start">
                <div className="flex-column-no-gap items-center gap-6 lg:items-start">
                    <div className="text-center lg:text-left">
                        <p className="text-4xl text-[var(--bold-text)] font-bold md:text-5xl lg:text-6xl">
                            Study Smarter,
                        </p>
                        <p className="text-4xl text-[var(--website-blue)] font-bold md:text-5xl lg:text-6xl">
                            Not Harder
                        </p>
                    </div>

                    <p className="text-center lg:text-left">
                        Create flashcards, carry out exams and organise subjects with our application to
                        ensure you ace your next test!
                    </p>

                    <div className="flex flex-col gap-2 w-full lg:flex-row">
                        <Button className="lg:w-48">Start studying now</Button>

                        <Button className="lg:w-48" variant="white">Create an account</Button>
                    </div>

                    <div className="flex-row-no-gap gap-2">
                        <div className="flex-row-no-gap gap-1">
                            <img src="/images/group-large-icon.png" alt="Group icon" className="w-6 brightness-200" />

                            <p className="text-s">1000+ users</p>
                        </div>

                        <div className="flex-row-no-gap gap-1">
                            <img src="/images/line-graph-large-icon.png" alt="Line graph icon" className="w-6 brightness-200" />

                            <p className="text-s">Growing daily</p>
                        </div>
                    </div>
                </div>

                <img src="images/study-image1.jpg" alt="Frustrated girl studying" className="block rounded-2xl shadow-2xl w-full max-w-xl" />
            </div>

            <div className="padding-rule bg-[var(--website-blue)] w-full flex flex-col gap-8 p-4 py-12 text-[var(--accent-text)] lg:grid lg: grid-cols-3 lg:justify-center">
                <div className="flex-column-no-gap text-center">
                    <p className="text-4xl font-black">1000+</p>

                    <p className="font-medium">Studying Users</p>
                </div>

                <div className="flex-column-no-gap text-center">
                    <p className="text-4xl font-black">4.2</p>

                    <p className="font-medium">Average Rating</p>
                </div>

                <div className="flex-column-no-gap text-center">
                    <p className="text-4xl font-black">100,000+</p>

                    <p className="font-medium">Flashcards Created</p>
                </div>
            </div>

            <div className="text-center flex-column-no-gap items-center gap-6 px-4 padding-rule">
                <p className="text-2xl text-[var(--bold-text)] font-bold">Maximise your learning ability</p>

                <p>
                    Boost your productivity and learning with the help of our built-in exam sessions and
                    our AI generators to create high-quality flashcards and quizzes
                </p>

                <div className="flex-column-no-gap gap-6 w-full">
                    <Card className="w-full flex-column-no-gap gap-4 p-6">
                        <div className="flex-center-item gap-2">
                            <img src="/images/book-icon-large.png" alt="Book" className="w-12" />
                            <p className="text-xl font-bold text-[var(--bold-text)]">Create study material</p>
                        </div>

                        <p>
                            Create as many subjects, topics, flashcards and exams as you need.
                        </p>
                    </Card>

                    <Card className="w-full flex-column-no-gap gap-4 p-6">
                        <div className="flex-center-item gap-2">
                            <img src="/images/brain-icon-large.png" alt="Brain" className="w-12" />
                            <p className="text-xl font-bold text-[var(--bold-text)]">Save more time</p>
                        </div>

                        <p>
                            Save more time by having our AI generate flashcards and exams for you.
                        </p>
                    </Card>

                    <Card className="w-full flex-column-no-gap gap-4 p-6">
                        <div className="flex-center-item gap-2">
                            <img src="/images/clock-icon-large.png" alt="Clock" className="w-12" />
                            <p className="text-xl font-bold text-[var(--bold-text)]">Track your progress</p>
                        </div>

                        <p>
                            Know how much you have studied, with smart recommendation on what to study next.
                        </p>
                    </Card>

                    <Card className="w-full flex-column-no-gap gap-4 p-6">
                        <div className="flex-center-item gap-2">
                            <img src="/images/free-icon-large.png" alt="No money" className="w-12" />
                            <p className="text-xl font-bold text-[var(--bold-text)]">Completely free</p>
                        </div>

                        <p>
                            No paywall at all! Create study material with no thought about payments.
                        </p>
                    </Card>
                </div>
            </div>
        </main>
    )
}
