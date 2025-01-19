export default function DangerButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-2 py-1 bg-none border border-transparent rounded-md font-semibold text-xs text-red-600 hover:text-white uppercase tracking-widest hover:bg-red-700 transition ease-in-out duration-150 
                
                sm:px-4 sm:py-2 sm:text-sm sm:hover:bg-red-500
                
                md:px-6 md:py-3 md:text-base md:hover:bg-red-600
                
                lg:px-8 lg:py-4 lg:text-lg lg:hover:bg-red-600
                
                ${disabled && "opacity-25"}` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
