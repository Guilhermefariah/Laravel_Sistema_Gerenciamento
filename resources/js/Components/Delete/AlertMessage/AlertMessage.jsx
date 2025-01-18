import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AlertMessage = ({ message }) => {
    const isSuccess = message.success ? true : false;
    const isError = message.error ? true : false;

    if (!isSuccess && !isError) return null;

    const alertStyles = isSuccess
        ? {
              bg: "bg-green-500 dark:bg-green-800",
              text: "text-green-800 dark:text-gray-200",
              content: message.success,
          }
        : {
              bg: "bg-red-500 dark:bg-red-800",
              text: "text-red-800 dark:text-gray-200",
              content: message.error,
          };

    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const duration = 2000;
        const interval = 50;
        const step = (interval / duration) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => Math.max(0, prev - step));
        }, interval);

        const timeout = setTimeout(() => {
            window.location.reload();
        }, duration);

        return () => {
            clearInterval(timer);
            clearTimeout(timeout);
        };
    }, [message]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className={`fixed bottom-5 right-3.5 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-lg ${alertStyles.bg} ${alertStyles.text}`}
            >
                {alertStyles.content}
                <div className="w-full h-1 bg-gray-200 mt-2 rounded overflow-hidden">
                    <motion.div
                        initial={{ width: "100%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0 }}
                        className={`h-full ${
                            isSuccess ? "bg-green-700" : "bg-red-700"
                        }`}
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
