import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
            <nav className="bg-white dark:bg-gray-800 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/sellers">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-red-500 hover:text-red-700 transition duration-300" />
                            </Link>

                            <div className="hidden space-x-8 sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("sellers.index")}
                                    active={route().current("sellers.index")}
                                >
                                    <h1 className="text-lg text-gray-800 dark:text-gray-400 hover:text-red-500 transition duration-300">
                                        Vendedores
                                    </h1>
                                </NavLink>
                                <NavLink
                                    href={route("tickets.index")}
                                    active={route().current("tickets.index")}
                                >
                                    <h1 className="text-lg text-gray-800 dark:text-gray-400 hover:text-red-500 transition duration-300">
                                        Tickets
                                    </h1>
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-semibold rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                                            />
                                        </svg>
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route("sellers.index")}
                                        method="post"
                                        as="button"
                                    >
                                        Sair
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        !showingNavigationDropdown
                                    )
                                }
                                className="p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-150"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    {showingNavigationDropdown ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {showingNavigationDropdown && (
                    <div className="sm:hidden bg-gray-100 dark:bg-gray-900">
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("sellers.index")}
                                active={route().current("sellers.index")}
                            >
                                Vendedores
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("tickets.index")}
                                active={route().current("tickets.index")}
                            >
                                Tickets de Suporte
                            </ResponsiveNavLink>
                        </div>
                    </div>
                )}
            </nav>

            <header className="bg-gradient-to-r from-red-400 to-red-600 dark:from-red-700 dark:to-red-900 shadow-xl">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-white">
                    {header}
                </div>
            </header>

            <main>{children}</main>
        </div>
    );
}
