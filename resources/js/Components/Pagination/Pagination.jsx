import { motion } from "framer-motion";
import React from "react";
import { Link } from "@inertiajs/react";

export const Pagination = ({ links, currentPage }) => {
    return (
        <div className="flex justify-center mt-6 mb-6 space-x-2">
            {links
                .filter((link, index) => {
                    const isPrevious = link.label === "&laquo; Previous";
                    const isNext = link.label === "Next &raquo;";
                    const isCurrent = link.active;
                    const isPageBeforeOrAfter =
                        index === currentPage ||
                        index === currentPage - 1 ||
                        index === currentPage + 1;

                    return (
                        isPrevious || isNext || isCurrent || isPageBeforeOrAfter
                    );
                })
                .map((link, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <Link
                            href={link.url ? link.url : "#"}
                            as="button"
                            className={`px-4 py-1 border rounded-md transition-colors duration-300 ${
                                link.active
                                    ? "bg-blue-800 text-white border-blue-600 cursor-default"
                                    : "bg-white text-gray-800 border-blue-200 hover:bg-gray-100 hover:text-blue-600"
                            } ${
                                !link.url ? "cursor-not-allowed opacity-50" : ""
                            }`}
                            onClick={(e) => !link.url && e.preventDefault()}
                        >
                            {link.label === "&laquo; Previous" ? (
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
                                        d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
                                    />
                                </svg>
                            ) : link.label === "Next &raquo;" ? (
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
                                        d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                                    />
                                </svg>
                            ) : (
                                link.label
                            )}
                        </Link>
                    </motion.div>
                ))}
        </div>
    );
};
