// ***** REUSABLE RADIO BUTTON COMPONENT *****

// Props
interface RadioButtonProps {
    children: React.ReactNode
    id?: string
}

export default function RadioButton({ children, id="" }: RadioButtonProps) {
    return (
        <label
            className="relative flex items-center justify-center w-8 h-8 p-6 rounded-md bg-gray-200 cursor-pointer"
            id={id}
        >
            <input type="radio" name="radio" className="invisible" />

            {children}
        </label>
    )
}