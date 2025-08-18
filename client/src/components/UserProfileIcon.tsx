// ***** REUABLE USER PROFILE ICON *****

// Props
interface UserProfileProps {
    padding?: string
    onClick?: () => void
    textSize?: string
    className?: string
}

export default function UserProfileIcon({ padding='p-4', textSize="text-xs", onClick, className="" }: UserProfileProps) {
    return (
        <div
            className={`flex-center-item bg-green-800 rounded-full w-0 h-0 ${padding} ${className}`}
            onClick={onClick}
        >
            <p className={textSize}>TP</p>
        </div>
    )
}