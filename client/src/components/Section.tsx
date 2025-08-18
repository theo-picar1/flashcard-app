// ***** REUSABLE SECTION COMPONENT WITH LINKS (E.G. SECTIONS FOUND IN SETTINGS OR MENU MODAL) *****

// Next.js
import Link from 'next/link'

// Props
interface SectionProps {
    href: string
    iconSrc?: string
    iconStyle?: string
    label?: string
    onClick?: () => void
    textStyle?: string
}

export default function Section({ href, iconSrc, label, onClick, textStyle = 'text-[var(--regular-text)]', iconStyle }: SectionProps) {
    return (
        <Link href={href} onClick={onClick}>
            <div className="flex-row-no-gap gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                {iconSrc && <img src={iconSrc} alt={label} className={`${iconStyle}`} />}
                <p className={textStyle}>{label}</p>
            </div>
        </Link>
    )
}