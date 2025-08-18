// ***** BASE COMPONENT FOR ANY MODAL THAT HAS A POP-UP ANIMATION

// Props
interface PopUpModalProps {
    children: React.ReactNode
    className?: string
    isOpen: boolean
    close: () => void
}

export default function PopUpModal({ children, className = "", isOpen, close }: PopUpModalProps) {
    return (
        // Overlay for closing modal when clicking outside
        <div 
            className={`base-padding-rule fixed z-10 w-full h-full ${isOpen ? "scale-100" : "scale-0"}`} 
            onClick={close}
        >
            <div 
                className={`${className} z-10 absolute shadow-lg transition-transform transition-opacity duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-10 opacity-0"}`}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}