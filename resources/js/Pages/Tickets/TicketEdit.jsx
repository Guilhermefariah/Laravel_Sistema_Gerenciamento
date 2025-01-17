import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InfoButton from "@/Components/Button/InfoButton";
import PrimaryButton from "@/Components/Button/ViewButton";
import WarningButton from "@/Components/Button/WarningButton";
import { Head, Link, useForm } from "@inertiajs/react";
import UpdateButton from "@/Components/Button/UpdateButton";

export default function TicketEdit({ ticket }) {
    const { data, setData, put, processing, errors } = useForm({
        subject: ticket.subject || "",
        description: ticket.description || "",
        date_creation: ticket.date_creation || "",
        status: ticket.status || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("tickets.update", { ticket: ticket.id }));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Editar Ticket
                </h2>
            }
        >
            <Head title="Edit ticket" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4 text-white">
                        <h3 className="text-lg">Editar</h3>
                        <div className="flex space-x-1">
                            <Link href={route("tickets.index")}>
                                <InfoButton className="text-sm" />
                            </Link>
                            <Link href={route("tickets.show", { ticket: ticket.id })}>
                                <PrimaryButton className="text-sm" />
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gray-50 text-sm dark:bg-gray-700 p-4 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-200"
                                >
                                    Assunto
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="ticket Subject"
                                    value={data.subject}
                                    onChange={(e) => setData("subject", e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.subject && (
                                    <span className="text-red-500">{errors.subject}</span>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-gray-200"
                                >
                                    Descrição
                                </label>
                                <textarea
                                    id="description"
                                    placeholder="ticket Description"
                                    value={data.description}
                                    onChange={(e) => setData("description", e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.description && (
                                    <span className="text-red-500">{errors.description}</span>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="date_creation"
                                    className="block text-sm font-medium text-gray-200"
                                >
                                    Data de crianção
                                </label>
                                <input
                                    id="date_creation"
                                    type="text"
                                    placeholder="YYYY-MM-DD"
                                    value={data.date_creation}
                                    onChange={(e) => setData("date_creation", e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.date_creation && (
                                    <span className="text-red-500">{errors.date_creation}</span>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="status"
                                    className="block text-sm font-medium text-gray-200"
                                >
                                    Status
                                </label>
                                <select
                                    id="status"
                                    value={data.status}
                                    onChange={(e) => setData("status", e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value="open">Aberto</option>
                                    <option value="closed">Fechado</option>
                                    <option value="pending">Pendente</option>
                                </select>
                                {errors.status && (
                                    <span className="text-red-500">{errors.status}</span>
                                )}
                            </div>

                            <div className="flex justify-end">
                                <UpdateButton
                                    type="submit"
                                    disabled={processing}
                                    className="text-sm"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
