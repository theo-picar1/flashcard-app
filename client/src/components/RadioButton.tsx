// ***** REUSABLE RADIO BUTTON COMPONENT *****

// Props
interface RadioButtonProps {
    children: React.ReactNode
    id?: string
    onClick?: () => any
}

export default function RadioButton({ children, id="", onClick }: RadioButtonProps) {
    return (
        <label
            className="relative flex items-center justify-center w-8 h-8 p-6 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer"
            id={id}
            onClick={onClick}
        >
            <input type="radio" name="radio" className="invisible" />

            {children}
        </label>
    )
}