// ***** BASE COMPONENT FOR MODALS WITH SLIDE-IN ANIMATIONS *****

// Props
interface SlideModalProps {
    isOpen: boolean
    close: () => void
    direction: 'top' | 'bottom' | 'left' | 'right' // "Slide-from" direction
    children: React.ReactNode
    title?: string
    titleStyle?: string
    modalStyle?: string
}

export default function SlideModal({ isOpen, close, direction, children, title = '', titleStyle = "flex flex-row justify-between items-center bg-[var(--website-blue)] text-[var(--accent-text)]", modalStyle = '' }: SlideModalProps) {
    const animation = 'z-10 fixed bg-white shadow-lg transition-transform duration-300' // Main animation

    const directionClasses = {
        top: `top-0 left-0 w-full ${isOpen ? 'translate-y-0' : '-translate-y-full'}`,
        bottom: `bottom-0 left-0 w-full ${isOpen ? 'translate-y-0' : 'translate-y-full'}`,
        left: `top-0 left-0 h-full ${isOpen ? 'translate-x-0' : '-translate-x-full'}`,
        right: `top-0 right-0 h-full ${isOpen ? 'translate-x-0' : 'translate-x-full'}`,
    }

    return (
        <div className={`${animation} ${modalStyle} ${directionClasses[direction]}`}>
            <div className={`${titleStyle} ${direction === 'top' || direction === 'bottom' ? 'px-10' : 'px-4'} py-4`}>
                <p className="lg-bold-text">{title}</p>

                <img src="/images/close-icon.png" onClick={close} className="cursor-pointer hover:brightness-90"/>
            </div>

            {children}
        </div>
    )
}