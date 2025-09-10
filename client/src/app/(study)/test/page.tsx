// ****** MCQ TEST (NON-EXAM) COMPONENT *****

'use client'

// Components 
import QuestionNav from "@/components/QuestionNav"
import QuestionNavLaptop from "@/components/QuestionNavLaptop"
import Card from "@/components/Card"

export default function TestPage() {
    return (
        <div className="flex flex-col md:flex-row md:justify-start w-full flex-1 oveflow-y-hidden">
            <div className="flex flex-col items-center justify-center h-full overflow-y-scroll gap-8 py-4 md:py-6 md:gap-12 md:w-2/3 px-8 lg:px-12 xl:px-16">
                <div className="w-full flex flex-row items-center justify-between shrink-0">
                    <div
                        className="flex flex-row items-center gap-1 cursor-pointer"
                    >
                        <img
                            src="/images/back-icon.png"
                            alt="Go to previous flashcard"
                            className="base-icon-size invert"
                        />
                        <p className="text-[var(--bold-text)]">Back</p>
                    </div>

                    <p className="hidden md:text-2xl font-extrabold text-[var(--font-bold)]">Question 1</p>

                    <div
                        className="flex flex-row items-center gap-1 cursor-pointer"
                    >
                        <p className="text-[var(--bold-text)]">Next</p>
                        <img
                            src="/images/back-icon.png"
                            alt="Go to next flashcard"
                            className="base-icon-size invert -rotate-180"
                        />
                    </div>
                </div>

                <Card className="p-6 w-full">
                    <div>
                        <p className="text-base md:text-lg font-bold text-[var(--font-bold)]">What are the 3 types of igneous rocks?</p>

                        <div className="flex flex-col gap-4 mt-6">
                            <div className="flex flex-row gap-4 items-center w-full p-4 border rounded-lg border-gray-300">
                                <div className="shrink-0 w-5 h-5 rounded-full border border-gray-500"></div>

                                <p className="text-sm md:text-base">Igneous, metamorphic, sedimentary</p>
                            </div>

                            <div className="flex flex-row gap-4 items-center w-full p-4 border rounded-lg border-gray-300">
                                <div className="shrink-0 w-5 h-5 rounded-full border border-gray-500"></div>

                                <p className="text-sm md:text-base">Igneous, metals, sedimentary</p>
                            </div>

                            <div className="flex flex-row gap-4 items-center w-full p-4 border rounded-lg border-gray-300">
                                <div className="shrink-0 w-5 h-5 rounded-full border border-gray-500"></div>

                                <p className="text-sm md:text-base">There are only 2 types; igneous and sedimentary</p>
                            </div>

                            <div className="flex flex-row gap-4 items-center w-full p-4 border rounded-lg border-gray-300">
                                <div className="shrink-0 w-5 h-5 rounded-full border border-gray-500"></div>

                                <p className="text-sm md:text-base">None of the above</p>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="hidden md:flex w-full items-center gap-2 shrink-0">
                    <p className="text-md text-gray-500">1 of 12 answered</p>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `10%` }}></div>
                    </div>
                </div>
            </div>

            {/* Mobile question navigation */}
            <QuestionNav
                totalQuestions={10}
                currentIndex={1}
            />

            {/* Laptop question navigation */}
            <QuestionNavLaptop
                currentIndex={1}
            />
        </div>
    )
}