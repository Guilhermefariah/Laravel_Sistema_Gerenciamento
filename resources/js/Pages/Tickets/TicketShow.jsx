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
                <h2 className="font-semibold text-xl text-gray-50 leading-tight">
                    Detalhes do ticket
                </h2>
            }
        >
            <Head title="ticket Details" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-gray-200 shadow-lg sm:rounded-lg">
                    <div className="flex justify-end items-center m-4 text-gray-700">
                        <div className="flex space-x-1">
                            <Link href={route("tickets.index")}>
                                <InfoButton className="text-sm" />
                            </Link>
                            <Link
                                href={route("tickets.edit", {
                                    ticket: ticket.id,
                                })}
                            >
                                <WarningButton className="text-sm" />
                            </Link>
                            <ConfirmDelete
                                id={ticket.id}
                                routeName="tickets.destroy"
                            />
                        </div>
                    </div>

                    <AlertMessage message={flash} />

                    <div className="bg-gray-200 text-sm p-6 shadow-lg rounded-lg">
                        <div className="mb-6 divide-y divide-gray-100 pb-4">
                            <h1 className="text-lg font-semibold text-gray-700">
                                Assunto
                            </h1>
                            <p className="text-gray-700">{ticket.subject}</p>
                        </div>
                        <div className="mb-6 divide-y divide-gray-100 pb-4">
                            <h1 className="text-lg font-semibold text-gray-700">
                                Descrição
                            </h1>
                            <p className="text-gray-700">
                                {ticket.description}
                            </p>
                        </div>
                        <div className="mb-6 divide-y divide-gray-100 pb-4">
                            <h1 className="text-lg font-semibold text-gray-700">
                                Data de crianção
                            </h1>
                            <p className="text-gray-700">
                                {ticket.date_creation}
                            </p>
                        </div>
                        <div className="mb-6 divide-y divide-gray-100 pb-4">
                            <h1 className="text-lg font-semibold text-gray-700">
                                Status
                            </h1>
                            <p className="text-gray-700">{ticket.status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
