// ***** BASE CARD COMPONENT *****

interface CardProps {
    children: React.ReactNode
    className?: string
}

export default function Card({ children, className = '' }: CardProps) {
    const base = "base-card"

    return (
        <div className={`${base} ${className}`}>
            {children}
        </div>
    )
}