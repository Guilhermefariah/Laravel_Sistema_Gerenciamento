export default function UpdateButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-2 py-1 bg-none border border-transparent rounded-md font-semibold text-xs text-yellow-600 hover:text-white uppercase tracking-widest hover:bg-yellow-700 transition ease-in-out duration-150 
                
                sm:px-4 sm:py-2 sm:text-sm sm:hover:bg-yellow-500
                
                md:px-6 md:py-3 md:text-base md:hover:bg-yellow-600
                
                lg:px-8 lg:py-4 lg:text-lg lg:hover:bg-yellow-600
                
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
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
            </svg>
            {children}
        </button>
    );
}
