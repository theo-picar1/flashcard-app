// ***** MAIN LAYOUT HEADER *****

export default function Header() {
    return (
        <header className="flex-row-between p-4 bg-[var(--website-blue)] w-full text-[var(--accent-text)] padding-rule">
            <div className="flex-row-no-gap gap-2">
                <img src="/images/menu-icon.png"/>

                <p className="text-xl font-bold">Study Application</p>
            </div>

            <div className="flex-center-item bg-green-800 rounded-full w-0 h-0 p-5">
                <p>TP</p>
            </div>
        </header>
    )
}