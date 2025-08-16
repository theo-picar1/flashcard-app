// ***** BASE BUTTON COMPONENT *****

type ButtonProps = {
    children: React.ReactNode
    icon?: string
    variant?: 'blue' | 'green' | 'red' | 'white' | 'custom'
    padding?: 'slim' | 'base' | 'thick' | 'custom'
    className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement> // Allow regular button attributes (e.g. onClick)

export default function Button({ children, icon, variant = 'blue', padding = 'base', className = '', ...props }: ButtonProps) {
    const base = "base-button"

    const variants = {
        blue: "bg-[var(--website-blue)] text-[var(--accent-text)] hover:brightness-90",
        green: "bg-[var(--website-green)] text-[var(--accent-text)] hover:brightness-90",
        red: "bg-[var(--website-red)] text-[var(--accent-text)] hover:brightness-90",
        white: "bg-[var(--accent-text)] text-[var(--bold-text)] hover:brightness-90",
        custom: ""
    }

    const paddings = {
        slim: "px-4 py-1",
        base: "px-4 py-2",
        thick: "px-6 py-4",
        custom: ""
    }

    return (
        <button className={`${base} ${variants[variant]} ${paddings[padding]} ${className}`} {...props}>
            {icon && <img className="w-5 h-5" src={icon} />}
            {children}
        </button>
    )
}