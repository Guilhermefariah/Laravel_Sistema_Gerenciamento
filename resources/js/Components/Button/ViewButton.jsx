export default function ViewButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-2 py-1 bg-none border border-transparent rounded-md font-semibold text-xs text-gray-600 hover:text-white uppercase tracking-widest hover:bg-gray-700 transition ease-in-out duration-150 
                
                sm:px-4 sm:py-2 sm:text-sm sm:hover:bg-gray-500
                
                md:px-6 md:py-3 md:text-base md:hover:bg-gray-600
                
                lg:px-8 lg:py-4 lg:text-lg lg:hover:bg-gray-600
                
                // Opacidade no estado disabled
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
                    d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
            </svg>

            {children}
        </button>
    );
}
