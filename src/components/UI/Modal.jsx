export default function Modal({children, className}) {
    return (
        <dialog open className={`modal ${className}`}>
            {children}
        </dialog>
    )
}