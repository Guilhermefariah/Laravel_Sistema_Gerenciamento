export default function SuccessButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-2 py-1 bg-none border border-transparent rounded-md font-semibold text-xs text-green-600 hover:text-white uppercase tracking-widest hover:bg-green-700 transition ease-in-out duration-150 
                
                sm:px-4 sm:py-2 sm:text-sm sm:hover:bg-green-500
                
                md:px-6 md:py-3 md:text-base md:hover:bg-green-600
                
                lg:px-8 lg:py-4 lg:text-lg lg:hover:bg-green-600
                
                ${disabled && "opacity-25"}` + className
            }
            disabled={disabled}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>

            {children}
        </button>
    );
}
