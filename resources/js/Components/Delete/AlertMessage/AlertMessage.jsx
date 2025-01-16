import React, { useEffect } from "react";

export const AlertMessage = ({ message }) => {
    const isSuccess = message.success ? true : false;
    const isError = message.error ? true : false;

    if (!isSuccess && !isError) return null;

    const alertStyles = isSuccess
        ? {
              bg: "bg-green-500 dark:bg-green-800",
              text: "text-green-800 dark:text-green-500",
              content: message.success,
          }
        : {
              bg: "bg-red-500 dark:bg-red-800",
              text: "text-red-800 dark:text-red-500",
              content: message.error,
          };

    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.reload();
        }, 3000);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <div className={`flex items-center space-x-4 ${alertStyles.bg} ${alertStyles.text}`}
        >
            {alertStyles.content}
        </div>
    );
};
