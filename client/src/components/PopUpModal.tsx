// ***** BASE COMPONENT FOR ANY MODAL THAT HAS A POP-UP ANIMATION

// Props
interface PopUpModalProps {
    children: React.ReactNode
    className?: string
    isOpen: boolean
}

export default function PopUpModal({ 
    children, 
    className = "", 
    isOpen
}: PopUpModalProps) {
    return (
        <div 
            className={`${className} z-10 absolute shadow-lg transition-transform transition-opacity duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-10 opacity-0"}`}
            onClick={e => e.stopPropagation()}
        >
            {children}
        </div>
    )
}