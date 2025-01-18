import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InfoButton from "@/Components/Button/InfoButton";
import WarningButton from "@/Components/Button/WarningButton";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import { ConfirmDelete } from "@/Components/Delete/ConfirmDelete";
import { Head, Link, usePage } from "@inertiajs/react";

export default function TicketShow({ ticket }) {
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Detalhes do ticket
                </h2>
            }
        >
            <Head title="ticket Details" />

            <div className="py-4 max-w-7xl max-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4 text-white">
                        <h3 className="text-lg">Detalhes do ticket</h3>
                        <div className="flex space-x-1">
                            <Link href={route("tickets.index")}>
                                <InfoButton className="text-sm" />
                            </Link>
                            <Link href={route("tickets.edit", { ticket: ticket.id })}>
                                <WarningButton className="text-sm" />
                            </Link>
                            <ConfirmDelete id={ticket.id} routeName="tickets.destroy" />
                        </div>
                    </div>

                    <AlertMessage message={flash} />

                    <div className="bg-white text-sm dark:bg-gray-800 p-4 shadow-md">
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-400 dark:text-gray-200">
                                Assunto
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                {ticket.subject}
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-400 dark:text-gray-200">
                                Descrição
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                {ticket.description}
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-400 dark:text-gray-200">
                                Data de crianção
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                {ticket.date_creation}
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-400 dark:text-gray-200">
                                Status
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                {ticket.status}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
