import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import UserActionsCtx from "../../store/userActionsContext";

export default function Modal({ children, className, open }) {
    const modalRef = useRef();

    useEffect(() => {
        if (open) {
            modalRef.current.showModal();
        } else {
            modalRef.current.close();
        }
    }, [open]);

    return createPortal(
        <dialog className={`modal ${className}`} ref={modalRef}>
            {children}
        </dialog>,
        document.getElementById("modal")
    );
}
