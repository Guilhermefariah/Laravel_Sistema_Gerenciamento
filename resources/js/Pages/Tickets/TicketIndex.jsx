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
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Tickets
                </h2>
            }
        >
            <Head title="tickets" />
            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4 text-white">
                        <h3 className="text-lg">Lista de tickets</h3>
                        <div className="flex space-x-4">
                            <Link href={route("tickets.create")}>
                                <SuccessButton className="text-sm" />
                            </Link>
                        </div>
                    </div>
                    <AlertMessage message={flash} />

                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">

                        <TableHeadTicket />
                        
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            {tickets.data.map((ticket) => (
                                <tr key={ticket.id}>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider">
                                        {ticket.id}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider">
                                        {ticket.subject}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider">
                                        {ticket.description}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider">
                                        {ticket.date_creation}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider">
                                        {ticket.status}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider text-center">
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
