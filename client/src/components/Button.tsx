// ***** BASE BUTTON COMPONENT *****

type ButtonProps = {
    children: React.ReactNode
    icon?: string
    variant?: 'blue' | 'green' | 'red' | 'white'
    className?: string // For custom buttons
} & React.ButtonHTMLAttributes<HTMLButtonElement> // Allow regular button attributes (e.g. onClick)

export default function Button({ children, icon, variant = 'blue', className = '', ...props }: ButtonProps) {
    const base = "shadow-md flex-center-item gap-2 px-4 py-2 rounded font-semibold transition-colors duration-200 cursor-pointer"

    const variants = {
        blue: "bg-[var(--website-blue)] text-[var(--accent-text)] hover:brightness-90",
        green: "bg-[var(--website-green)] text-[var(--accent-text)] hover:brightness-90",
        red: "bg-[var(--website-red)] text-[var(--accent-text)] hover:brightness-90",
        white: "bg-[var(--accent-text)] text-[var(--bold-text)] hover:brightness-90",
        custom: "" // For buttons that are completely different from base one
    }

    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            {icon && <img className="w-5 h-5" src={icon} />}
            {children}
        </button>
    )
}