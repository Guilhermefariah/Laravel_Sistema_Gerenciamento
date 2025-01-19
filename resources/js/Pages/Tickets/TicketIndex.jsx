import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/Button/ViewButton";
import SuccessButton from "@/Components/Button/SuccessButton";
import WarningButton from "@/Components/Button/WarningButton";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import { ConfirmDelete } from "@/Components/Delete/ConfirmDelete";
import { Pagination } from "@/Components/Pagination/Pagination";
import { Head, Link, usePage } from "@inertiajs/react";
import TableHeadTicket from "@/Components/Table/TableTicket/TableHeadTicket";

export default function TicketIndex({ tickets }) {
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-50 leading-tight">
                    Tickets
                </h2>
            }
        >
            <Head title="tickets" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-gray-200 shadow-lg sm:rounded-lg">
                    <div className="flex justify-end items-center m-4 text-gray-700">
                        <div className="flex space-x-4">
                            <Link href={route("tickets.create")}>
                                <SuccessButton className="text-sm" />
                            </Link>
                        </div>
                    </div>
                    <AlertMessage message={flash} />

                    <table className="min-w-full divide-y divide-gray-100">
                        <TableHeadTicket />

                        <tbody className="bg-gray-200 divide-y divide-gray-100 cursor-pointer">
                            {tickets.data.map((ticket) => (
                                <tr
                                    key={ticket.id}
                                    className="hover:bg-gray-100 transition duration-300"
                                >
                                    <td className="px-6 py-2 text-sm text-gray-800 hover:text-blue-600 tracking-wider">
                                        {ticket.id}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 hover:text-blue-600 tracking-wider">
                                        {ticket.subject}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 hover:text-blue-600 tracking-wider">
                                        {ticket.description}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 hover:text-blue-600 tracking-wider">
                                        {ticket.date_creation}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 hover:text-blue-600 tracking-wider">
                                        {ticket.status}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-800 hover:text-blue-600 tracking-wider text-center">
                                        <Link
                                            href={route("tickets.show", {
                                                ticket: ticket.id,
                                            })}
                                        >
                                            <PrimaryButton className="ms-1" />
                                        </Link>

                                        <Link
                                            href={route("tickets.edit", {
                                                ticket: ticket.id,
                                            })}
                                        >
                                            <WarningButton className="ms-1" />
                                        </Link>
                                        <ConfirmDelete
                                            id={ticket.id}
                                            routeName="tickets.destroy"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        links={tickets.links}
                        currentPage={tickets.current_page}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
