import { motion } from "framer-motion";
import React from "react";
import { Link } from "@inertiajs/react";

export const Pagination = ({ links, currentPage }) => {
    return (
        <div className="flex justify-center mt-8 mb-8 space-x-4">
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
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        whileTap={{ scale: 1.1 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                        }}
                        className={`${
                            link.active
                                ? "shadow-lg transform scale-105"
                                : "shadow-md"
                        }`}
                    >
                        <Link
                            href={link.url ? link.url : "#"}
                            as="button"
                            className={`px-6 py-1 text-lg font-medium border rounded-lg transition-colors duration-300 ${
                                link.active
                                    ? "bg-gradient-to-r from-gray-600 to-gray-600hover:text-red-800  text-white hover:text-red-800 cursor-default"
                                    : "bg-gray-600 text-white border-gray-300 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-900 hover:text-red-800"
                            } ${
                                !link.url ? "cursor-not-allowed opacity-50" : ""
                            }`}
                            onClick={(e) => !link.url && e.preventDefault()}
                        >
                            {link.label === "&laquo; Previous"
                                ? "←"
                                : link.label === "Next &raquo;"
                                ? "→"
                                : link.label}
                        </Link>
                    </motion.div>
                ))}
        </div>
    );
};
