export default function Button({ children, className, textOnly, ...props }) {
    const cssClasses = textOnly
        ? className + " text-button"
        : className + " button";

    return (
        <button className={cssClasses} {...props}>
            {children}
        </button>
    );
}
