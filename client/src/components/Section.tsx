// ***** REUSABLE SECTION COMPONENT WITH LINKS (E.G. SECTIONS FOUND IN SETTINGS OR MENU MODAL) *****

// Next.js
import Link from 'next/link'

// Props
interface SectionProps {
    href: string
    iconSrc?: string
    label?: string
    onClick?: () => void
    textColour?: string
}

export default function Section({ href, iconSrc, label, onClick, textColour = 'text-[var(--regular-text)]' }: SectionProps) {
    return (
        <Link href={href} onClick={onClick}>
            <div className="flex-row-no-gap gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                {iconSrc && <img src={iconSrc} alt={label} className="base-icon-size" />}
                <p className={textColour || ''}>{label}</p>
            </div>
        </Link>
    )
}