// ***** USER PROFILE PAGE *****

'use client'

// Components 
import Card from "@/components/Card"
import UserProfileIcon from "@/components/UserProfileIcon"
import Button from "@/components/Button"

// Next
import { useParams } from "next/navigation"

export default function User() {
    const { id } = useParams()

    return (
        <main className="base-padding-rule main-container-flex gap-10 max-w-5xl m-auto">
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

            {/* Stats section */}
            <div>
                <Card>
                    Content
                </Card>


                <Card>
                    Content
                </Card>


                <Card>
                    Content
                </Card>

                <Card>
                    Content
                </Card>
            </div>
        </main>
    )
}