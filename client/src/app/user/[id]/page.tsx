// ***** USER PROFILE PAGE *****

'use client'

// Components 
import Card from "@/components/Card"
import UserProfileIcon from "@/components/UserProfileIcon"
import Button from "@/components/Button"

// Next
import { useParams } from "next/navigation"

// Props for stat card
interface StatCardProps {
    title: string
    value: string | number
    image: string
    imageStyle?: string
    recordText: string
}

// Props for history section
interface HistorySectionProps {
    topic: string
    subject: string
    totalQs: string // Change to number
    time: string // Chnage to Date
    date: string // Change to Date
    score: string // Change to number
    color: string
}

// ***** REUSABLE STAT CARD LAYOUT COMPONENT *****
function StatCard({ title, value, image, recordText, imageStyle = "" }: StatCardProps) {
    return (
        <Card className="flex flex-col gap-6 items-start p-6 lg:py-12 w-full">
            <div className="flex flex-row justify-between items-start w-full">
                <p className="font-semibold">{title}</p>

                <img src={image} alt="Streaks section" className={`w-6 ${imageStyle}`} />
            </div>

            <div>
                <p className="font-extrabold text-3xl text-[var(--bold-text)]">{value}</p>
                <p className="text-sm">{recordText}</p>
            </div>
        </Card>
    )
}

// ***** REUSABLE HISTORY SECTION COMPONENT *****
function HistorySection({ topic, subject, totalQs, time, date, score, color }: HistorySectionProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:px-8 gap-2 border border-solid border-gray-400 rounded-md p-4">
            <div>
                <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
                    <p className="font-extrabold text-[var(--bold-text)] text-md">{topic}</p>
                    <p className={`text-sm md:text-base font-semibold ${color}`}>{subject}</p>
                </div>

                <div className="mt-2 flex flex-row gap-4 text-sm md:text-base">
                    <p>{totalQs}</p>
                    <p>{time}</p>
                    <p>{date}</p>
                </div>
            </div>

            <p className="text-2xl font-extrabold text-[var(--bold-text)]">{score}</p>
        </div>
    )
}

export default function User() {
    const { id } = useParams()

    return (
        <main className="base-padding-rule main-container-flex gap-6 max-w-6xl m-auto">
            <p className="font-extrabold text-2xl text-[var(--bold-text)]">User Profile</p>

            {/* User section */}
            <Card className="flex flex-col lg:flex-row gap-6 px-8 py-10 items-center lg:items-start">
                <UserProfileIcon
                    className="text-white p-12"
                    textSize="text-2xl font-semibold"
                />

                <div className="flex flex-col gap-2 items-center lg:items-start">
                    <p className="text-2xl font-black text-[var(--bold-text)]">{id}</p>

                    <p className="text-base text-center lg:text-left">
                        TypeScript (abbreviated as TS) is a high-level programming language that adds static typing
                        with optional type annotations to JavaScript. It is designed for developing large applications
                        and transpiles to JavaScript.[6] It is developed by Microsoft as free and open-source software
                        released under an Apache License 2.0.
                    </p>

                    <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 mt-1 items-center w-full lg:w-max">
                        <Button padding="slim" className="w-full lg:w-max">
                            <img src="/images/edit-icon.png" alt="Edit profile button" className="w-5" />
                            <p>Edit profile</p>
                        </Button>

                        <Button padding="slim" className="w-full lg:w-max" variant="white">
                            <img src="/images/logout-icon-large.png" alt="Edit profile button" className="w-5" />
                            <p className="text-[var(--website-red)]">Sign out</p>
                        </Button>
                    </div>
                </div>
            </Card>

            <p className="font-extrabold text-2xl text-[var(--bold-text)]">Your Statistics</p>

            {/* Stats section */}
            <div className="flex flex-col lg:flex-row gap-2 lg:justify-between">
                <StatCard
                    title="Streaks"
                    value="20"
                    image="/images/streaks-unactive-large-icon.png"
                    recordText="Longest streak: 40"
                />

                <StatCard
                    title="Flashcards"
                    value="200"
                    image="/images/list-icon.png"
                    recordText="This month: 3"
                    imageStyle="filter brightness-110"
                />

                <StatCard
                    title="Exams Taken"
                    value="19"
                    image="/images/book-icon-large.png"
                    recordText="Average: 82%"
                />

                <StatCard
                    title="Total Hours"
                    value="256"
                    image="/images/clock-icon-large.png"
                    recordText="Longest day: 2"
                />
            </div>

            <p className="font-extrabold text-2xl text-[var(--bold-text)]">Recent Exams</p>

            {/* Recent Exams */}
            <Card className="p-6 flex flex-col gap-6">
                <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
                    <p className="font-bold text-2xl text-[var(--bold-text)]">History</p>

                    <Button
                        padding="slim"
                        className="relative"
                    >
                        <img
                            src="/images/clock-icon-large.png"
                            alt="View all exams button"
                            className="w-4 invert"
                        />
                        <p>View all</p>
                    </Button>
                </div>

                <div className="flex flex-col gap-2">
                    <HistorySection
                        topic="Physical Geography"
                        subject="Geography"
                        totalQs="40Qs"
                        time="35mins"
                        date="14/01/2025"
                        score="85%"
                        color="text-yellow-900"
                    />

                    <HistorySection
                        topic="The Stone Age"
                        subject="History"
                        totalQs="100Qs"
                        time="52mins"
                        date="17/01/2025"
                        score="81%"
                        color="text-red-500"
                    />

                    <HistorySection
                        topic="Physics"
                        subject="Science"
                        totalQs="20Qs"
                        time="5mins"
                        date="19/01/2025"
                        score="95%"
                        color="text-indigo-800"
                    />

                    <HistorySection
                        topic="Algebra"
                        subject="Mathematics"
                        totalQs="5Qs"
                        time="1hr30mins"
                        date="23/02/2025"
                        score="67%"
                        color="text-yellow-500"
                    />

                    <HistorySection
                        topic="Physical Geography"
                        subject="Geography"
                        totalQs="40Qs"
                        time="35mins"
                        date="19/04/2025"
                        score="81%"
                        color="text-yellow-900"
                    />
                </div>
            </Card>
        </main>
    )
}