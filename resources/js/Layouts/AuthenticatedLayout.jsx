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
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-gray-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/sellers">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-blue-500 hover:text-blue-600 transition duration-300" />
                            </Link>

                            <div className="hidden space-x-8 sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("sellers.index")}
                                    active={route().current("sellers.index")}
                                >
                                    <h1 className="text-2xl hover:text-blue-500 transition duration-300">
                                        Vendedores
                                    </h1>
                                </NavLink>
                                <NavLink
                                    href={route("tickets.index")}
                                    active={route().current("tickets.index")}
                                >
                                    <h1 className="text-2xl hover:text-blue-500 transition duration-300">
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
                                        className="inline-flex items-center px-4 py-2 text-gray-700  hover:text-blue-500 font-semibold rounded-lg bg-none transition duration-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="size-8"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                            />
                                        </svg>
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route("sellers.index")}
                                        active={route().current(
                                            "sellers.index"
                                        )}
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
                                className="p-2 rounded-md text-gray-700 hover:text-blue-500 transition duration-150"
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
                    <div className="sm:hidden bg-gray-800 p-2">
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

            <header className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-xl">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-white">
                    {header}
                </div>
            </header>

            <main>{children}</main>
        </div>
    );
}
